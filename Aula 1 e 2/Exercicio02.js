"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var n1 = Number(prompt("Digite Um numero acima de 10: "));
numeros.push(n1);
console.log(numeros);
