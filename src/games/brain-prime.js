import { getRandomNumberInRange, isPrime } from '../utils/numberUtils.js';

import runGame from '../index.js';

const runPrimeGame = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const getQuestionAndAnswer = () => {
    const number = getRandomNumberInRange(1, 500);
    const correctAnswer = isPrime(number) ? 'yes' : 'no';

    return [number, correctAnswer];
  };

  runGame(rules, getQuestionAndAnswer);
};

export default runPrimeGame;
