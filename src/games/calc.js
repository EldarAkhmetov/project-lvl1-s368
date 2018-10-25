import {
  hello, test, greetings, description, answerCorrectAnswer, question,
} from '..';

export default () => {
  greetings();
  description('What is the result of the expression?');
  const userName = hello();

  const checkExpression = (a, b) => {
    const num = Math.floor(Math.random() * 3);
    const X = () => {
      if (num === 0) return '+';
      if (num === 1) return '-';
      return '*';
    };
    const correctAnswer = (x, y) => {
      if (num === 0) return x + y;
      if (num === 1) return x - y;
      return x * y;
    };
    const finalCorrectAnswer = correctAnswer(a, b).toString();
    question(`Question: ${a} ${X()} ${b}`);
    return answerCorrectAnswer(finalCorrectAnswer);
  };
  test(userName, checkExpression);
};
