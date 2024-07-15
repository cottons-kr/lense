import { auth } from '@/utils/auth'
import Link from 'next/link'
import { prisma } from '@/utils/prisma'

import s from './style.module.scss'

export async function NavbarUser() {
  const session = await auth()
  const company = session?.user?.email ? 
    await prisma.company.findUnique({
      where: { ownerEmail: session.user.email }
    }) :
    null

  const href = company ?
    `/companies/${company.id}` :
    session?.user ? '/new' : '/login'

  return <>
    <Link className={s.user} href={href}>{
      session ? '기업 관리' : '로그인'
    }</Link>
  </>
}
