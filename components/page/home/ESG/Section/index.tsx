import { ReactNode } from 'react'

import s from './style.module.scss'
import { Flex } from '@/components/layout/Flex'

interface IProps {
  backgroundSrc: string
  children?: ReactNode
}
export function ExplainContainer(props: IProps) {
  const { backgroundSrc, children } = props

  return <>
    <article
      className={s.container}
      style={{ backgroundImage: `url(${backgroundSrc})` }}
    >
      <Flex
        className={s.backdrop}
        direction='column'
        justify='center'
        align='center'
        gap={50}
        height='100%'
      >{children}</Flex>
    </article>
  </>
}
