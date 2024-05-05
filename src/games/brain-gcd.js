import getRandomNumberInRange from '../utils/numberUtils.js';

import runGame from '../index.js';

const getGreatestCommonDivisor = (a, b) => {
  const smallerNumber = Math.min(a, b);
  let gcd = 1;

  for (let i = 1; i <= smallerNumber; i += 1) {
    if (a % i === 0 && b % i === 0) {
      gcd = i;
    }
  }

  return gcd;
};

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
