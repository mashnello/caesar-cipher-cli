import { Transform } from 'stream'
import { EOL } from 'os'

import { caesarCipherUtil } from '../caesarCipherUtil.mjs'

export const transformStream = (shift, action) => new Transform({
  transform(chunk, _, callback) {
    const transformed = caesarCipherUtil(
      chunk.toString(), shift, action
    ).concat(EOL)

    callback(null, transformed);
  }
})