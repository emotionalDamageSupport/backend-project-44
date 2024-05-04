const getRandomNumberInRange = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const checkIsEven = (number) => number % 2 === 0;

export { getRandomNumberInRange, checkIsEven };
