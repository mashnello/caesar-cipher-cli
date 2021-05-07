import { pipeline } from 'stream/promises'

import {
  readStream,
  transformStream,
  writeStream,
} from './streams.js'
import { validation } from './validation.js'

export const transformAction = ({ input, shift, action, output }) => {
  validation({ input, shift, action, output })

  pipeline(
    readStream(input),
    transformStream(shift, action),
    writeStream(output),
  ).then(
    () => console.log('Pipeline succeded'),
    (err) => console.error('Pipeline failed', err)
  )
}