import {
  hello, test, greetings, description, answerCorrectAnswer, question,
} from '..';

export default () => {
  greetings();
  description('Find the greatest common divisor of given numbers.');
  const userName = hello();
  const checkDivisor = (a, b) => {
    const correctAnswer = (x, y) => {
      if (y === 0) return x;
      if (y > x) return correctAnswer(y, x);
      return correctAnswer(y, x % y);
    };
    const finalCorrectAnswer = correctAnswer(a, b).toString();
    question(`Question: ${a} ${b}`);
    return answerCorrectAnswer(finalCorrectAnswer);
  };
  test(userName, checkDivisor);
};
