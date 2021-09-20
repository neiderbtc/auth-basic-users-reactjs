import { expresionsRegex, messageRegex } from './expresions-regex'

const validateRegex = (e) => {
  const value = e.target ? e.target.value : e.value
  const name = e.target ? e.target.name : e.name

  return expresionsRegex[name].test(value)
    ? { [name]: { value, isValid: true } }
    : {
        [name]: {
          isValid: false,
          error: messageRegex[name],
        },
      }
}

export default validateRegex
