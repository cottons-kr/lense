import { shuffleArray } from '@/utils/array'
import s from './style.module.scss'
import { Flex } from '@/components/layout/Flex'

function BackgroundVideo() {
  return <>
    <div className={s.background}>{
      shuffleArray(['beach', 'mountain', 'sky', 'traffic']).map((v, i) => (
        <video key={i} autoPlay loop muted playsInline className={s[v]}>
          <source src={`/videos/${v}.mp4`} type='video/mp4' />
        </video>
      ))
    }</div>
  </>
}

export function HomeWelcome() {
  return <>
    <section className={s.section}>
      <BackgroundVideo />
      <Flex className={s.content} direction='column' align='center' justify='center'>
        <img src='/welcome.svg' alt='Reliable ESG Data Provider' aria-label='Reliable ESG Data Provider' />
        <h1 aria-hidden>Reliable ESG Data Provider</h1>
        <p>기업들의 ESG 데이터, 한 자리에서 바로 확인.</p>
      </Flex>
      <img className={s['bottom-logo']} src='/lense.svg' alt='LENSE' />
    </section>
  </>
}
