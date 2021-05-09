import { createWriteStream } from 'fs'

export const writeStream = (path) => {
  if (!path) {
    return process.stdout
  }

  return createWriteStream(path, { flags: 'a' })
}
