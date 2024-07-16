import * as Minio from 'minio'
import { getEnv } from './env'

const minioClient = new Minio.Client(getMinioAuthInfo())

function getMinioAuthInfo() {
  const endPoint = getEnv('MINIO_ENDPOINT')
  const accessKey = getEnv('MINIO_ACCESS_KEY')
  const secretKey = getEnv('MINIO_SECRET_KEY')

  return {
    endPoint, accessKey, secretKey,
    useSSL: true,
  } as const
}

export async function saveFile(file: File) {
  const name = Math.random().toString(36).substring(2)
  const extension = file.name.split('.').pop()

  const path = `uploads/${name}.${extension}`
  const buffer = Buffer.from(await file.arrayBuffer())
  await minioClient.putObject('lense-asset', path, buffer)

  return `https://${getEnv('MINIO_ENDPOINT')}/lense-asset/${path}`
}

export async function deleteFile(filename: string) {
  const path = filename.replace(`${getEnv('MINIO_ENDPOINT')}/images/`, '')
  const deleted = await minioClient.removeObject('images', path)

  return deleted
}
