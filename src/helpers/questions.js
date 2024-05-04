import readlineSync from 'readline-sync';

export default (question = 'May I have your name?') => readlineSync.question(`${question} `);
