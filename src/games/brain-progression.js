import getRandomNumberInRange from '../utils/numberUtils.js';

import runGame from '../index.js';

const rules = 'What number is missing in the progression?';

const createProgression = (start, step, length) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }

  return progression;
};

const runProgressionGame = () => {
  const getQuestionAndAnswer = () => {
    const start = getRandomNumberInRange(1, 6);
    const length = getRandomNumberInRange(5, 10);
    const step = getRandomNumberInRange(2, 5);

    const progression = createProgression(start, step, length);

    const hiddenElementIndex = getRandomNumberInRange(0, length - 1);
    const correctAnswer = progression[hiddenElementIndex].toString();

    progression.splice(hiddenElementIndex, 1, '..').join(' ');

    return [progression.join(' '), correctAnswer];
  };

  runGame(rules, getQuestionAndAnswer);
};

export default runProgressionGame;
