import { ReactNode } from 'react'

import s from './style.module.scss'

interface IProps {
  color: 'green' | 'blue' | 'purple'
  children?: ReactNode
}
export function ExplainBadge(props: IProps) {
  const { color, children } = props

  return <>
    <span
      className={s.badge}
      style={{
        color: `var(--${color})`,
        backgroundColor: `var(--light-${color})`
      }}
    >{children}</span>
  </>
}
