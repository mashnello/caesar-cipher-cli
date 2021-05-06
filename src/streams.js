import { createReadStream, createWriteStream } from 'fs'
import { Transform } from 'stream'
import { EOL } from 'os'

import { cipherUtil } from './cipherUtil.js'

export const readStream = (path) => createReadStream(path)

export const writeStream = (path) => createWriteStream(path, { flags: 'a' })

export const transformStream = (shift, action) => new Transform({
  transform(chunk, _, callback) {
    const transformed = cipherUtil(chunk.toString(), shift, action).concat(EOL)
    callback(null, transformed);
  }
})