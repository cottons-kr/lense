import { Flex } from '@/components/layout/Flex'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import s from './style.module.scss'

function Content() {
  return <>
    <Flex direction='column' gap={50} maxwidth='1200px'>
      <Flex className={s.top} direction='column' gap={30}>
        <Flex className={s.brand} align='center' gap={27}>
          <img src='/lense_dark.svg' alt='LENSE' />
          <span>∙</span>
          <span>/lɛnz/</span>
        </Flex>
        <p className={s.meaning}>Lens for ENviroment, Social, Ethics</p>
        <p className={s.description}>
          렌즈는 고객과 기업 간 <span>ESG</span> 정보를 더 쉽게 교환할 수 있고,<br />
          고객에게 <span>ESG</span> 정보를 직접 제공할 수 있는<br />
          통합 플랫폼입니다.
        </p>
      </Flex>
      <Link className={s.button} href='/companies'>
        <FontAwesomeIcon icon={faPaperPlane} />
        모두 보러가기
      </Link>
    </Flex>
  </>
}

function CompanyMarquee() {
  return <>
    
  </>
}

export function HomeIntroduction() {
  return <>
    <section className={s.section}>
      <Content />
      <CompanyMarquee />
    </section>
  </>
}
