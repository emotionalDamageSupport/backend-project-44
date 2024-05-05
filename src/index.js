import readlineSync from 'readline-sync';

const TOTAL_ROUNDS = 3;

const runGame = (rules, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);

  console.log(rules);

  for (let i = 0; i < TOTAL_ROUNDS; i += 1) {
    const [questionValue, correctAnswer] = getQuestionAndAnswer();

    console.log(`Question: ${questionValue}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log('Incorrect!');
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }

    console.log('Correct!');
    if (i === TOTAL_ROUNDS - 1) {
      console.log(`Congratulations, ${playerName}!`);
    }
  }
};

export default runGame;
