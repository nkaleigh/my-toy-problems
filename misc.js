//Return a new array with indexes that had duplicates.
//example: if array === (1,2,3,3) then return duplicateArray = (3,3);

var arr = [1,2,3,2,3,4,5,3];

function removeDuplicates(array) {
  var duplicateArr = [];
  for(var i = 0; i < arr.length; i++) {
      if(arr.indexOf(arr[i]) !== -1 && arr.indexOf(arr[i]) !== i) {
        if(duplicateArr.indexOf(arr[i]) === -1) {
          duplicateArr.push(arr[i], arr[i]);
        } else {
        duplicateArr.push(arr[i]);
        }
      }
  }
  return duplicateArr;
}

removeDuplicates(arr);