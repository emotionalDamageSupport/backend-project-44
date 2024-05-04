import { getRandomNumberInRange, getGreatestCommonDivisor } from '../utils/numberUtils.js';

import runGame from '../index.js';

const runGcdGame = () => {
  const rules = 'Find the greatest common divisor of given numbers.';

  const getQuestionAndAnswer = () => {
    const number1 = getRandomNumberInRange(1, 100);
    const number2 = getRandomNumberInRange(1, 100);
    const questionValue = `${number1} ${number2}`;

    const correctAnswer = getGreatestCommonDivisor(number1, number2).toString();
    return [questionValue, correctAnswer];
  };

  runGame(rules, getQuestionAndAnswer);
};

export default runGcdGame;
