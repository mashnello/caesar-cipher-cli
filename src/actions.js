import { pipeline } from 'stream/promises'

import {
  readStream,
  transformStream,
  writeStream,
} from './streams.js'

export const transformAction = ({ input, shift, action, output }) => {
  pipeline(
    readStream(input),
    transformStream(shift, action),
    writeStream(output),
  ).then(
    () => console.log('Pipeline succeded'),
    (err) => console.error('Pipeline failed', err)
  )
}