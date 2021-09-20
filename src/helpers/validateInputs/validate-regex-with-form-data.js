import validateRegex from './validate-regex'

const validateRegexWithFormData = (formData) => {
  const errorsForm = {}
  for (const [llave, dato] of formData.entries()) {

    if (llave !== 'image') {
      const validation = validateRegex({ name: llave, value: dato })
      if (!validation[llave].isValid) {
        errorsForm[llave] = { ...validation[llave] }
      }
    }
  }
  return errorsForm
}

export default validateRegexWithFormData
