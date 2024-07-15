import { Flex } from '@/components/layout/Flex'
import { auth, signIn } from '@/utils/auth'
import { redirect } from 'next/navigation'

import s from './style.module.scss'

export default async function LoginPage() {
  const session = await auth()
  if (session?.user) {
    redirect('/edit')
  }

  const handleLogin = async () => {
    'use server'
    await signIn('google', { redirectTo: '/new' })
  }

  return <>
    <div className={s.login}>
      <Flex className={s.container} direction='column' align='center' gap={40} width='100%' maxwidth='500px'>
        <img className={s.logo} src='/lense_dark.svg' alt='LENSE' />
        <form action={handleLogin}>
          <button type='submit'>
            <img src='/assets/lense-asset/images/google_small.svg' />
            <span>Google로 로그인</span>
          </button>
        </form>
      </Flex>
    </div>
  </>
}
