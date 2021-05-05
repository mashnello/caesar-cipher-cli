import { Command } from 'commander/esm.mjs'
import { pipeline } from 'stream'
import { createReadStream, createWriteStream } from 'fs'

const program = new Command()

const options = program
  .option('-s, --shift <shift>', 'a shift')
  .option('-i, --input <file>', 'an input file')
  .option('-o, --output <file>', 'an output file')
  .option('-a, --action <type>', 'an action encode/decode')
  .parse()
  .opts()


console.log(options)

const readStream = () => { }

const transformStream = () => { }

const writeStream = () => { }


pipeline(
  readStream(),
  transformStream(),
  writeStream(),
).then(
  () => console.log('Pipeline succeeded'),
  (err) => console.error('Pipeline failed', err)
)