#!/usr/bin/node

const arg1 = process.argv[2];
const arg2 = process.argv[3];

// Check if at least two arguments are provided
if (!arg1 || !arg2) {
  console.log("Error: Please provide two arguments");
  process.exit(1);  // Exit with error code (optional)
}

console.log(`${arg1} is ${arg2}`);

