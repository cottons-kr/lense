import { prisma } from '@/utils/prisma'

import s from './style.module.scss'
import { CompanySearch } from '@/components/page/company/Search'
import { CompanyCard } from '@/components/page/company/Card'

export default async function CompaniesPage() {
  const companies = await prisma.company.findMany({
    orderBy: { name: 'asc' },
  })

  return <>
    <section className={s.section}>
      <h1>기업 리스트</h1>
      <CompanySearch />
      <div className={s.list}>{
        companies.map(company => <CompanyCard key={company.id} company={company} />)
      }</div>
    </section>
  </>
}
