import * as Minio from 'minio'
import { getEnv } from './env'

const minioClient = new Minio.Client(getMinioAuthInfo())

function getMinioAuthInfo() {
  const endPoint = getEnv('MINIO_ENDPOINT')
  const accessKey = getEnv('MINIO_ACCESS_KEY')
  const secretKey = getEnv('MINIO_SECRET_KEY')
  const useSSL = endPoint.startsWith('https')

  let port: number
  if (process.env.MINIO_PORT) {
    port = parseInt(process.env.MINIO_PORT)
    if (isNaN(port)) {
      throw new Error('MINIO_PORT must be a number')
    }
  } else {
    port = useSSL ? 443 : 80
  }

  return { endPoint, port, accessKey, secretKey, useSSL } as const
}

export async function saveFile(file: File) {
  const name = Math.random().toString(36).substring(2)
  const extension = file.name.split('.').pop()

  const path = `${name}.${extension}`
  const buffer = new Buffer(await file.arrayBuffer())
  const uploaded = await minioClient.putObject('images', path, buffer)

  return uploaded ? `${getEnv('MINIO_ENDPOINT')}/images/${path}` : null
}

export async function deleteFile(filename: string) {
  const path = filename.replace(`${getEnv('MINIO_ENDPOINT')}/images/`, '')
  const deleted = await minioClient.removeObject('images', path)

  return deleted
}
