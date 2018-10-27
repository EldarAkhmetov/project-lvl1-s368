import engine from '..';
import { getRandomNumber } from '../utils';

const description = 'What number is missing in this progression?';

const length = 10;

const findProgressionOutput = (firstElement, step, positionOfNumber) => {
  let progressionOutput = '';
  let iElement;
  for (let i = 0; i <= length - 1; i += 1) {
    iElement = firstElement + (i * step);
    if (i === positionOfNumber) {
      progressionOutput += '.. ';
    } else {
      progressionOutput += `${iElement.toString()} `;
    }
  }
  return progressionOutput;
};

const findMissingNumber = () => {
  const firstElement = getRandomNumber(0, 100);
  const step = getRandomNumber(0, 100);
  const positionOfNumber = getRandomNumber(0, length);
  const correctAnswer = (firstElement + (step * positionOfNumber)).toString();
  const question = (findProgressionOutput(firstElement, step, positionOfNumber));
  return { question, correctAnswer };
};
export default () => {
  engine(findMissingNumber, description);
};
