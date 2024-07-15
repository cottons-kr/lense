'use client'

import { MouseEventHandler } from 'react'
import { Button, ButtonProps } from '.'
import { useFormStatus } from 'react-dom'

import s from './style.module.scss'

export function SubmitButton(props: ButtonProps) {
  const { pending } = useFormStatus()
  const onClick: MouseEventHandler<HTMLButtonElement> = e => {
    if (pending) {
      e.preventDefault()
    } else {
      props.onClick?.(e)
    }
  }

  return <>
    <Button {...props} type='submit' className={pending ? s.loading : ''} onClick={onClick} />
  </>
}
