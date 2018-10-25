import readlineSync from 'readline-sync';

export const greetings = () => {
  console.log('Welcome to the Brain Games!');
};
export const description = (x) => {
  console.log(x);
};
export const hello = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};
export const question = (q) => {
  console.log(q);
};

export const answerCorrectAnswer = (correctAnswer) => {
  const answer = readlineSync.question('Your answer: ');
  if (answer === correctAnswer) {
    console.log('Correct');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  return false;
};

export const test = (userName, gameFunction) => {
  const numberOfSamples = 3;
  for (let i = 1; i <= numberOfSamples; i += 1) {
    if (!gameFunction(Math.floor(Math.random() * 100), Math.floor(Math.random() * 100))) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!!!`);
};
export default hello;
