export async function checkValidForm(formEl) {
  let isValid = true
  if (formEl) {
    await formEl.validate((valid) => {
      if (!valid)
        isValid = false
    })
  }
  return isValid
}
