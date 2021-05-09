import { pipeline } from 'stream/promises'

import {
  readStream,
  transformStream,
  writeStream,
} from './streams/index.mjs'
import { validation } from './validation/index.mjs'

const successCallback = () => {
  console.log('Success!')
  process.exit(0)
}

const errorCallback = (err) => {
  console.error('Something went wrong', err)
  process.exit(1)
}

export const transformAction = async ({ input, shift, action, output }) => {
  await validation({ input, shift, action, output })

  pipeline(
    readStream(input),
    transformStream(shift, action),
    writeStream(output),
  ).then(
    successCallback,
    errorCallback,
  )
}
