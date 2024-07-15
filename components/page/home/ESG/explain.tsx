import { ExplainContainer } from './Section'
import { ExplainTitle } from './Section/Title'

export function EnvironmentalExplain() {
  return <>
    <ExplainContainer backgroundSrc='/assets/lense-asset/images/landscape-8592826_1280.jpg'>
      <ExplainTitle color='green' title='Environmental' badges={['환경', '지구', '기후']} />
      <p>
        환경에서 가장 중요한 문제는 기후 변화와 탄소 배출과 관련된 문제입니다.<br /><br />
        기업은 지속 가능성과 인류의 생존을 위해 대담한 탄소 배출 감소와 탄소 제로화를 추구해야 합니다. 또한, 자원 및 폐기물 관리를 통한 환경 오염 완화, 에너지 효율화를 통한 에너지 및 자원 소비 감소도 중요한 문제입니다.
      </p>
    </ExplainContainer>
  </>
}

export function SocialExplain() {
  return <>
    <ExplainContainer backgroundSrc='/assets/lense-asset/images/embrace-4788167_1280.jpg'>
      <ExplainTitle color='blue' title='Social' badges={['사회', '책임', '나눔']} />
      <p>사회 측면에서는 기업이 인권 보장과 데이터 보호, 다양성의 고려, 공급망 및 지역사회와의 협력관계 구축에 힘써야 합니다.</p>
    </ExplainContainer>
  </>
}

export function GovernanceExplain() {
  return <>
    <ExplainContainer backgroundSrc='/assets/lense-asset/images/berlin-4759884_1920.jpg'>
      <ExplainTitle color='purple' title='Governance' badges={['경영', '정부', '정의']} />
      <p>
        지배구조 측면에서는 이러한 환경과 사회 가치를 기업이 실현할 수 있도록 뒷받침하는 투명하고 신뢰도 높은 이사회 구성과 감사위원회 구축이 필요합니다. <br />
        또한 뇌물이나 부패를 방지하고, 로비 및 정치 기부금 활동에서 기업윤리를 준수함으로써 높은 지배구조 가치를 확보할 수 있습니다.
      </p>
    </ExplainContainer>
  </>
}

