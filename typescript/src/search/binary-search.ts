// O(log N)
export default function binarySearch(
  sortedArray: number[],
  value: number
): boolean {
  let low = 0;
  let high = sortedArray.length;

  while (low < high) {
    const midIndex = Math.floor(low + (high - low) / 2);
    const midPointValue = sortedArray[midIndex];

    if (midPointValue === value) {
      return true;
    }

    if (midPointValue > value) {
      high = midIndex;
      continue;
    }

    low = midIndex + 1;
  }

  return false;
}
