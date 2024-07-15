import classNames from 'classnames'
import Link from 'next/link'
import { ButtonHTMLAttributes, ReactNode } from 'react'
import { ButtonSize, ButtonStyle, ButtonVariant } from '.'

import s from './style.module.scss'

interface IProps {
  href: string
  styleEnum?: ButtonStyle
  size?: ButtonSize
  variant?: ButtonVariant
  sharp?: boolean
  rounded?: boolean
  fullWidth?: boolean
  className?: string
  children?: ReactNode
}
export function LinkButton(props: ButtonHTMLAttributes<HTMLButtonElement> & IProps) {
  const { href, styleEnum, size, variant, sharp, rounded, fullWidth, disabled, className, children } = props

  return <>
    <Link
      href={href}
      className={classNames(
        s.link,
        s.button,
        s[styleEnum ?? ButtonStyle.Default],
        s[size ?? ButtonSize.Medium],
        variant && s[variant],
        sharp && s.sharp,
        rounded && s.rounded,
        disabled && s.disabled,
        fullWidth && s.fullWidth,
        className,
      )}
    >{children}</Link>
  </>
}
