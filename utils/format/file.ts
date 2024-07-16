export function isFileTypeAccepted(accept: string, fileType: string) {
  const acceptedTypes = accept.split(',')

  for (const type of acceptedTypes) {
    if (type.includes('*')) {
      const acceptBaseType = type.split('/')[0]
      const fileBaseType = fileType.split('/')[0]
      if (acceptBaseType === '*' || acceptBaseType === fileBaseType) {
        return true
      }
    } else {
      if (type === fileType) {
        return true
      }
    }
  }

  return false
}
