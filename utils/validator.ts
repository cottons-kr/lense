import { ZodObject, ZodRawShape, ZodTypeAny, z } from 'zod'

const zodKeys = <T extends z.ZodTypeAny>(schema: T): string[] => {
  if (schema === null || schema === undefined) return []
  if (schema instanceof z.ZodNullable || schema instanceof z.ZodOptional) return zodKeys(schema.unwrap())
  if (schema instanceof z.ZodArray) return zodKeys(schema.element)
  if (schema instanceof z.ZodObject) {
    const entries = Object.entries(schema.shape)
    return entries.flatMap(([key, value]) => {
      const nested = value instanceof z.ZodType ? zodKeys(value).map(subKey => `${key}.${subKey}`) : []
      return nested.length ? nested : key
    })
  }
  return []
}

export function parseFormData(formData: FormData): Record<string, string | number | boolean> {
  const data = Object.fromEntries(formData.entries())
  return Object.fromEntries(Object.entries(data).map(([key, value]) => {
    if (value === 'true') return [key, true]
    if (value === 'false') return [key, false]
    // if (!isNaN(Number(value))) return [key, Number(value)]
    return [key, value]
  }))
}

export function isValidData<T extends object>(data: unknown, schema: ZodObject<ZodRawShape, 'strip', ZodTypeAny, T>): data is T {
  const result = schema.safeParse(data)
  if (!result.success) {
    console.log(result.error.errors)
    throw new Error(result.error.errors.map(e => e.message).join(', '))
  }
  return true
}

export function validateFormDataAndParse<T extends object>(formData: FormData, schema: ZodObject<ZodRawShape, 'strip', ZodTypeAny, T>): T {
  const data = parseFormData(formData)
  const keys = zodKeys(schema)
  if (isValidData(data, schema)) {
    return keys.reduce((acc, key) => {
      const value = data[key]
      return { ...acc, [key]: value }
    }, {} as T)
  } else {
    throw new Error('Invalid data')
  }
}
