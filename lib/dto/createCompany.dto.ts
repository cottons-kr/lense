import { z } from 'zod'

export class CreateCompanyDto {
  name: string
  phone: string
  mail: string
  website: string
  introductionTitle: string
  introductionContent: string
  bannerImage: File
  environmentContent: string
  socialContent: string
  governanceContent: string
}

export const createCompanyDtoSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  mail: z.string().email(),
  website: z.string().url(),
  introductionTitle: z.string(),
  introductionContent: z.string(),
  bannerImage: z.instanceof(File),
  environmentContent: z.string(),
  socialContent: z.string(),
  governanceContent: z.string()
})