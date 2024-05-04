import { TOTAL_ROUNDS } from './constants.js';
import {
  printQuestion, printCongratulations, printResponse, printWrongAnswer, sayHello,
} from './helpers/print.js';
import askAQuestion from './helpers/questions.js';

const runGame = (rules, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const playerName = askAQuestion();
  sayHello(playerName);

  console.log(rules);

  for (let i = 1; i <= TOTAL_ROUNDS; i += 1) {
    const [questionValue, correctAnswer] = getQuestionAndAnswer();

    printQuestion(questionValue);
    const userAnswer = askAQuestion('Your answer: ');

    if (userAnswer === correctAnswer) {
      printResponse(true);
      if (i === TOTAL_ROUNDS) {
        printCongratulations(playerName);
      }
    } else {
      printResponse(false);
      printWrongAnswer(userAnswer, correctAnswer, playerName);
      return;
    }
  }
};

export default runGame;
