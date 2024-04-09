#!/usr/bin/node


const size = process.argv[2];

// Check for missing argument
if (!size) {
  console.log("Missing size");
} else {
  // Attempt conversion to integer
  const squareSize = Number(size);

  // Check for valid integer conversion
  if (!isNaN(squareSize) && Number.isInteger(squareSize)) {
    // Use nested loops for rows and columns
    for (let i = 0; i < squareSize; i++) {
      let row = "";
      for (let j = 0; j < squareSize; j++) {
        row += "X";
      }
      console.log(row);
    }
  } else {
    console.log("Invalid size");
  }
}

