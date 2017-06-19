// Count the number of Duplicates

// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphanumeric characters, including digits, uppercase and lowercase alphabets.

function duplicateCount(text){
  var newText = text.toLowerCase().split('');
  var newObj = {};
  var newArr = [];
  count = 0;
  for (var i = 0; i < newText.length; i++) {
    if(!newObj[newText[i]]) {
      newObj[newText[i]] = newText[i];
    } else {
      newObj[newText[i]] += newText[i];
    }
  }
  for (var key in newObj) {
    newArr.push(newObj[key]);
  }
for (var j = 0; j < newArr.length; j++) {
  if(newArr[j].length > 1) {
    count++;
  }
} if( count > 0) {
  return count;
} else {
  return 0;
}
}

duplicateCount('abbccc');



// Find the minimum absolute difference (MAD) between any two elements in arr.

// Note that the same value can appear more than once in arr. In that case, the MAD will be 0.

// Also, each array has at least two elements and its contains only integers. You can consider the arr as a valid one and do not need to validate it.

function getting_mad(arr) {
  var answerTemp = [];
  var answerArr = [];
  var lowestNum = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (i !== j) {
        answerTemp[0] = arr[i] - arr[j];
        answerTemp[0] < 0 ? answerArr.push(answerTemp[0] *= -1) : answerArr.push(answerTemp[0]);
      }
    }
  }
  console.log(answerArr);
  lowestNum[0] = answerArr.shift(0);
  console.log(lowestNum);
  console.log(answerArr);
  for (var k = 0; k < answerArr.length; k++) {
    if (lowestNum[0] > answerArr[k]) {
      lowestNum[0] = answerArr[k];
    }
  }
  return lowestNum[0];
}

getting_mad([6,0,1,3,6]);