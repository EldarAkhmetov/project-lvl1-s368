import readlineSync from 'readline-sync';

export default (game, description) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  const gameFunction = (a, b) => {
    const correctAnswer = (x, y) => game(x, y);
    const finalCorrectAnswer = correctAnswer(a, b);
    const answer = readlineSync.question('Your answer: ');
    if (answer === finalCorrectAnswer) {
      console.log('Correct');
      return true;
    }
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${finalCorrectAnswer}'`);
    return false;
  };
  const numberOfSamples = 3;
  for (let i = 1; i <= numberOfSamples; i += 1) {
    if (!gameFunction(Math.floor(Math.random() * 100), Math.floor(Math.random() * 100))) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!!!`);
};
