const ALPHABETH_LENGTH = 26

const UPPER_CASE = {
  start: 65,
  end: 91,
}

const LOWER_CASE = {
  start: 97,
  end: 123,
}

const getRegister = (charCode) =>
  charCode >= LOWER_CASE.start ? LOWER_CASE : UPPER_CASE

export const caesarCipherUtil = (string, shift, action) => {
  const shiftDir = action === 'encode' ? 1 : -1
  const parsedShift = shift % ALPHABETH_LENGTH * shiftDir
  let result = ''

  for (let i = 0; i < string.length; i += 1) {
    const letter = string[i]
    const charCode = letter.charCodeAt(0)
    const isAlphabeth = /[a-z]/i.test(letter)
    const register = getRegister(charCode)

    const newShift = (charCode - register.start + parsedShift) % ALPHABETH_LENGTH
    const newCharCode = newShift + (newShift >= 0 ? register.start : register.end)

    result += isAlphabeth
      ? String.fromCharCode(newCharCode)
      : letter
  }

  return result
}