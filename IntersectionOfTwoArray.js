const arr1 = [1, 2, 2, 1];
const arr2 = [2, 2];
// let arr1 = [1, 2, 3, 4];
// let arr2 = [3, 4, 5, 6];

function intersectionOfTwoArray(arr1, arr2) {
  let newArray = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        newArray.push(arr1[i]);
        break;
      }
    }
  }

  return newArray;
}

let result = intersectionOfTwoArray(arr1, arr2);
var finalArray = [...new Set(result)];
console.log(finalArray);
