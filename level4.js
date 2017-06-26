// Write a function called validBraces that takes a string of braces, and determines if the order of the braces is valid. validBraces should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces four new characters. Open and closed brackets, and open and closed curly braces. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of open parentheses '(' , closed parentheses ')', open brackets '[', closed brackets ']', open curly braces '{' and closed curly braces '}'.

// What is considered Valid? A string of braces is considered valid if all braces are matched with the correct brace. 
// For example:
// '(){}[]' and '([{}])' would be considered valid, while '(}', '[(])', and '[({})](]' would be considered invalid.


function validBraces(braces){
  var check = [];
  for(var i = 0; i < braces.length; i++) {
    if(braces[i] === '[' || braces[i] === '{' || braces[i] === '(' ) {
      check.push(braces[i]);
    } else {
      if(braces[i] === ']' && check[check.length - 1] === '[' || braces[i] === '}' && check[check.length - 1] === '{' || braces[i] === ')' && check[check.length - 1] === '(') {
        check.pop();
      } else {
        return false;
      }
    }
  }
return check.length === 0 ? true : false;
}


validBraces('()');