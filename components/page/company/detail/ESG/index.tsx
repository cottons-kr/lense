import { Flex } from '@/components/layout/Flex'
import { Company } from '@prisma/client'
import { ESGBox } from './box'

interface IProps {
  company: Company
}
export function CompanyDetailESG(props: IProps) {
  const { company } = props

  return <>
    <Flex gap={20}>
      {
        company.environmentContent &&
          <ESGBox title='환경' subtitle='Environmental' color='green'>{company.environmentContent}</ESGBox>
      }
      {
        company.socialContent &&
          <ESGBox title='사회' subtitle='Social' color='blue'>{company.socialContent}</ESGBox>
      }
      {
        company.governanceContent &&
          <ESGBox title='경영' subtitle='Governance' color='purple'>{company.governanceContent}</ESGBox>
      }
    </Flex>
  </>
}
