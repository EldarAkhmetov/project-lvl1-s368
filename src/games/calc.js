import { hello, test } from '..';
import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('What is the result of the expression?');
  const userName = hello();
  const checkExpression = (a, b) => {
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
  test(userName, checkExpression);
};
