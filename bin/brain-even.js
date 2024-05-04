import greet from '../src/cli.js';
import runBrainEvenGame from '../src/games/brain-even.js';

const name = greet();

runBrainEvenGame(name);
