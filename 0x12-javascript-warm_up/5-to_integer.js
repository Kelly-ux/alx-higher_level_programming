#!/usr/bin/node
const firstArg = process.argv[2];

// Check if argument exists (handle no argument case)
if (!firstArg) {
  console.log("No argument provided");
  // Exit the script to avoid unnecessary processing
  process.exit(1);
}

// Conversion using isNaN (without try/catch)
const convertedNumber = Number(firstArg);
if (isNaN(convertedNumber)) {
  console.log("Not a number");
} else {
  console.log(`My number: ${convertedNumber}`);
}

