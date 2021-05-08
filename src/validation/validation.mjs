import { checkFilesAccess } from './checkFilesAccess.mjs'
import { checkRequiredArgs } from './checkRequiredArgs.mjs'
import { checkAction } from './checkAction.mjs'
import { checkShift } from './checkShift.mjs'

export const validation = async ({ input, output, shift, action, }) => {
  checkRequiredArgs(shift, action)
  checkAction(action)
  checkShift(shift)
  await checkFilesAccess([input, output].filter(Boolean))
}