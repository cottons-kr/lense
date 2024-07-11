import { ReactNode, createElement } from 'react'

export const enum FlexItemStyle {
  Full = 'full',
  Half = 'half',
}

interface IProps {
  styleEnum?: FlexItemStyle
  tag?: string
  className?: string
  children?: ReactNode
}
export function FlexItem(props: IProps) {
  const { styleEnum, tag, className, children } = props

  return createElement(
    tag || 'div',
    {
      className,
      style: {
        width: styleEnum === FlexItemStyle.Full ? '100%' : '50%',
        flexShrink: 0,
      }
    },
    children
  )
}
