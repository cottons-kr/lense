import { Flex } from '@/components/layout/Flex'
import classNames from 'classnames'
import { ReactNode } from 'react'

import s from './style.module.scss'

interface IProps {
  title: string
  subtitle: string
  color: 'green' | 'blue' | 'purple'
  children?: ReactNode
}
export function ESGBox(props: IProps) {
  const { title, subtitle, color, children } = props

  return <>
    <div className={classNames(s.box, s[color])}>
      <Flex direction='column' gap={3}>
        <h3 className={s.title}>{title}</h3>
        <p className={s.subtitle}>{subtitle}</p>
      </Flex>
      <pre className={s.content}>{children}</pre>
    </div>
  </>
}
