import { auth } from '@/utils/auth'
import { redirect } from 'next/navigation'
import { Flex } from '@/components/layout/Flex'

import s from './style.module.scss'

export default async function NewCompanyPage() {
  const session = await auth()
  if (!session?.user) {
    redirect('/login')
  }

  return <>
    <form className={s.form}>
      <img className={s.logo} src='/lense_dark.svg' alt='LENSE' />
      <h1>새로운 기업 등록</h1>
      <Flex direction='column' gap={30}>

      </Flex>
    </form>
  </>
}
