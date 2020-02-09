const { add, subtract } = require("./calc.js");

const a = process.argv[2];
const b = process.argv[3];
const operator = process.argv[4];

// main.js
// switch (operator) {
//   case "+": {
//     console.log(add(a, b));
//     break;
//   }
//   case "-": {
//     console.log(subtract(a, b));
//     break;
//   }
// }

// or

if (operator == "+") {
  console.log(add(a, b));
} else if (operator == "-") {
  console.log(subtract(a, b));
}
