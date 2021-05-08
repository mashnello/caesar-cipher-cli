import { checkFilesAccess } from './checkFilesAccess.mjs'

const checkRequired = (...args) => {
  if (!args.every(Boolean)) {
    console.error('You should pass required parameters "action" and "shift"')
    process.exit(1)
  }
}

export const validation = async ({ input, output, shift, action, }) => {
  checkRequired(shift, action)
  await checkFilesAccess([input, output].filter(Boolean))
}