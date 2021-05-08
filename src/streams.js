import { createReadStream, createWriteStream } from 'fs'
import { createInterface } from 'readline'
import { Transform } from 'stream'
import { EOL } from 'os'

import { cipherUtil } from './cipherUtil.js'


const readLine = createInterface({ input: process.stdin })
  .on('close', () => process.exit(0))

export const readStream = (path) => {
  if (!path) {
    console.log('Please enter your text, press Ctrl+C to exit')
    return readLine
  }

  return createReadStream(path)
}

export const writeStream = (path) => {
  if (!path) {
    return process.stdout
  }

  return createWriteStream(path, { flags: 'a' })
}

export const transformStream = (shift, action) => new Transform({
  transform(chunk, _, callback) {
    const transformed = cipherUtil(chunk.toString(), shift, action).concat(EOL)
    callback(null, transformed);
  }
})