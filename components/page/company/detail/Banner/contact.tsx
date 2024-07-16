import { Flex } from '@/components/layout/Flex'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface IProps {
  icon: IconProp
  text: string
}
export function BannerContact(props: IProps) {
  const { icon, text } = props

  return <>
    <Flex align='center' gap={12}>
      <FontAwesomeIcon icon={icon} />
      <span>{text}</span>
    </Flex>
  </>
}
