"use strict";

function BinarioADecimal(num1) {
  if (num1 && typeof num1 === "string") {
    return parseInt(num1, 2);
  } else {
    console.log("se esperaba un numero binario");
  }
}

let resultadoBinarioDecimal = BinarioADecimal("1100");
console.log(resultadoBinarioDecimal);

function DecimalABinario(num2) {
  if (num2 && typeof num2 === "number") {
    return num2.toString(2);
  } else {
    console.log("se esperaba un numero decimal");
  }
}

let resultadoDecimalBinario = DecimalABinario(566);
console.log(resultadoDecimalBinario);

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
