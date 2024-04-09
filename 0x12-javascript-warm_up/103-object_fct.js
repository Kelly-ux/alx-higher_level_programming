#!/usr/bin/node






function incr(value) {
  """
  Increments an integer value.

  Args:
      value: The integer value to increment.

  Returns:
      The incremented integer value.
  """
  return value + 1;
}

// You can use the incr function here in your existing script
const someValue = 5;
const incrementedValue = incr(someValue);
console.log("Original value:", someValue);
console.log("Incremented value:", incrementedValue);  // This will print 6

