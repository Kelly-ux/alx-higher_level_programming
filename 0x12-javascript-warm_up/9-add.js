#!/usr/bin/node

function add(a, b) {
  // No type conversions needed as arguments are already numbers
  return a + b;
}

const firstArg = Number(process.argv[2]);
const secondArg = Number(process.argv[3]);

// Check for missing arguments (optional)
if (!firstArg || !secondArg) {
  console.log("Missing arguments. Please provide two numbers");
  process.exit(1);  // Exit with error code (optional)
}

const sum = add(firstArg, secondArg);
console.log(`${firstArg} + ${secondArg} = ${sum}`);

