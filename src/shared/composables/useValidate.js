export function useValidate(form) {
  function validateRuText(rule, value, callback) {
    if (value && !/^[а-яА-ЯёЁ-]+$/.test(value))
      return callback(new Error('Используйте кириллицу'))
    else
      return callback()
  }

  function validateAge(rule, value, callback) {
    if ((value - Math.max(...form.value.children.map((c) => c.age))) < 1)
      return callback(new Error('Возраст родителя должен быть больше возраста ребенка'))
    else
      return callback()
  }

  return { validateRuText, validateAge }
}
