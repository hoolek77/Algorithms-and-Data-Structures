// O(N)
export default function linearSearch(array: number[], value: number): boolean {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }

  return false;
}
