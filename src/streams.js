import { createReadStream, createWriteStream } from 'fs'
import { Transform } from 'stream'
import { EOL } from 'os'

export const readStream = (path) => createReadStream(path)

export const writeStream = (path) => createWriteStream(path, { flags: 'a' })

const ALPHABETH_LENGTH = 26
const UPPER_CASE_START_CODE = 65
const LOWER_CASE_START_CODE = 97
const UPPER_CASE_END_CODE = 90
const LOWER_CASE_END_CODE = 122

export const transformStream = (shift, action) => new Transform({
  transform(chunk, encoding, callback) {
    const shiftDir = action === 'encode' ? 1 : -1
    const parsedShift = shift % ALPHABETH_LENGTH * shiftDir
    const transformed = chunk
      .toString()
      .split('')
      .map((letter) => {
        const charCode = letter.charCodeAt(0)
        const isAlphabeth = /[a-z]/i.test(letter)
        const isLowerCased = charCode >= LOWER_CASE_START_CODE
        const startCode = isLowerCased
          ? LOWER_CASE_START_CODE
          : UPPER_CASE_START_CODE
        const endCode = isLowerCased
          ? LOWER_CASE_END_CODE
          : UPPER_CASE_END_CODE
        const newShift = (charCode - startCode + parsedShift) % ALPHABETH_LENGTH
        const newCharCode = newShift + (newShift >= 0 ? startCode : endCode + 1)

        return isAlphabeth
          ? String.fromCharCode(newCharCode)
          : letter
      })
      .join('')
      .concat(EOL)
    callback(null, transformed);
  }
})