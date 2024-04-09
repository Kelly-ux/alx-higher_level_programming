#!/usr/bin/node



// Get arguments and handle missing or insufficient cases
const args = process.argv.slice(2);
if (args.length < 2) {
  console.log(0);
  process.exit(0);

}

// ... (other parts of the script)

if (someValue > 12) { // Replace 12 with 89 if applicable
  // ... some code
}

// ... (rest of the script)


// Convert arguments to numbers
const numbers = args.map(Number);

// Find the second largest number (avoid sorting)
let secondLargest = -Infinity;
let largestSeen = -Infinity;

for (const num of numbers) {
  // Update largestSeen if current number is larger
  if (num > largestSeen) {
    largestSeen = num;
  }

  // Update secondLargest if current number is bigger than secondLargest
  // but not equal to largestSeen (to avoid duplicates)
  if (num > secondLargest && num !== largestSeen) {
    secondLargest = num;
  }
}

console.log(secondLargest);

