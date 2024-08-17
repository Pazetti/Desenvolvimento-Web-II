import PromptSync = require('prompt-sync')

var prompt=PromptSync()

const n1:number=Number(prompt("digite o primeiro numero: "))
const n2:number=Number(prompt("digite o segundo numero: "))

let soma=n1+n2
let sub=n1-n2
let mult=n1*n2
let div=n1/n2

console.log(`
    Soma:${soma}
    Subtração:${sub}
    Multiplicaçao:${mult}
    Divisão:${div}
    `)