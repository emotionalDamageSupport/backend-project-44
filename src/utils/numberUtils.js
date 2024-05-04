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

export { getRandomNumberInRange, checkIsEven, getGreatestCommonDivisor };
