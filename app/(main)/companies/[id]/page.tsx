import { CompanyDetailBanner } from '@/components/page/company/detail/Banner'
import { prisma } from '@/utils/prisma'
import { redirect } from 'next/navigation'

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
  </>
}
