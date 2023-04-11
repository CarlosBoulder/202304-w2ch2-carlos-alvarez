import strictEquals from "./functions/strictEquals.js";

console.log(`El resultado de de 1, 1 es ${strictEquals(1, 1)}`);
console.log(`El resultado de NaN y NaN es ${strictEquals(NaN, NaN)}`);
console.log(`El resultado de 0 y -0 es ${strictEquals(0, -0)}`);
console.log(`El resultado de -0 y 0 es ${strictEquals(-0, 0)}`);
console.log(`El resultado de 1 y "1" es ${strictEquals(1, "1")}`);
console.log(`El resultado de true y false es ${strictEquals(true, false)}`);
console.log(`El resultado de false y false es ${strictEquals(false, false)}`);
console.log(
  `El resultado de "water" y "oil" es ${strictEquals("water", "oil")}`
);
