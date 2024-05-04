import readlineSync from 'readline-sync';
import { getRandomNumberInRange, checkIsEven } from '../utils/numberUtils.js';
import {
  printWrongAnswer, printQuestion, printResponse, printCongratulations,
} from '../helpers/print.js';
import { TOTAL_ROUNDS } from '../constants.js';

const getCorrectAnswer = (question) => (checkIsEven(question) ? 'yes' : 'no');

const runBrainEvenGame = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 1; i <= TOTAL_ROUNDS; i += 1) {
    const numberForQuestion = getRandomNumberInRange(1, 100);
    const correctAnswer = getCorrectAnswer(numberForQuestion);

    printQuestion(numberForQuestion);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      printResponse(true);
      if (i === TOTAL_ROUNDS) {
        printCongratulations(name);
        return;
      }
    } else {
      printResponse(false);
      printWrongAnswer(userAnswer, correctAnswer, name);
      return;
    }
  }
};

export default runBrainEvenGame;
