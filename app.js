import { Command } from 'commander/esm.mjs'
import { createReadStream, createWriteStream } from 'fs'
import { pipeline } from 'stream'
import { EOL } from 'os'

const readStream = (path) => createReadStream(path)

const writeStream = (path) =>
  createWriteStream(path, { flags: 'a' })
    .on('close', () => {
      createWriteStream(path, { flags: 'a' }).write(EOL)
    })

const program = new Command()

const options = program
  .option('-s, --shift <number>', 'a shift')
  .option('-i, --input <file>', 'an input file')
  .option('-o, --output <file>', 'an output file')
  .option('-a, --action <encode/decode>', 'an action encode/decode')
  .action(({ shift, input, output, action }) => {
    console.log(input, output)
    pipeline(
      readStream(input),
      writeStream(output),
      (err) => err && console.error('Pipeline failed', err)
    )
  })

program.parse(process.argv)
