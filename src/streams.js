import { createReadStream, createWriteStream } from 'fs'
import { Transform } from 'stream'
import { EOL } from 'os'

export const readStream = (path) => createReadStream(path)

export const writeStream = (path) =>
  createWriteStream(path, { flags: 'a' })
    .on('close', () => {
      createWriteStream(path, { flags: 'a' }).write(EOL)
    })

export const transformStream = (shift, action) => new Transform({
  transform(chunk, encoding, callback) {
    const transformed = chunk
      .toString()
      .split('')
      .map(letter => {
        const charCode = letter.charCodeAt(0)
        const isAlphabeth = letter.match(/[a-z]/i)

        return isAlphabeth
          ? String.fromCharCode(charCode + parseInt(shift))
          : letter
      })
      .join('')
    callback(null, transformed);
  }
})