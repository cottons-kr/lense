import { InputHTMLAttributes } from 'react'
import classNames from 'classnames'

import s from './style.module.scss'

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <>
    <input
      {...props}
      className={classNames(s.input, props.className)}
      aria-label={props.name}
    />
  </>
}
