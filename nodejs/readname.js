const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askName() {
  rl.question('What is your name? ', (name) => {

    if (typeof name === 'string' && name.trim().length > 0 && /^[a-zA-Z\s]+$/.test(name)) {
      askAge(name);
    } else {
      console.log('ERROR : Please input a valid name.');
      askName();
    }

  });
}

function askAge(name) {
  rl.question('What is your age? ', (age) => {

    age = parseInt(age, 10);

    if (Number.isInteger(age) && age >= 0 && age <= 120) {

      console.log(`Name: ${name}`);
      console.log(`Age: ${age}`);

      rl.close();
    } else {
      console.log('ERROR : Please input a valid age.');
      askAge(name);
    }

  });
}

askName();
