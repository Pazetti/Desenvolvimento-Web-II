import PromptSync = require('prompt-sync')

var prompt=PromptSync()

const x:number=Number(prompt("digite o primeiro numero: "))
const y:number=Number(prompt("digite o segundo numero: "))
const conf:number=Number(prompt("digite o numero a ser pesquisado: "))

if(conf>10&&conf<y){
    console.log("Esta no intervalo")
}else{
    console.log("Não esta no intervalo")
}
