#!/usr/bin/node







function callFunctionWithIncrement(number, theFunction) {
  // Loop for the specified number of times
  for (let i = 0; i < number; i++) {
    // Call theFunction with the current increment value (i + 1)
    theFunction(i + 1);
  }
}

// Make the function accessible outside
module.exports = callFunctionWithIncrement;

