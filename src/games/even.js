import {
  hello, test, greetings, description, answerCorrectAnswer, question,
} from '..';

export default () => {
  greetings();
  description('Answer "yes" if number even otherwise answer "no".');
  const userName = hello();
  const checkEven = (num) => {
    const isEven = number => number % 2 === 0;
    const correctAnswer = isEven(num) ? 'yes' : 'no';
    question(`Question: ${num}`);
    return answerCorrectAnswer(correctAnswer);
  };
  test(userName, checkEven);
};
