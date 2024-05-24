const arr = [12, 35, 1, 10, 34, 1]; //[5, 6, 2, 8];

// 2nd solution
function largestElement(arr) {
  const sortedArray = arr.sort();
  //   console.log("sortedArray", sortedArray);

  for (let i = sortedArray.length - 2; i >= 0; i--) {
    if (sortedArray[i] !== sortedArray[sortedArray.length - 1]) {
      return sortedArray[i];
    }
  }
}

var result = largestElement(arr);
console.log(result);

/* 1st Solution =>
const sortedArray = arr.sort();
console.log("sortedArray", sortedArray);
let k = sortedArray.length;
console.log(k);
console.log(sortedArray[k - 2]); */
