let array = [1, 2, 3, 4];

function insertShiftArray(arr, index) {
  let array1 = [];
  let Index2 = Math.round(arr.length / 2);
  arr.forEach((val, idx) => {
    if (idx !== Index2) {
        array1.push(val);
    } else {
        array1.push(index);
        array1.push(val);
    }
  });
  return array1;
}

console.log(insertShiftArray(array, 8));
