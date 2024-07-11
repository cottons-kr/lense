import { ReactNode, createElement } from 'react'
import { FlexItem } from './Item'

interface IProps {
  direction?: 'row' | 'column'
  justify?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around'
  align?: 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'stretch'
  gap?: number
  width?: string
  maxwidth?: string
  height?: string
  tag?: string
  className?: string
  children?: ReactNode
}
function Flex(props: IProps) {
  const { direction, justify, align, gap, width, maxwidth, height, tag, className, children } = props

  return createElement(
    tag || 'div',
    {
      className,
      style: {
        width: width || '100%',
        maxWidth: maxwidth,
        height: height,
        display: 'flex',
        flexDirection: direction || 'row',
        justifyContent: justify || 'flex-start',
        alignItems: align || 'flex-start',
        gap: `${gap || 0}px`
      }
    },
    children
  )
}

Flex.Item = FlexItem

export { Flex }
