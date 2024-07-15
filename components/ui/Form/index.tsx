import { FormHTMLAttributes } from 'react'
import classNames from 'classnames'

import s from './style.module.scss'

export function Form(props: FormHTMLAttributes<HTMLFormElement>) {
  return <>
    <form {...props} className={classNames(props.className, s.form)}>{props.children}</form>
  </>
}
