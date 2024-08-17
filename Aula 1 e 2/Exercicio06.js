"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
var n = Number(prompt("Digite Um numero: "));
if (n % 2 == 0) {
    var mensagem = (prompt("Seu numero é par."));
}
else {
    var mensagem2 = (prompt("Seu numero é impar."));
}
