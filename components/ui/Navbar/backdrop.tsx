'use client'

import { useState, useEffect } from 'react'
import classNames from 'classnames'

import s from './style.module.scss'

export function NavbarBackdrop() {
  const [isTop, setIsTop] = useState(true)

  useEffect(() => {
    const handler = () => {
      setIsTop(window.scrollY < 10)
    }
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])
  
  return <>
    <div className={classNames(s.backdrop, isTop && s.top)} />
  </>
}
