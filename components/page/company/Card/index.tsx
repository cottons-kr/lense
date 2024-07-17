import { Company } from '@prisma/client'
import Link from 'next/link'
import { Flex } from '@/components/layout/Flex'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames'

import s from './style.module.scss'

interface IProps {
  company: Company
}
export function CompanyCard(props: IProps) {
  const { company } = props
  
  const shortContent = `${company.introductionContent.slice(0, 80)}...`
  
  return <>
    <Link
      className={s.background}
      href={`/companies/${company.id}`}
      style={{
        backgroundImage: `url(${company.bannerImageSrc})`
      }}
    >
      <article className={classNames(s.card, s[company.theme])}>
        <img src={company.logoImageSrc} alt={company.name} />
        <Flex className={s.content} direction='column' gap={7}>
          <h3>{company.introductionTitle}</h3>
          <p>{shortContent}</p>
        </Flex>
        <Flex className={s.stats} align='center' gap={8}>
          <FontAwesomeIcon icon={faEye} />
          <span>0</span>
        </Flex>
      </article>
    </Link> 
  </>
}
