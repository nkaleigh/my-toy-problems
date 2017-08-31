// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array with [youngest age, oldest age, difference between the youngest and oldest age].

function differenceInAges(ages){
  var arr = [];
  arr[0] = Math.min.apply(null, ages);
  arr[1] = Math.max.apply(null, ages);
  arr[2] = arr[1] - arr[0];
  return arr;
}

differenceInAges([82, 15, 6, 38, 35]);



// Grasshopper - If/else syntax debug

// While making a game, your partner, Greg, decided to create a function to check if the user is still alive called checkAlive/CheckAlive. Unfortunately, Greg made some errors while creating the function.

// checkAlive/CheckAlive should return true if the player's health is greater than 0 or false if it is 0 or below.

// checkAlive receives one parameter health which will always be a whole number between -10 and 10.


// INCORRECT: function checkAlive (health) {
//   if () { 
//     health < 0
//     return false
//   } else() {
//     return true
//   }
// }

function checkAlive (health) {
  if (health <= 0) { 
    return false
  } else {
    return true
  }
}



// My head is at the wrong end!

// You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

// Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

// Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics - simples!


function fixTheMeerkat(arr) {
  var arr2 = [];
  for(var i = arr.length-1; i >= 0; i--) {
    arr2.push(arr[i]);
  }
  return arr2;
}



//   SpeedCode #2 - Array Madness

//   Objective

//   Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

function arrayMadness(a, b) {
  var square = 0;
  var aArray = [];
  var bArray = [];
  var aCount = 0;
  var bCount = 0;
  for (var i = 0; i < a.length; i++) {
    square = a[i]*a[i];
    aArray.push(square);
  };
  for (var j = 0; j < b.length; j++) {
    square = b[j]*b[j]*b[j];
    bArray.push(square);
  }
  for (var k = 0; k < aArray.length; k++) {
    aCount = aCount + aArray[k];
  }
  for (var l = 0; l < bArray.length; l++) {
    bCount = bCount + bArray[l];
  }
  if(aCount > bCount) {
    return true;
  } else {
    return false;
  }
}

arrayMadness([1,2,3], [2,3,4]);



//SUM of MULTIPLES
// ###Your Job:

// Find the sum of the multiples of n i.e. less than m

// ###Keep in Mind:

// n and m are natural number
// note that the second argument m is excluded from the multiples
// ###Remember these:

// sumMul(2,9)    should return 20
// sumMul(3,13)   should return 30
// sumMul(4,123)  should return 1860
// sumMul(4,-7)   should return INVALID

function sumMul(n,m){
  var sum = 0;
  if (m <= n) {
    return "INVALID";
  } else {
    for (var i = n; i <= m; i++) {
      if (i % n === 0) {
        sum += i;
      }
    }
    return sum;
  }
}

sumMul(0,0);

