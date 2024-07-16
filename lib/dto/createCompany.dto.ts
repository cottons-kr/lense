import { BusinessItem, BusinessType } from '@prisma/client'
import { z } from 'zod'

export class CreateCompanyDto {
  name: string
  phone: string
  mail: string
  website: string
  businessType: BusinessType
  businessItem: BusinessItem
  introductionTitle: string
  introductionContent: string
  logoImage: File
  bannerImage: File
  environmentContent?: string
  socialContent?: string
  governanceContent?: string
}

export const createCompanyDtoSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  mail: z.string().email(),
  website: z.string().url(),
  businessType: z.nativeEnum(BusinessType),
  businessItem: z.nativeEnum(BusinessItem),
  introductionTitle: z.string(),
  introductionContent: z.string(),
  logoImage: z.instanceof(File),
  bannerImage: z.instanceof(File),
  environmentContent: z.string().optional(),
  socialContent: z.string().optional(),
  governanceContent: z.string().optional()
})