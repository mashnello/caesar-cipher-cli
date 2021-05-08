import { pipeline } from 'stream/promises'

import {
  readStream,
  transformStream,
  writeStream,
} from './streams.js'
import { validation } from './validation.js'

export const transformAction = async ({ input, shift, action, output }) => {
  await validation({ input, shift, action, output })

  pipeline(
    readStream(input),
    transformStream(shift, action),
    writeStream(output),
  ).then(
    () => {
      console.log('Pipeline succeded')
      process.exit(0)
    },
    (err) => {
      console.error('Pipeline failed', err)
      process.exit(1)
    }
  )
}