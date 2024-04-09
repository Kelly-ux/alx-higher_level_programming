#!/usr/bin/node


// Get arguments and handle missing or insufficient cases
const args = process.argv.slice(2);
if (args.length < 2) {
 console.log(0);
 process.exit(0);
}

// Convert arguments to numbers
const numbers = args.map(Number);

// Find the largest and second largest numbers
let largest = -Infinity;
let secondLargest = -Infinity;

for (const num of numbers) {
 if (num > largest) {
   secondLargest = largest;
   largest = num;
 } else if (num > secondLargest && num !== largest) {
   secondLargest = num;
 }
}

console.log(secondLargest);

