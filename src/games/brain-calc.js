import getRandomNumberInRange from '../utils/numberUtils.js';

import runGame from '../index.js';

const OPERATIONS = ['+', '-', '*'];

const generateExpression = () => {
  const operation = OPERATIONS[getRandomNumberInRange(0, OPERATIONS.length - 1)];
  const firstNumber = getRandomNumberInRange(1, 100);
  const secondNumber = getRandomNumberInRange(1, 100);

  const expression = `${firstNumber} ${operation} ${secondNumber}`;

  return [firstNumber, secondNumber, operation, expression];
};

const evaluateExpression = (firstNumber, secondNumber, operation) => {
  switch (operation) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      throw new Error('Unknown operation');
  }
};

const runCalculatorGame = () => {
  const rules = 'What is the result of the expression?';

  const getQuestionAndAnswer = () => {
    const [firstNumber, secondNumber, operation, expression] = generateExpression();
    return [expression, evaluateExpression(firstNumber, secondNumber, operation).toString()];
  };

  runGame(rules, getQuestionAndAnswer);
};

export default runCalculatorGame;
