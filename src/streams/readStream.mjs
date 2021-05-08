import { createReadStream } from 'fs'
import { createInterface } from 'readline'

const readLine = createInterface({ input: process.stdin })
  .on('close', () => process.exit(0))

export const readStream = (path) => {
  if (!path) {
    console.log('Please enter your text, press Ctrl+C to exit')
    return readLine
  }

  return createReadStream(path)
}
