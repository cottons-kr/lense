'use client'

import classNames from 'classnames'
import { useRef, useState, DragEvent, useCallback, useEffect, ChangeEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faPaperclip } from '@fortawesome/free-solid-svg-icons'
import { isFileTypeAccepted } from '@/utils/format/file'

import s from './style.module.scss'

interface IProps {
  title: string
  icon?: IconProp
  accept?: string
  name?: string
  multiple?: boolean
  onChange?: (files: File[]) => unknown
}
export function FileInput(props: IProps) {
  const { title, icon, accept, name, multiple, onChange } = props
  const [isDragged, setIsDragged] = useState(false)
  const [files, setFiles] = useState<File[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDragEvent = (callback: (e: DragEvent<HTMLDivElement>) => void) => {
    return useCallback((e: DragEvent<HTMLDivElement>) => {
      e.preventDefault()
      e.stopPropagation()
      callback(e)
    }, [])
  }

  const onDragOver = handleDragEvent(e => {
    setIsDragged(true)
  })

  const onDragLeave = handleDragEvent(e => {
    setIsDragged(false)
  })

  const onDrop = handleDragEvent(e => {
    setIsDragged(false)

    let droppedFiles = Array.from(e.dataTransfer.files)

    if (accept) {
      droppedFiles = droppedFiles.filter(file => isFileTypeAccepted(accept, file.type))
    }

    if (droppedFiles.length <= 0) return

    setFiles(multiple ? droppedFiles : [droppedFiles[0]])
  })

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return
    const selectedFiles = Array.from(e.target.files)
    setFiles(multiple ? selectedFiles : [selectedFiles[0]])
  }

  useEffect(() => {
    if (!fileInputRef.current) return
    const dataTransfer = new DataTransfer()

    for (const file of files) {
      if (file instanceof File) {
        dataTransfer.items.add(file)
      }
    }

    fileInputRef.current.files = dataTransfer.files
    onChange?.(files)
  }, [files])

  return <>
    <div
      className={classNames(s.fileInput, isDragged && s.dragged)}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      <div className={s.icon}>
        <FontAwesomeIcon icon={icon ?? faPaperclip} />
      </div>
      <div className={s.text}>
        <h4>{title}</h4>
        <p>{
          files.length > 0
            ? files.map(file => file.name).join(', ')
            : '클릭하시거나 여기에 파일을 끌어 넣어 업로드 하세요'  
        }</p>
      </div>
    </div>
    <input
      ref={fileInputRef}
      type='file'
      accept={accept}
      name={name}
      multiple={multiple}
      style={{ display: 'none' }}
      onChange={onFileChange}
    />
  </>
}
