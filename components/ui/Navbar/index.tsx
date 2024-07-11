import { Flex } from '@/components/layout/Flex'

import s from './style.module.scss'
import Link from 'next/link'

function Left() {
  return <>
    <Flex align='center' gap={50}>
      <Link href='/'>
        <img className={s.logo} src='/lense.svg' alt='LENSE' />
      </Link>
      <Flex className={s.links} tag='ul'>
        <li>
          <Link href='/companies'>리스트</Link>
        </li>
      </Flex>
    </Flex>
  </>
}

function Right() {
  return <></>
}

export function Navbar() {
  return <>
    <Flex className={s.nav} tag='nav' justify='center'>
      <Flex className={s.content} justify='space-between' align='center'>
        <Left />
        <Right />
      </Flex>
    </Flex>
  </>
}
