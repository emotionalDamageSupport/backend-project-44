const printWrongAnswer = (answer, correctValue, userName) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctValue}'.`);
  console.log(`Let's try again, ${userName}!`);
};

const printQuestion = (value) => {
  console.log(`Question: ${value}`);
};

const printResponse = (isCorrect) => {
  console.log(isCorrect ? 'Correct!' : 'Incorrect!');
};

const printCongratulations = (userName) => {
  console.log(`Congratulations, ${userName}!`);
};

export {
  printWrongAnswer, printQuestion, printResponse, printCongratulations,
};
