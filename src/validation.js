export const validation = ({ input, shift, action, output }) => {
  if (!shift || !action) {
    console.error('You should pass required parameters "action" and "shift"')
    process.exit(1)
  }
}