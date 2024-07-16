export function toSimpleURL(url: string) {
  return url.replace(/(^\w+:|^)\/\/|www.|\/$/g, '')
}
