import { Flex } from '@/components/layout/Flex'
import { EnvironmentalExplain, GovernanceExplain, SocialExplain } from './explain'

import s from './style.module.scss'

export function HomeWhatisESG() {
  return <>
    <section className={s.section}>
      <h1 className={s.title}>
        What is <span>ESG</span>?
      </h1>
      <Flex direction='column'>
        <EnvironmentalExplain />
        <SocialExplain />
        <GovernanceExplain />
      </Flex>
    </section>
  </>
}
