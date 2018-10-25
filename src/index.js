import readlineSync from 'readline-sync';

export const hello = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const test = (userName, gameFunction) => {
  const numberOfSamples = 3;
  for (let i = 1; i <= numberOfSamples; i += 1) {
    if (gameFunction(Math.floor(Math.random() * (100 - 0)), Math.floor(Math.random() * (100 - 0)))
    === false) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!!!`);
};
export default hello;
