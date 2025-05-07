// this function adding two numbers and returns the result
function sum(a, b) 
{
    return a + b ;
}
console.log(sum(3,4)) 

// this function multiplying two numbers and returns the result
function multiply(a, b) 
{
    return a * b ;
}
console.log(multiply(6,8))

// this function subtracting two numbers and returns the result
function subtract(a, b) 
{
    return a - b ;
}
console.log(subtract(1,5))

// this function dividing two numbers and returns the result
function divide(a, b) {
   
    if (b === 0) {
        return "Error: Cannot divide by zero";  
    }

    return a / b;
}
console.log(divide(28,7))

// this function diplays an input string and doesn't return anything
function sayHello(name) {
    console.log('Hello ' + name)
}
sayHello('Ayoung');

if(sum(1,2) ==5) {
    throw new Error('Test failed');
}
if(sum(2,3) !=4) {
    throw new Error('Test failed');
}
if(sum(3,4) !=7) {
    throw new Error('Test failed');
}

if(multiply(1,-2) !=-2) {
    throw new Error('Test failed');
}
if(multiply(3,0) !=0) {
    throw new Error('Test failed');
}
if(multiply(7,3) ==22) {
    throw new Error('Test failed');
}

if(substract(100,2) !=98) {
    throw new Error('Test failed');
}
if(substract(17.3,-3) ==18) {
    throw new Error('Test failed');
}
if(substract(-6,0) !=-6) {
    throw new Error('Test failed');
}

if(divide(20,4) !=5) {
    throw new Error('Test failed');
}
if(divide(0,7) ==2) {
    throw new Error('Test failed');
}
if(divide(-10,-1) !=10) {
    throw new Error('Test failed');
}
