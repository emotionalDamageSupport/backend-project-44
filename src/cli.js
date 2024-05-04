import { askAQuestion } from './helpers/questions.js';

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = askAQuestion();
  console.log(`Hello, ${name}!`);
  return name;
};
