// index.js

// Import the chalk package
const chalk = require('chalk');

// Get the command-line arguments (ignore the first two default args)
const args = process.argv.slice(2);

// Extract name and age from arguments
const name = args[0];
const age = args[1];

// Print out the name and age with color
console.log(chalk.blue('Name:'), chalk.green(name));
console.log(chalk.blue('Age:'), chalk.green(age));
