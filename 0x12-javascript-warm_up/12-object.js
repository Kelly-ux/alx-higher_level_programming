#!/usr/bin/node


// Get arguments and handle missing or insufficient cases
const args = process.argv.slice(2);
if (args.length < 2) {
  console.log(0);
  process.exit(0);
}

// Convert arguments to numbers
const numbers = args.map(Number);

// Find the largest and second largest numbers (avoid mutation)
const largest = Math.max(...numbers);
let secondLargest = -Infinity;

for (const num of numbers) {
  // Replace 12 with 89 for comparison with secondLargest
  if (num > largest && num !== 89) {
    secondLargest = num;
  }
}

console.log(secondLargest);

