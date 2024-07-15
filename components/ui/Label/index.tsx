import { ReactElement, ReactNode, cloneElement } from 'react'
import classNames from 'classnames'
import React from 'react'

import s from './style.module.scss'

interface LabelProps {
  htmlFor?: string
  text?: string
  essential?: boolean
  key?: string
  children?: ReactNode
}
export function Label(props: LabelProps) {
  const { htmlFor, text, essential, children } = props

  const enhancedChildren = React.Children.map(children, child => {
    if (React.isValidElement(child) && essential) {
      return cloneElement(child as ReactElement<HTMLInputElement>, { required: true })
    }
    return child
  })

  return <>
    <label className={s.label} htmlFor={htmlFor}>
      <span className={classNames(s.text, essential && s.essential)}>{
        text || (typeof children === 'string' ? children : '')
      }</span>
      {enhancedChildren}
    </label>
  </>
}
