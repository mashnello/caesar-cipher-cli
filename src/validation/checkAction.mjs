export const checkAction = (action) => {
  if (!/decode|encode/.test(action)) {
    console.error('Action should be either "encode" or "decode"')
    process.exit(1)
  }
}
