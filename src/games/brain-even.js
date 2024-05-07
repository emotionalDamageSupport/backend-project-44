import getRandomNumberInRange from '../utils/numberUtils.js';

import runGame from '../index.js';

const checkIsEven = (number) => number % 2 === 0;

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const runBrainEvenGame = () => {
  const getCorrectAnswer = (question) => (checkIsEven(question) ? 'yes' : 'no');

  const getQuestionAndAnswer = () => {
    const questionValue = getRandomNumberInRange(1, 100);
    const correctAnswer = getCorrectAnswer(questionValue);
    return [questionValue, correctAnswer];
  };

  runGame(rules, getQuestionAndAnswer);
};

export default runBrainEvenGame;
