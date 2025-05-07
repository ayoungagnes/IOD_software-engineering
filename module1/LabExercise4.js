function sum(a, b) 
{
    return a + b ;
}
console.log(sum(3,4))

function multiply(a, b) 
{
    return a * b ;
}
console.log(multiply(6,8))

function subtract(a, b) 
{
    return a - b ;
}
console.log(subtract(1,5))

function divide(a, b) {
   
    if (b === 0) {
        return "Error: Cannot divide by zero";  
    }

    return a / b;
}
console.log(divide(28,7))


function sayHello(name) {
    console.log('Hello ' + name)
}
sayHello('Ayoung');
