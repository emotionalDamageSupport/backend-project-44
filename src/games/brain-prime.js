import getRandomNumberInRange from '../utils/numberUtils.js';

import runGame from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const runPrimeGame = () => {
  const getQuestionAndAnswer = () => {
    const number = getRandomNumberInRange(1, 500);
    const correctAnswer = isPrime(number) ? 'yes' : 'no';

    return [number, correctAnswer];
  };

  runGame(rules, getQuestionAndAnswer);
};

export default runPrimeGame;
