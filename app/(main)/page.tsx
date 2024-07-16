import { HomeWhatisESG } from '@/components/page/home/ESG'
import { HomeIntroduction } from '@/components/page/home/Introdution'
import { HomeWelcome } from '@/components/page/home/Welcome'

export default function IndexPage() {
  return <>
    <HomeWelcome />
    <HomeIntroduction />
    <HomeWhatisESG />
  </>
}