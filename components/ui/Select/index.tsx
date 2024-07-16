import { SelectHTMLAttributes } from 'react'

import s from './style.module.scss'

export const SelectPlaceholderValue = '::PLACEHOLDER::' as const

interface IProps {
  placeholder?: string
}
export function Select(props: SelectHTMLAttributes<HTMLSelectElement> & IProps) {
  return <>
    <select
      {...props}
      className={s.select}
    >
      {
        props.placeholder &&
          <option disabled hidden value={SelectPlaceholderValue}>{props.placeholder}</option>
      }
      {props.children}
    </select>
  </>
}
