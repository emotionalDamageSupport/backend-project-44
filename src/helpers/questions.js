import readlineSync from 'readline-sync';

// eslint-disable-next-line import/prefer-default-export
export const askAQuestion = (question = 'May I have your name?') => readlineSync.question(`${question} `);
