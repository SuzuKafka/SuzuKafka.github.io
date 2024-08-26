const chalk = require('chalk');
const args = process.argv.slice(2);

const name = args[0];
const age = Number(args[1]);

if (typeof name === 'string' && name.trim().length > 0 && /^[a-zA-Z\s]+$/.test(name)) {
    console.log(`Name: ${chalk.green(name)}`);
} else {
    console.log('ERROR : Please input a valid name.');
}

if (Number.isInteger(age) && age >= 0 && age <= 120) {
    console.log(`Age: ${chalk.red(age)}`);
} else {
    console.log('ERROR : Please input a valid age.');
}
