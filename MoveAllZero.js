// const arr = [1, 2, 0, 1, 4, 0, 0, 5, 0, 3, 0, 7];
const arr = [0, 1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9];
let newArray = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== 0) {
    newArray.push(arr[i]);
  }
  // console.log(newArray);
}
while (newArray.length < arr.length) {
  newArray.push(0);
}
console.log("final array", newArray);
