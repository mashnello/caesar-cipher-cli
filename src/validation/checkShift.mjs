export const checkShift = (shift) => {
  if (!Number(shift)) {
    console.error('Shift should be a number')
    process.exit(1)
  }
}