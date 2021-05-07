import { promises as fs } from 'fs'

export const checkFilesAccess = async (...paths) => {
  try {
    await Promise.all(paths.map(path => fs.access(path)))
  } catch (err) {
    console.error(`File with path "${err.path}" not found`)
    process.exit(1)
  }
}