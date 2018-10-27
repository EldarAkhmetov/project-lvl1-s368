import engine from '..';
import { getRandomNumber } from '../utils';

const description = 'What number is missing in this progression?';

const length = 10;

const findProgressionOutput = (firstElement, step, hiddenElementPosition) => {
  let progressionOutput = '';
  let findAnyElementValue;
  for (let i = 0; i <= length - 1; i += 1) {
    findAnyElementValue = firstElement + (i * step);
    if (i === hiddenElementPosition) {
      progressionOutput += '.. ';
    } else {
      progressionOutput += `${findAnyElementValue.toString()} `;
    }
  }
  return progressionOutput;
};

const findHiddenElement = () => {
  const firstElement = getRandomNumber(0, 100);
  const step = getRandomNumber(0, 100);
  const hiddenElementPosition = getRandomNumber(0, length);
  const correctAnswer = (firstElement + (step * hiddenElementPosition)).toString();
  const question = (findProgressionOutput(firstElement, step, hiddenElementPosition));
  return { question, correctAnswer };
};
export default () => {
  engine(findHiddenElement, description);
};
