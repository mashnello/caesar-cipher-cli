export const checkRequiredArgs = (shift, action) => {
  if (![shift, action].every(Boolean)) {
    console.error('You should pass required parameters "action" and "shift"')
    process.exit(1)
  }
}
