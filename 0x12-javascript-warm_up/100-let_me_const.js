#!/usr/bin/node




let myVar = { value: 10 }; // Assuming myVar is an object

// ... (other code using myVar)

const modifyVar = require('./modifyVar'); // Import the function

modifyVar(myVar);

console.log("myVar after modification:", myVar.value);  // Should print 333

