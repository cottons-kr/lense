import { Flex } from '@/components/layout/Flex'
import { CompanyDetailBanner } from '@/components/page/company/detail/Banner'
import { prisma } from '@/utils/prisma'
import { redirect } from 'next/navigation'

import s from './style.module.scss'
import { CompanyDetailDescription } from '@/components/page/company/detail/Description'

interface IPageProps {
  params: {
    id: string
  }
}
export default async function CompanyDetailPage(props: IPageProps) {
  const { id } = props.params

  const company = await prisma.company.findUnique({
    where: { id },
    include: {
      news: { orderBy: { createdAt: 'desc' } }
    }
  })
  if (!company) {
    redirect('/companies')
  }

  return <>
    <CompanyDetailBanner company={company}/>
    <Flex className={s.content} direction='column' gap={70} maxwidth='1200px'>
      <CompanyDetailDescription company={company} />
    </Flex>
  </>
}
