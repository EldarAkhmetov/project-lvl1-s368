import engine from '..';

const description = 'What number is missing in this progression?';

const findProgression = (a, b) => {
  const progressionLength = 10;
  const numberOfProgression = Math.floor(Math.random() * (progressionLength));
  let progressionText = '';
  let progression = a;
  for (let i = 0; i <= progressionLength - 1; i += 1) {
    if (i === numberOfProgression) {
      progressionText += '.. ';
    }
    if (i !== numberOfProgression) {
      progressionText += `${progression.toString()} `;
    }
    progression += b;
  }
  const correctAnswer = a + b * (numberOfProgression);
  console.log(progressionText);
  return correctAnswer.toString();
};
export default () => {
  engine(findProgression, description);
};
