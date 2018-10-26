import engine from '..';

const description = 'What number is missing in this progression?';

const progressionLength = 10;

const findMissingNumber = () => {
  const a = Math.floor(Math.random() * 100);
  const b = Math.floor(Math.random() * 100);
  const numberToFind = Math.floor(Math.random() * (progressionLength));
  let progressionOutput = '';
  let progression = a;
  for (let i = 0; i <= progressionLength - 1; i += 1) {
    if (i === numberToFind) {
      progressionOutput += '.. ';
    }
    if (i !== numberToFind) {
      progressionOutput += `${progression.toString()} `;
    }
    progression += b;
  }
  const correctAnswer = (a + b * (numberToFind)).toString();
  const question = (progressionOutput);
  return { question, correctAnswer };
};
export default () => {
  engine(findMissingNumber, description);
};
