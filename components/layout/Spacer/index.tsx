import { CSSProperties } from 'react'

interface IProps {
  width?: string
  height?: string
  background?: string
  className?: string
}
export function Spacer(props: IProps) {
  const { width, height, background, className } = props
  const style: CSSProperties = {
    width: width || '100%',
    height: height || '100%',
    background,
  }

  return <>
    <div className={className} style={style} />
  </>
}
