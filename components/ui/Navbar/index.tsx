import { Flex } from '@/components/layout/Flex'
import Link from 'next/link'
import { NavbarBackdrop } from './backdrop'
import { NavbarUser } from './user'

import s from './style.module.scss'

function Left() {
  return <>
    <Flex align='center' gap={50}>
      <Link href='/'>
        <img className={s.logo} src='/lense.svg' alt='LENSE' />
      </Link>
      <Flex className={s.links} tag='ul'>
        <li>
          <Link href='/companies'>기업 리스트</Link>
        </li>
      </Flex>
    </Flex>
  </>
}

export function Navbar() {
  return <>
    <Flex className={s.nav} tag='nav' justify='center'>
      <NavbarBackdrop />
      <Flex className={s.content} justify='space-between' align='center'>
        <Left />
        <NavbarUser />
      </Flex>
    </Flex>
  </>
}
