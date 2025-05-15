//1.                     // My asnwer before checking : left , the result : right
console.log("" + 1 + 0);        // 10 
console.log("" - 1 + 0);        // -10    |-1
console.log(true + false);      // 1
console.log(!true);             // false
console.log(6 / "3");           // 2
console.log("2" * "3");         // 6
console.log(4 + 5 + "px");      // 9px
console.log("$" + 4 + 5);       // $45
console.log("4" - 2);           // 2
console.log("4px"- 2);          // 4px-2  |NaN
console.log(" -9 " + 5);        // -95    | -9 5
console.log(" -9 " - 5);        // -14
console.log(null + 1);          // 1
console.log(undefined + 1);     // undefined |NaN
console.log(undefined == null); // true
console.log(undefined === null);// false
console.log(" \t \n" - 2);      // \t\n-2  |-2

console.log("---line break---Answer to Question 2:");
/*2. Which of the below are not giving the right answer? line 28
          Why are they not correct? addition's value is 23. why? + operator concatenates strings when either operand is a string.
          How can we fix them? let addition = Number(three) + Number(four); */
let three = "3" 
let four = "4" 
let thirty = "30"

//what is the value of the following expressions?
let addition = three + four        // 34
let multiplication = three * four  // 12
let division = three / four        // 0.75
let subtraction = three - four     // -1
let lessThan1 = three < four       // true
let lessThan2 = thirty < four      // true

console.log(addition);
console.log(multiplication);
console.log(division);
console.log(subtraction);
console.log(lessThan1);
console.log(lessThan2);


console.log("---line break---Answer to Question 3:");
/*3.Which of the following console.log messages will print? Why?
    if("0") will print because "0" is a string and string is true. 
    if(-1) and if(1) will print : due to it's a number = true.*/
if (0) console.log('#1 zero is true') ;
if ("0") console.log('#2 zero is true') ;
if (null) console.log('null is true') ;
if (-1) console.log('negative is true') ;
if (1) console.log('positive is true');

let number = NaN;
console.log("SOMETHING " + typeof number);


console.log("---line break---Answer to Question 4:");
//4.Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a and b. 
let a = 2, b = 3; 
let result = `${a} + ${b} is `; //What does '+=' do? It adds a value to variable and assigns the result back to that variable.

let comparison = (a + b < 10) ? "less than 10" : "greater than 10";

console.log(result + comparison) ;  


