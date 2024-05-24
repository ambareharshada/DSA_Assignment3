const arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
// arr.length = 10
function frequencyNo(arr){
    const obj = {};

    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
    //   console.log("num", num);
    //   console.log("obj[num] before", obj[num]);
      if (obj[num]) {
        obj[num]++;
        // console.log("if block");
      } else {
        // console.log("else block");
        obj[num] = 1;
      }
    //   console.log("obj[num] after", obj[num]);

    }
    return obj;
}

var result  = frequencyNo(arr)
console.log(result);