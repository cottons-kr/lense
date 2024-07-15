import { ButtonHTMLAttributes, MouseEventHandler } from 'react'
import classNames from 'classnames'

import s from './style.module.scss'

export const enum ButtonStyle {
  Default = 'default',
  Secondary = 'secondary',
  Outline = 'outline',
  NoColor = 'no-color',
}

export const enum ButtonSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export const enum ButtonVariant {
  Danger = 'danger',
}

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  styleEnum?: ButtonStyle
  size?: ButtonSize
  variant?: ButtonVariant
  sharp?: boolean
  rounded?: boolean
  fullWidth?: boolean
}
export function Button(props: IProps) {
  const { styleEnum, size, variant, sharp, rounded, fullWidth, ...rest } = props
  const onClick: MouseEventHandler<HTMLButtonElement> = e => {
    e.stopPropagation()
    props.onClick?.(e)
  }

  return <>
    <button
      {...rest}
      onClick={onClick}
      className={classNames(
        rest.className,
        s[styleEnum ?? ButtonStyle.Default],
        s[size ?? ButtonSize.Medium],
        variant && s[variant],
        sharp && s.sharp,
        rounded && s.rounded,
        fullWidth && s.fullWidth,
        s.button
      )}
    />
  </>
}

export type { IProps as ButtonProps }
