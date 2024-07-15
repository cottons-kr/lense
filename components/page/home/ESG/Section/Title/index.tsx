import { Flex } from '@/components/layout/Flex'
import { ExplainBadge } from '../Badge'

import s from './style.module.scss'

interface IProps {
  title: string
  color: 'green' | 'blue' | 'purple'
  badges: string[]
}
export function ExplainTitle(props: IProps) {
  const { title, color, badges } = props

  const firstTitleLetter = title[0]
  const restTitleLetter = title.slice(1)

  return <>
    <Flex direction='column' gap={15} width='fit-content'>
      <h3 className={s.title}>
        <span
          style={{ color: `var(--${color})` }}
        >{firstTitleLetter}</span>
        {restTitleLetter}
      </h3>
      <Flex justify='center' gap={15}>{
        badges.map((badge, i) => (
          <ExplainBadge key={i} color={color}>{badge}</ExplainBadge>
        ))
      }</Flex>
    </Flex>
  </>
}
