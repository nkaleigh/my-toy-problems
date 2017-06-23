// Number is a palindrome if it is equal to the number with digits in reversed order. For example, 5, 44, 171, 4884 are palindromes and 43, 194, 4773 are not palindromes.

// Write a method palindrome_chain_length which takes a positive number and returns the number of special steps needed to obtain a palindrome. The special step is: "reverse the digits, and add to the original number". If the resulting number is not a palindrome, repeat the procedure with the sum until the resulting number is a palindrome.

// If the input number is already a palindrome, the number of steps is 0.

// Input will always be a positive integer.

// For example, start with 87:

// 87 + 78 = 165; 165 + 561 = 726; 726 + 627 = 1353; 1353 + 3531 = 4884

// 4884 is a palindrome and we needed 4 steps to obtain it, so palindrome_chain_length(87) == 4

var palindromeChainLength = function(n) {
  var count = 0;
  
  function inner(num) {
    var str = num + "";
    var revStr = str.split('').reverse().join('');
    if (str === revStr) {
      return count;
    } else {
      count++;
      return inner(str*1 + revStr*1);
    }
  }
  return n < 10 ? 0 : inner(n);
};

palindromeChainLength(87);




// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".


var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXWZ";
var cipher   = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXWZABCDEFGHIJKLM";


function rot13(message) {
  return message.split('').map(function(a){
    var newVal = alphabet.indexOf(a);
    if(newVal < 0){
      return a;
    } else {
      return cipher[newVal];
    }
  }).join('');

}


rot13("Hello");



// The rgb() method is incomplete. Complete the method so that passing in RGB decimal values will result in a hexadecimal representation being returned. The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values that fall out of that range should be rounded to the closest valid value.

function rgb(r, g, b){
  function toHex(rgb) {
    if(rgb < 0) {
      return '00';
    } else if(rgb > 255) {
      return 'FF';
    } else {
      var hex = rgb.toString(16).toUpperCase();
      return hex.length < 2 ? '0' + hex : hex;
    }
  }
  return toHex(r) + toHex(g) + toHex(b)
}

rgb(0,255,255)

