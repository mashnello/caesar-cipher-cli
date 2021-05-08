import { Transform } from 'stream'
import { EOL } from 'os'

import { caesarCipher } from '../utils/index.mjs'

export const transformStream = (shift, action) => new Transform({
  transform(chunk, _, callback) {
    const transformed = caesarCipher(
      chunk.toString(), shift, action
    ).concat(EOL)

    callback(null, transformed);
  }
})