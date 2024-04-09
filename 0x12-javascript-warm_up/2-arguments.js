function printMessage(args) {
  const numArgs = args.length;
  if (numArgs === 0) {
    console.log('No argument');
  } else if (numArgs === 1) {
    console.log('Argument found');
  } else {
    console.log('Arguments found');
  }
}

// Get the arguments passed to the script
const args = process.argv.slice(2);
