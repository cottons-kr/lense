'use client'

import { Flex } from '@/components/layout/Flex'
import Link from 'next/link'
import className from 'classnames'
import { useEffect, useState } from 'react'

import s from './style.module.scss'

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
  const [isTop, setIsTop] = useState(true)
  const [isOutofVideo, setIsOutofVideo] = useState(false)

  useEffect(() => {
    const handler = () => {
      setIsTop(window.scrollY < 10)
      setIsOutofVideo(window.scrollY > window.innerHeight)
    }
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return <>
    <Flex className={className(s.nav, isTop && s.top, isOutofVideo && s['out-of-video'])} tag='nav' justify='center'>
      <Flex className={s.content} justify='space-between' align='center'>
        <Left />
        <Right />
      </Flex>
    </Flex>
  </>
}
