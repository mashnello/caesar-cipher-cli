import { createReadStream, createWriteStream } from 'fs'
import { EOL } from 'os'

export const readStream = (path) => createReadStream(path)

export const writeStream = (path) =>
  createWriteStream(path, { flags: 'a' })
    .on('close', () => {
      createWriteStream(path, { flags: 'a' }).write(EOL)
    })

export const transformStream = () => (args) => {
  console.log(args)
  return args
}