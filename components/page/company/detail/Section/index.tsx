import { Flex } from '@/components/layout/Flex'
import { ReactNode } from 'react'

import s from './style.module.scss'

interface IProps {
  title: string
  children?: ReactNode
}
export function CompanyDetailSection(props: IProps) {
  const { title, children } = props

  return <>
    <Flex direction='column' gap={25}>
      <h2 className={s.title}>{title}</h2>
      {children}
    </Flex>
  </>
}
