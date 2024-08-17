"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
var x = Number(prompt("digite o primeiro numero: "));
var y = Number(prompt("digite o segundo numero: "));
var conf = Number(prompt("digite o numero a ser pesquisado: "));
if (conf > 10 && conf < y) {
    console.log("Esta no intervalo");
}
else {
    console.log("Não esta no intervalo");
}
