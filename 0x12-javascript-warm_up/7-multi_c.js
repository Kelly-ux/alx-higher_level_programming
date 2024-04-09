#!/usr/bin/node

const firstArg = process.argv[2];

// Check for missing argument
if (!firstArg) {
 console.log("Missing number of occurrences");
} else {
 // Attempt conversion to integer
 const numOccurrences = Number(firstArg);

 // Check for valid integer conversion
 if (!isNaN(numOccurrences) && Number.isInteger(numOccurrences)) {
   // Loop for the specified number of occurrences using for loop
   for (let i = 0; i < numOccurrences; i++) {
     console.log("C is fun");
   }
 } else {
   console.log("Invalid number of occurrences");
 }
}

