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
        justify='center'
        align='center'
        height='100%'
      >{children}</Flex>
    </article>
  </>
}
