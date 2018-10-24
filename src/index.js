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
export const checkExpression = (a, b) => {
  const num = Math.floor(Math.random() * 3);
  const X = () => {
    if (num === 0) return '+';
    if (num === 1) return '-';
    return '*';
  };
  const correctAnswer = () => {
    if (num === 0) return a + b;
    if (num === 1) return a - b;
    return a * b;
  };
  const finalCorrectAnswer = correctAnswer();
  console.log(`Question: ${a} ${X()} ${b}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === finalCorrectAnswer.toString()) {
    console.log('Correct');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${finalCorrectAnswer.toString()}'`);
  return false;
};

export const test = (userName, gameFunction) => {
  for (let i = 0; i <= 2; i += 1) {
    if (gameFunction(Math.floor(Math.random() * (100 - 0)), Math.floor(Math.random() * (100 - 0)))
    === false) {
      console.log(`Let's try again, ${userName}!`);
      return false;
    }
  }
  console.log(`Congratulations, ${userName}!!!`);
  return true;
};
export default hello;
