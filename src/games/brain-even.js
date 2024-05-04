import { getRandomNumberInRange, checkIsEven } from '../utils/numberUtils.js';

import runGame from '../index.js';

const runBrainEvenGame = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const getQuestionValue = () => getRandomNumberInRange(1, 100);
  const getCorrectAnswer = (question) => (checkIsEven(question) ? 'yes' : 'no');

  runGame(rules, getQuestionValue, getCorrectAnswer);
};

export default runBrainEvenGame;
