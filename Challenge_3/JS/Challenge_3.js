const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

const owed = parseInt(`'R' + ${leoBalance} + ${sarahBalance}\n`)
const leo = `${leoName} ${leoSurname} Owed R  ${leoBalance}\n`
const sarah = `${sarahName}  ${sarahSurname} Owed R  ${sarahBalance}\n`
const total = "\nTotal amount owed: "
const result = `${leo}  ${sarah} ${divider} ${total} ${owed}\n ${divider}`  

console.log(result)