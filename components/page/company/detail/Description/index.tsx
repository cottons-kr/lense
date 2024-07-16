import { Company } from '@prisma/client'
import { CompanyDetailSection } from '../Section'

import s from './style.module.scss'
import { Flex } from '@/components/layout/Flex'

interface IProps {
  company: Company
}
export function CompanyDetailDescription(props: IProps) {
  const { company } = props

  return <>
    <CompanyDetailSection title='기업 설명'>
      <Flex direction='column' gap={20}>
        <h1 className={s.title}>{company.introductionTitle}</h1>
        <pre className={s.content}>{company.introductionContent}</pre>
      </Flex>
    </CompanyDetailSection>
  </>
}
