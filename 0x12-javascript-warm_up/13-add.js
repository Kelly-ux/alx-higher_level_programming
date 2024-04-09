#!/usr/bin/node


function add(a, b) {
  // No type conversions needed as arguments are already numbers
  return a + b;
}

// This line makes the function accessible outside
module.exports = add;

