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