import * as Minio from 'minio'

const minioClient = new Minio.Client({})

export async function saveFile(file: File) {
  const name = Math.random().toString(36).substring(2)
  const extension = file.name.split('.').pop()

  throw new Error('Not implemented')
}

export async function deleteFile(path: string) {
  throw new Error('Not implemented')
}

export async function uploadImage(file: File) {  
  throw new Error('Not implemented')
}
