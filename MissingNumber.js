const arr = [1, 2, 4, 6, 3, 7, 8];
N = arr.length;

function getMissingNo(a, n) {
  let i,
    total = 1;
  // n = 7 + 1 = 8
  for (i = 2; i < n + 1; i++) {
   
    total += i;
    total -= a[i - 2];
  }
  return total;
}
var result = getMissingNo(arr, N);
console.log(result);
