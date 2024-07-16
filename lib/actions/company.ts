'use server'

import { validateFormDataAndParse } from '@/utils/validator'
import { createCompanyDtoSchema } from '@/lib/dto/createCompany.dto'
import { redirect } from 'next/navigation'
import { prisma } from '@/utils/prisma'
import { saveFile } from '@/utils/file'
import { auth } from '@/utils/auth'
import { getBestBackgroundColor } from '@/utils/image'

export async function createCompany(formData: FormData) {
  const data = validateFormDataAndParse(formData, createCompanyDtoSchema)
  const session = await auth()
  
  if (!session?.user || !session.user.email) {
    redirect('/login')
  }

  const existingCompany = await prisma.company.findFirst({
    where: {
      ownerEmail: session.user.email
    }
  })
  if (existingCompany) {
    redirect(`/companies/${existingCompany.id}`)
  }

  const logoImageSrc = await saveFile(data.logoImage)
  const bannerImageSrc = await saveFile(data.bannerImage)
  const theme = await getBestBackgroundColor(logoImageSrc)

  const company = await prisma.company.create({
    data: {
      ownerEmail: session.user.email,

      name: data.name,
      phone: data.phone,
      mail: data.mail,
      website: data.website,
      theme,
      businessType: data.businessType,
      businessItem: data.businessItem,

      logoImageSrc,
      bannerImageSrc,

      introductionTitle: data.introductionTitle,
      introductionContent: data.introductionContent,
      environmentContent: data.environmentContent,
      socialContent: data.socialContent,
      governanceContent: data.governanceContent
    }
  })

  redirect(`/companies/${company.id}`)
}