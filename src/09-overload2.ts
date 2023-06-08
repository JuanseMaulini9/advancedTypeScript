
export function parseStr(input: string): string[]
export function parseStr(input: string[]): string
export function parseStr(input: number): boolean

// export function parseStr(input: string | string[]): string | string[] {
//   if (Array.isArray(input)) {
//     return input.join('');
//   } else {
//     return input.split('');
//   }
// }

export function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join('');
  } else if(typeof input === 'string'){
    return input.split('');
  } else if(typeof input === 'number'){
    return true
  }
}

const rtaArray = parseStr('Juanse');
rtaArray.reverse()
console.log('rtaArray', rtaArray);

const rtaString = parseStr(['J', 'u', 'a', 'n', 's', 'e']);
rtaString.toLocaleLowerCase()
console.log('rtaString', rtaString);

const rtaBoolean = parseStr(12)
console.log(rtaBoolean)
