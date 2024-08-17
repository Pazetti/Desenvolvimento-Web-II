import PromptSync = require('prompt-sync')

var prompt=PromptSync()

let numeros : Array<number>=[1,2,3,4,5,6,7,8,9,10]

var n1:number=Number(prompt("Digite Um numero acima de 10: "))

numeros.push(n1)

console.log(numeros)