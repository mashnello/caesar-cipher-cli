import { Command } from 'commander/esm.mjs'

import { transformAction } from './actions.mjs'

const program = new Command()

program
  .option('-s, --shift <number>', 'a shift')
  .option('-i, --input <file>', 'an input file')
  .option('-o, --output <file>', 'an output file')
  .option('-a, --action <encode/decode>', 'an action encode/decode')
  .action(transformAction)
  .parse(process.argv)
