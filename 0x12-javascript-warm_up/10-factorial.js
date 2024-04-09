#!/usr/bin/node


function factorial(num) {
  // Base case: Factorial of 0 and NaN is 1
  if (isNaN(num) || num === 0) {
    return 1;
  } else {
    // Recursive call with (num - 1)
    return num * factorial(num - 1);
  }
}

const firstArg = Number(process.argv[2]);

// Check for missing argument
if (!firstArg) {
  console.log("Missing number");
} else {
  const result = factorial(firstArg);
  console.log(`The factorial of ${firstArg} is ${result}`);
}

