import { auth } from '@/utils/auth'
import { redirect } from 'next/navigation'
import { Flex } from '@/components/layout/Flex'
import { Label } from '@/components/ui/Label'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Input/Textarea'
import { FileInput } from '@/components/ui/Input/File'
import { SubmitButton } from '@/components/ui/Button/Submit'
import { createCompany } from '@/lib/actions/company'

import s from './style.module.scss'

export default async function NewCompanyPage() {
  const session = await auth()
  if (!session?.user) {
    redirect('/login')
  }

  return <>
    <form className={s.form} action={createCompany}>
      <img className={s.logo} src='/lense_dark.svg' alt='LENSE' />
      <h1>새로운 기업 등록</h1>
      <Flex direction='column' gap={60}>
        <Flex direction='column' gap={20}>
          <h2>기본 정보</h2>
          <Label text='이름' essential>
            <Input type='text' name='name' />
          </Label>
          <Label text='전화번호' essential>
            <Input type='tel' name='phone' />
          </Label>
          <Label text='이메일주소' essential>
            <Input type='email' name='mail' />
          </Label>
          <Label text='공식 사이트 주소' essential>
            <Input type='url' name='website' />
          </Label>
        </Flex>

        <Flex direction='column' gap={20}>
          <h2>기업 소개</h2>
          <Label text='제목' essential>
            <Input type='text' name='introductionTitle' />
          </Label>
          <Label text='내용' essential>
            <Textarea name='introductionContent' />
          </Label>
          <Label text='배너 이미지' essential>
            <FileInput title='배너 이미지' accept='image/*' name='bannerImage' />
          </Label>
        </Flex>

        <Flex direction='column' gap={20}>
          <h2>ESG 소개</h2>
          <Label text='환경 (Environment)' essential>
            <Textarea name='environmentContent' />
          </Label>
          <Label text='사회 (Social)' essential>
            <Textarea name='socialContent' />
          </Label>
          <Label text='경영 (Governance)' essential>
            <Textarea name='governanceContent' />
          </Label>
        </Flex>

        <SubmitButton fullWidth>등록하기</SubmitButton>
      </Flex>
    </form>
  </>
}
