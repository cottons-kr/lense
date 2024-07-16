'use client'

import { useState, useEffect } from 'react'
import classNames from 'classnames'

import s from './style.module.scss'

export function NavbarBackdrop() {
  const noBackdrop = [/^\/$/, /^\/companies\/[a-zA-Z0-9_-]+$/]
  const [isTop, setIsTop] = useState(true)

  useEffect(() => {
    const handler = () => {
      let value = window.scrollY < 10
      if (noBackdrop.some(regexp => regexp.test(location.pathname))) {
        value = true
      }
      setIsTop(value)
    }
    handler()
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])
  
  return <>
    <div className={classNames(s.backdrop, isTop && s.top)} />
  </>
}
