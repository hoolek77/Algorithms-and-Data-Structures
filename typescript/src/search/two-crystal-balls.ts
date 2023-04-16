// I am in a 100-story building. I have with me two glass balls.
// I know that if I throw the ball out of the window,
// it will not break if the floor number is less than X,
// and it will always breaks if the floor number is equal to or greater than X.
// Assuming that I can reuse the balls which don't break,
// find X in the minimum number of throws.

// O(√N)
export default function twoCrystalBalls(breaks: boolean[]): number {
  const jumpAmount = Math.floor(Math.sqrt(breaks.length));

  let i = jumpAmount;
  for (; i < breaks.length; i += jumpAmount) {
    if (breaks[i]) {
      break;
    }
  }

  i -= jumpAmount;

  for (let j = 0; j < jumpAmount && i < breaks.length; j++, i++) {
    if (breaks[i]) {
      return i;
    }
  }

  return -1;
}
