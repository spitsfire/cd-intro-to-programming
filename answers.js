// *** PAGE 16 *** 
// *************** 

// 1.) Setting and Swapping
    // Set myNumber to 42. Set myName to your name.
    // Now swap myNumber into myName & vice versa.

var myNumber = 42;
var myName = "Claire";

myNumber = myName;
console.log(myNumber);

var myNumber = 42;
var myName = "Claire";

myName = myNumber;
console.log(myName);

// 2.) Print -52 to 1066
    // Print integers from -52 to 1066 using a FOR loop.

for( i = -52; i <= 1066; i++ ){
    doment.write(i+", ");
}

// 3.) Don’t Worry, Be Happy
    // Create beCheerful(). Within it, console.log
    // string "good morning!" Call it 98 times.

function beCheerful(num){
    for(i = 0; i <= num; i++){
        console.log("good morning!");
    }
    
}
  
beCheerful(98);

// 4.) Multiples of Three – but Not All
    // Using FOR, print multiples of 3 from -300 to 0.
    // Skip -3 and -6.

for(i = -300; i<= 0; i++){
    if(i % 3 == 0 && i != -3 && i != -6){
        document.write(i+", ");
    }
}

// 5.) Printing Integers with While
    // Print integers from 2000 to 5280, using a WHILE.

var i = 2000;
while(i <= 5280){
    document.write(i+", ");
    i++;
}

// 6.) You Say It’s Your Birthday
    // If 2 given numbers represent your birth month
    // and day in either order, log "How did you
    // know?", else log "Just another day...."

var num1 = "3";
var num2 = "7";

if(num1 + num2 == "37" || num2 + num1 == "73"){
    console.log("How did you know?");
} else {
    console.log("Just another day...");
}

// 7.) Leap Year
    // Write a function that determines whether a given
    // year is a leap year. If a year is divisible by four,
    // it is a leap year, unless it is divisible by 100.
    // However, if it is divisible by 400, then it is.

function leapYear(yr){
    if(yr % 4 == 0 && yr % 100 != 0 || yr % 400 == 0){
        console.log(+yr+" is a leap year.");
    } else {
        console.log(+yr+" is not a leap year.");
    }
} 
leapYear(100);

// 8.) Print and Count
    // Print all integer multiples of 5, from 512 to 4096.
    // Afterward, also log how many there were.

var sum = 0;

for(i = 512; i <= 4096; i++){
    if(i % 5 == 0){
        document.write(i+", ");
        sum++
    }
}
console.log(sum);

// 9.) Multiples of Six
    // Print multiples of 6 up to 60,000, using a WHILE.

var i = 0;

while(i <= 60000){
  if(i % 6 == 0){
    document.write(i+", ");
  }
  i++;
}

// 10.) Counting, the Dojo Way
    // Print integers 1 to 100. If divisible by 5, print
    // "Coding" instead. If by 10, also print " Dojo".

for(i = 1; i <= 100; i++){
    if(i % 5 == 0 && i % 10 != 0){
        document.write("Coding ");
    } else if(i % 10 == 0){
        document.write("Dojo ");
    } else {
        document.write(i+" ");
    }
}

// 11.) What Do You Know?
    // Your function will be given an input parameter
    // incoming. Please console.log this value.

function whatDoYouKnow(val){
    console.log(val);
}
whatDoYouKnow("Lots of stuff.");

// 12.) Whoa, That Sucker’s Huge…
    // Add odd integers from -300,000 to 300,000, and
    // console.log the final sum. Is there a shortcut?

var sum = 0
for(i = -300000; i <= 3000000; i++){
    if(i % 2 != 0){
        sum += i;
    }
}
console.log(sum);

// 13.) Countdown by Fours
    // Log positive numbers starting at 2016, counting
    // down by fours (exclude 0), without a FOR loop.

var count = 2016;
while(count > 0){
    console.log(count);
    count -= 4;
}

// 14.) Flexible Countdown
    // Based on earlier “Countdown by Fours”, given
    // lowNum, highNum, mult, print multiples of mult
    // from highNum down to lowNum, using a FOR.
    // For (2,9,3), print 9 6 3 (on successive lines).

var lowNum = 2;
var highNum = 9;
var mult = 3;

for(i = lowNum; i <= highNum; i++){
    if(i % mult == 0){
        document.write(i+"<br/>");
    }
}

// 15.) The Final Countdown
    // This is based on “Flexible Countdown”. The parameter names are not as helpful, but the problem is
    // essentially identical; don’t be thrown off! Given 4 parameters (param1,param2,param3,param4),
    // print the multiples of param1, starting at param2 and extending to param3. One exception: if a
    // multiple is equal to param4, then skip (don’t print) it. Do this using a WHILE. Given (3,5,17,9), print
    // 6,12,15 (which are all of the multiples of 3 between 5 and 17, and excluding the value 9).

var param1 = 3;
var param2 = 5;
var param3 = 17;
var param4 = 9;

while(param2 <= param3){
    if(param2 % param1 == 0 && param2 != param4){
        document.write(param2+"<br/>");
    }
    param2++;
}

