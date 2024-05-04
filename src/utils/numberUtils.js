const getRandomNumberInRange = (min, max) => Math.floor(Math.random() * (max - min)) + min + 1;

const checkIsEven = (number) => number % 2 === 0;

const getGreatestCommonDivisor = (a, b) => {
  const smallerNumber = Math.min(a, b);
  let gcd = 1;

  for (let i = 1; i <= smallerNumber; i += 1) {
    if (a % i === 0 && b % i === 0) {
      gcd = i;
    }
  }

  return gcd;
};

const createProgression = (start, step, length) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }

  return progression;
};

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

export {
  getRandomNumberInRange, checkIsEven, getGreatestCommonDivisor, createProgression, isPrime,
};
