import readlineSync from 'readline-sync';

export const hello = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const checkEven = (num) => {
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Answer: ');
  const correctAnswer = (num % 2 === 0) === true ? 'yes' : 'no';
  if (answer === correctAnswer) {
    console.log('Correct');
    return true;
  }
  console.log(`'${answer}' is wrong answer $(. Correct answer was '${correctAnswer}'`);
  return false;
};

export const test = (userName) => {
  if (checkEven(15) === false) {
    console.log(`Let's try again, ${userName}!`);
    return false;
  }
  if (checkEven(6) === false) {
    console.log(`Let's try again, ${userName}!`);
    return false;
  }
  if (checkEven(7) === false) {
    console.log(`Let's try again, ${userName}!`);
    return false;
  }
  console.log(`Congratulations, ${userName}!!!`);
  return true;
};

export default hello;
