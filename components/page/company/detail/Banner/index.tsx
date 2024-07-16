import { Flex } from '@/components/layout/Flex'
import { Company } from '@prisma/client'
import classNames from 'classnames'

import s from './style.module.scss'
import { BannerContact } from './contact'
import { faEnvelope, faGlobe, faPhone } from '@fortawesome/free-solid-svg-icons'
import { toSimpleURL } from '@/utils/format/url'

interface IProps {
  company: Company
}
export function CompanyDetailBanner(props: IProps) {
  const { company } = props

  return <>
    <section className={s.banner}>
      <img className={s.background} src={company.bannerImageSrc} alt='배너 이미지' />
      <Flex className={classNames(s.content, s[company.theme])} direction='column' align='center' justify='flex-end' gap={80} height='100%'>
        <img className={s.logo} src={company.logoImageSrc} alt='로고 이미지' />
        <Flex className={s.contact} gap={60} width='fit-content'>
          <BannerContact icon={faPhone} text={company.phone} />
          <BannerContact icon={faEnvelope} text={company.mail} />
          <BannerContact icon={faGlobe} text={toSimpleURL(company.website)} />
        </Flex>
      </Flex>
    </section>
  </>
}
