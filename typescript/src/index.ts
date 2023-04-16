import binarySearch from './search/binary-search';
import twoCrystalBalls from './search/two-crystal-balls';

const TEST_ARRAY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(binarySearch(TEST_ARRAY, 4));
console.log(binarySearch(TEST_ARRAY, 8));
console.log(binarySearch(TEST_ARRAY, 11));

const TWO_CRYSTAL_BALLS = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  true,
  true,
  true,
];

console.log(twoCrystalBalls(TWO_CRYSTAL_BALLS));
