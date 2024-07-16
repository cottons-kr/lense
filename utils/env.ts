export function getEnv(key: string, allowEmpty = false): string {
  const value = process.env[key]
  
  if (allowEmpty) {
    return value || ''
  }
  if (value === undefined || value === null) {
    throw new Error(`Environment variable ${key} is not defined`)
  }

  return value
}
