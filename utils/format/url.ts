export function toSimpleURL(url: string) {
  const urlObj = new URL(url)
  return urlObj.hostname
}
