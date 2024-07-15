import { auth } from '@/utils/auth'
import Link from 'next/link'

import s from './style.module.scss'

export async function NavbarUser() {
  const session = await auth()

  const href = session ? '/edit' : '/login'

  return <>
    <Link className={s.user} href={href}>{
      session ? '기업 관리' : '로그인'
    }</Link>
  </>
}
