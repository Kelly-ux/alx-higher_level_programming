#!/usr/bin/node





function repeatFunction(x, theFunction) {
  // Loop for x iterations
  for (let i = 0; i < x; i++) {
    // Call theFunction within the loop
    theFunction();
  }
}

// Make the function accessible outside
module.exports = repeatFunction;

