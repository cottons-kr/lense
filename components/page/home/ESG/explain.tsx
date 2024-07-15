import { ExplainContainer } from './Section'
import { ExplainTitle } from './Section/Title'

export function EnvironmentalExplain() {
  return <>
    <ExplainContainer backgroundSrc='/assets/lense-asset/images/landscape-8592826_1280.jpg'>
      <ExplainTitle color='green' title='Environmental' badges={['환경', '환경', '환경']} />
      <p>환경적 책임을 다하는 기업</p>
    </ExplainContainer>
  </>
}
