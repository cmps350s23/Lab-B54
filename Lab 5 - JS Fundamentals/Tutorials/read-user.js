import promptSync from "prompt-sync";
const prompt = promptSync();

const name = prompt("Enter your name");
const gender = prompt("Enter your gender");
console.log(name, gender);
