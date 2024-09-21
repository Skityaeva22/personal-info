export function defineFullName(user) {
    const words = []
  
    if (user?.lastName)
      words.push(user?.lastName)
    if (user?.firstName)
      words.push(user?.firstName)
    if (user?.patronymic)
      words.push(user?.patronymic)
  
    return words.join(' ')
}
