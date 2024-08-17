import PromptSync = require('prompt-sync')

var prompt=PromptSync()

var n1:number=Number(prompt("Digite um numero: "))

const n2:number=(n1-1)
const n3:number=(n1-2)
const n4:number=(n1+1)
const n5:number=(n1+2)

console.log(`${n2}, ${n3}, ${n1}, ${n4}, ${n5}`)
