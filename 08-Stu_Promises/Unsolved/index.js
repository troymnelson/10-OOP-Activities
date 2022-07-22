// Prompt the user to enter what they are currently doing
const userInput = process.argv[2];
console.log('Current user activity:', userInput);

// If the user does not enter anything, return an error message
if (!userInput) {
  console.error(
    '\nPlease enter your current activity\nUsage: `node index.js <activity>`'
  );
  process.exit();
}

// If the user enters anything other than the word 'coding', set 'studentDistracted' to 'true'
const studentDistracted = userInput !== 'coding';

// TODO: Refactor the following to use promises
const practiceCoding = () => {
  return new Promise((resolve, reject) => {
    if (studentDistracted) {
      reject({
        issue: 'Distracted',
        message: 'Coding stopped',
      });
    } else {
      resolve('We are coding in promises!');
    }
  })

};

const callback = () => console.log();
const errorCallback = () => console.log();

// TODO: Refactor to call 'practiceCoding()' and chain a 'then()' to log "We are coding in promises!" in the console
// TODO: Chain a 'catch()' to log "Promise rejected: " and the error
practiceCoding(callback, errorCallback)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    if (err) {
      console.log(err);
    }
  })
