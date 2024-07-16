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
    where: { id }
  })
  if (!company) {
    redirect('/companies')
  }

  return <>
    <div></div>
  </>
}
