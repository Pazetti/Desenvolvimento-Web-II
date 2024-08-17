"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
var prompt = (0, prompt_sync_1.default)();
const a = prompt("Insira um valor para A:");
console.log(a);
const b = "Segunda linha";
const c = "Terceira";
