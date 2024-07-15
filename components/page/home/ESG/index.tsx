import { Flex } from '@/components/layout/Flex'

import s from './style.module.scss'
import { EnvironmentalExplain } from './explain'

export function HomeWhatisESG() {
  return <>
    <section className={s.section}>
      <h1 className={s.title}>
        What is <span>ESG</span>?
      </h1>
      <Flex direction='column'>
        <EnvironmentalExplain />
      </Flex>
    </section>
  </>
}
