// console.log("hello")
const { readFileSync, writeFileSync} = require('fs')
console.log(":start with the work here now to take rewading now on the will be of the shore")
const first = readFileSync('./content/first.txt','utf-8')
const secrrond = readFileSync('./content/second.txt','utf-8')
writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first}, ${secrrond}`,
    {flag : 'a'}
)
console.log("done with it now the work as of now")
console.log("start with the new task of the now to async of the work on the will be on the show now to be of")

// if flag is not set it will overrite if set to 'a' now it will append nOW
// console.log(first, secrrond)