// *** PAGE 20 ***
// ***************

// 1.) Countdown
    // Create a function that accepts a number as an input. 
    // Return a new array that counts down by one, from
    // the number (as array’s ‘zeroth’ element) down to 0 
    // (as the last element). How long is this array?

function countDown(num){
    arr = []
    idx = 0;
    for(i = num; i >= 0; i--){
        arr[idx] = i;
        idx++
    }
    console.log(arr,arr.length);
}

countDown(5);

// 2.) Print and Return
    // Your function will receive an array with two numbers. 
    // Print the first value, and return the second.

function printReturn(arr){
    document.write(arr[0]);
    return arr[1];
}

printReturn([2,3]);

// 3.) First Plus Length
    // Given an array, return the sum of the first value in the array, 
    // plus the array’s length. 
    // What happens if the array’s first value is not a number, 
    // but a string (like "what?") or a boolean (like false).

var arr = [3, 5, 10, 7, 12, 1];

function firstPlusLength(arr){
    var sum = arr[0] + arr.length;
    return sum;
}

firstPlusLength(arr);

// 4.) Values Greater than Second
    // For [1,3,5,7,9,13], print values that are greater than its 2nd value. 
    // Return how many values this is.

function valuesGreater(arr){
    for(idx = 1; idx < arr.length; idx++){
        if(arr[idx] > arr[1]){
            document.write(arr[idx]+" ");
        }
    }
    return arr.length;
}
valuesGreater([1,3,5,7,9,13]);

// 5.) Values Greater than Second, Generalized
    // Write a function that accepts anyarray, 
    // and returns a new array with the array values that are greater than its 2nd value. 
    // Print how many values this is. What will you do if the array is only one element long?

var arr = [1,3,4,7,-3,0];
function valuesGreaterGen(arr){
    var newArr = [];
    for(idx = 1; idx < arr.length; idx++){
        if((arr.length > 1) && (arr[idx] > arr[1])){
            newArr.push(arr[idx]);
        }
    }
    document.write(newArr.length);
    console.log(newArr);
}
valuesGreaterGen(arr);

// 6.) This Length, That Value
    // Given two numbers, return array of length 
    // num1 with each value num2. Print "Jinx!" if they are same.

    // don't understand the directions for this one. Moving on.

    

// 7.) Fit the First Value
    // Your function should accept an array. 
    // If value at [0] is greater than array’s length,print"Too big!"; 
    // if value at [0] is less than array’s length, print "Too small!"; otherwise print "Just right!". 

function fitFirstVal(arr){
    if(arr[0] > arr.length){
        document.write("Too big!");
    } 
  else if(arr[0] < arr.length){
        document.write("Too small!");
    } 
  else {
        document.write("Just right!");
    }
}

fitFirstVal([5,2,3,4]);

// 8.) Fahrenheit to Celsius
    // Kelvin wants to convert between temperature scales. 
    // Create fahrenheitToCelsius(fDegrees)that accepts a number of degrees in Fahrenheit, 
    // and returns the equivalent temperature as expressed in Celsius degrees. 
    // For review, Fahrenheit = (9/5 * Celsius)+ 32.

function fahrenheitToCelsius(fDegrees){
    var cDegrees = (fDegrees - 32) * .5556;
    return cDegrees;
}

fahrenheitToCelsius(98.6);

// optional

function fahrenheitToCelsius(fDegrees){
    for(i = fDegrees; i >= 0; i--){
      var cDegrees = (i - 32) * .5556;
      console.log(i,cDegrees);
    }
}

fahrenheitToCelsius(200);

// *** PAGE 22 ***
// ***************

// 1.) Biggie Size
    // Given an array, write a function that changes all positive numbers in the array to “big”. 
    // Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1,"big","big",-5].

function biggieSize(arr){
    for(idx = 0; idx < arr.length; idx++){
        if(arr[idx] > 0){
            arr[idx] = "big";
        }
    } 
    console.log(arr);
}

biggieSize([0,2,-1,-5,23,-4]);

// 2.) Print Low, Return High
    // Create a function that takes array of numbers. 
    // The function should print the lowest value in the array, 
    // and return the highest value in the array

function printLowReturnHigh(arr) {
    var lowNum = 0;
    var highNum = 0;
    for (idx = 0; idx < arr.length; idx++) {
        if (arr[idx] > highNum) {
            highNum = arr[idx];
        }
        else if (arr[idx] < lowNum) {
            lowNum = arr[idx];
        }
    }
    document.write(lowNum);
    return highNum;
}

printLowReturnHigh([1, 3, 5 - 10, 34, 6]);

// 3.) Print One, Return Another
    // Build a function that takes array of numbers. 
    // The function should print second-to-last value in thearray, 
    // and return first odd value in the array

function printOneReturnAnother(arr){
    document.write(arr[arr.length-2]);
    for(idx = 0; idx < arr.length; idx++){
        if(arr[idx] % 2 != 0){
            return arr[idx];
        }
    }
}

printOneReturnAnother([4,3,5,6]);

