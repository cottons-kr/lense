'use server'

import { validateFormDataAndParse } from '@/utils/validator'
import { createCompanyDtoSchema } from '../dto/createCompany.dto'
import { redirect } from 'next/navigation'

export async function createCompany(formData: FormData) {
  const data = validateFormDataAndParse(formData, createCompanyDtoSchema)
  
  

  redirect('/companies')
}