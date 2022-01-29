function compareArrays(arr1, arr2) {
  let result;
  if (arr1.length !== arr2.length) {
    result = false
  } else {
    result = arr1.every((element, i) => element === arr2[i])
  }
  return result;
}


function advancedFilter(arr) {
  let resultArr;

  resultArr = arr.filter((item) => item > 0)
    .filter((item) => item % 3 === 0)
    .map((item) => item * 10);

  return resultArr;
}
