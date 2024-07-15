import classNames from 'classnames'
import { TextareaHTMLAttributes } from 'react'

import s from './style.module.scss'

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <>
    <textarea
      {...props}
      className={classNames(s.input, s.textarea, props.className)}
      aria-label={props.name}
    />
  </>
}
