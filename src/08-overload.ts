function parseStr(input: string | string[]): string | string []{
 if(Array.isArray(input)){
  return input.join('')
 } else {
  return input.split('')
 }
}

const rtaArray = parseStr('Juanse')
console.log('rtaArray', rtaArray)

const rtaString = parseStr(['J','u','a','n','s','e'])
console.log('rtaString', rtaString)