// 4.) Double Vision
    // Given array, create a function to return a newarray where each value 
    // in the original has been doubled. Calling double([1,2,3]) 
    // should return [2,4,6] without changing original

function double(arr){
    var newArr = [];
     for(idx = 0; idx < arr.length; idx++){
         newArr[idx] = arr[idx] * 2;
     }
     return newArr;
 }
 double([1,2,3]);

// 5.) Count Positives
    //  Given array of numbers, create function to replace last value with number of positive values. 
    //  Example, countPositives([-1,1,1,1])changes array to[-1,1,1,3] and returns it

function countPositives(arr){
    var count = 0;
    for(idx = 0; idx < arr.length; idx++){
        if(arr[idx] > 0){
            count++;
        }
    }
    arr[arr.length-1] = count;
    return arr;
}

countPositives([-1,1,1,1]);

// 6.) Evens and Odds
    // Create a function that accepts an array. 
    // Every time that array has three odd values in a row, 
    // print "That’s odd!" Every time the array has three evens in a row, 
    // print "Even more so!"

function evensAndOdds(arr){
    for(idx = 0; idx < arr.length-2; idx++){
        if((arr[idx] % 2 == 0) && (arr[idx+1] % 2 == 0) && (arr[idx+2] % 2 == 0)){
            document.write("Even more so!");
        }
        else if((arr[idx] % 2 != 0) && (arr[idx+1] % 2 != 0) && (arr[idx+2] % 2 != 0)){
            document.write("That's odd!");
        }
    }
}

evensAndOdds([2,3,7,9,8,11]);

// 7.) Increment the Seconds
    // Given arr, add 1 to odd elements ([1], [3], etc.), 
    // console.log all values and return arr.

function incrementSeconds(arr){
    for(idx = 0; idx < arr.length; idx ++){
        if(arr[idx] % 2 != 0){
            arr[idx] += 1;
        }
    }
    console.log(arr);
    return arr;
}

incrementSeconds([1,3,7,10,12]);

// 8.) Previous Lengths
    // You are passed an array containing strings. 
    // Working within that same array, replace each string with a number 
    // – the length of the string atprevious array index – and return the array

var arr = ["Hello there", "this is a string", "cool, huh?", "Yeah, pretty ding dong dang sweet."];

function previousLengths(arr){
    var arrString = "";
    for(idx = arr.length-1; idx > 0; idx--){
        arrString = arr[idx-1];
        arr[idx] = arrString.length;
    }
    arr[0] = 0;
    console.log(arr);
    return arr;
}

previousLengths(arr);

// 9.) Add Seven to Most
    // Build function that accepts array. 
    // Return a new array with all valuesexcept first, 
    // adding 7 toeach. Do not alter the original array.

var arr = [1,3,5,10,2,7];

function addSevenToMost(arr){
    var newArr = [];
    for(idx = 1; idx < arr.length; idx++){
        newArr[idx-1] = arr[idx] + 7;
    }
    return newArr;
}
addSevenToMost(arr);

// 10.) Reverse Array
    // Given array, write a function to reverse values, in-place. 
    // Example: reverse([3,1,6,4,2])returns same array, containing [2,4,6,1,3]

var arr = [3,1,6,4,2];

function reverseArray(arr){
    var revArr = [];
    var idx = arr.length-1;
    var newIdx = 0;
    while(idx > newIdx){
        revArr[newIdx] = arr[idx];
        newIdx++;
        idx--;
    }
    console.log(revArr);
}
reverseArray(arr);

// 11.) Outlook: Negative
    // Given an array, create and return a new one containing all the values of the provided array, 
    // made negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].

var arr = [1,-3,5,0,8,-10];

function makeNegative(arr){
    var newArr = [];
    for(idx = 0; idx < arr.length; idx++){
        if(arr[idx] > 0){
            newArr[idx] = arr[idx] * -1;
        } else {
            newArr[idx] = arr[idx];
        }
    }
    return newArr;
}
makeNegative(arr);

// 12.) Always Hungry
    // Create a function that accepts an array, 
    // andprints "yummy" each time one of the values is equal to "food". 
    // If no array elements are "food", then print "I'm hungry" once.

var arr = ["green",2,7,"jazz","paper"];

function alwaysHungry(arr){
    var food = 0;
    for(idx = 0; idx < arr.length; idx++){
        if(arr[idx] == "food"){
            document.write("yummy");
            food = 1;
        }
    }
    if(food == 0){
        document.write("I'm hungry");
    }
}

alwaysHungry(arr);

// 13.) Swap Toward the Center
// Given array, swap first and last, third and third-to-last, etc. 
// Input[true,42,"Ada",2,"pizza"]becomes ["pizza",42,"Ada",2,true]. 
// Change [1,2,3,4,5,6]to[6,2,4,3,5,1].



// 14.) Scale the Array
// Given array arr and number num, multiply each arr value by num, 
// and return the changed arr.

var arr = [1,2,3,4,6];

function arrayScale(arr,num){
    for(idx = 0; idx < arr.length; idx++){
        arr[idx] = arr[idx] * num;
    }
    return arr;
}

arrayScale(arr,3);