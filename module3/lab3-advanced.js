//1.
/* Q1-a)
    function makeCounter() {
     let currentCount = 0; 
     return function() { 
        currentCount++; 
        console.log(currentCount) 
        return currentCount; 
    }; 
} 
let counter1 = makeCounter(); 
counter1(); // 1 
counter1(); // 2
let counter2 = makeCounter();
counter2(); 
counter2();  */

/* Q1-b)
function makeCounter(startFrom = 0) {
    let currentCount = startFrom;
    
    return function () {
        currentCount++;
        console.log(currentCount);
        return currentCount;
    };
}
const counter1 = makeCounter(5);
console.log(counter1());
console.log(counter1()); */

//Q1-c)
function makeCounter(startFrom, incrementBy){
    let currentCount = startFrom;

    return function () {
        currentCount += incrementBy;
        return currentCount;
    };
}
const counter1 = makeCounter(10,2);
console.log(counter1());
console.log(counter1());
const counter2 = makeCounter(0, 5);
console.log(counter2());
console.log(counter2());


console.log("---line break---Answer to Question 2:");
//2.
/* function delayMsg(msg) 
{ 
    console.log(`This message will be printed after a delay: ${msg}`) 
} */

//Q2-a) the order:#4-#3-#2-#2-#1, why? #4 runs immediately, #3 doesn't run immediately. because JavaScript runs all the normal code first, then runs delayed code from the queue.
//Q2-b)
const delayMsg = (msg) => {
    console.log(`This message will be printed after a delay: ${msg}`);
}
setTimeout(delayMsg, 100, '#1: Delayed by 100ms'); 
setTimeout(delayMsg, 20, '#2: Delayed by 20ms'); 
setTimeout(delayMsg, 0, '#3: Delayed by 0ms'); 
delayMsg('#4: Not delayed at all') 
//Q2-c,d)
let timeOutId = setTimeout(delayMsg, 11000, '#5: Delayed by 11 seconds');
clearTimeout(timeOutId);


console.log("---line break---Answer to Question 3:");
//3.
/*3-a)
function debounce(func) {
    let timeout; //a variable stores the timer

    return function() {
    // Every time the function is called, we clear the previous timeout (if any)
    clearTimeout(timeout);

    //Set a new timeout to run the function after 1000ms
    timeout = setTimeout(() => {
        func();  // This is the function we want to run
       }, 1000);
    };
}
function printMe() {
  console.log('printing debounced message');
}
printMe = debounce(printMe);

setTimeout(printMe, 100);  // Call 1
setTimeout(printMe, 200);  // Call 2
setTimeout(printMe, 300); //Call 3 : this one will be the only one to print after 1000ms*/

/*3-b)
function debounce(func, ms = 1000) {
    let timeout; 

    return function(...args) {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
        func(...args);  
       }, ms);
    };
}
// The function we want to debounce
function printMe(msg) {
  console.log('Printing debounced message:', msg);
}

// Wrap the printMe function with debounce, set the delay to 500ms
const debouncedPrintMe = debounce(printMe, 500);

// Testing the debounce
debouncedPrintMe("First call");  // Nothing will print yet
debouncedPrintMe("Second call"); // Nothing will print yet (timer resets)
debouncedPrintMe("Final call");  // This will print after 500ms, because it's the last one */

//3-c)
function debounce(func, ms = 1000) {
  let timeout;
  
  return function(...args) {
    clearTimeout(timeout);
    
    timeout = setTimeout(() => {
      func(...args);  // Call the function with the arguments passed
    }, ms);
  };
}

function printMe(msg) {
  console.log(`printing debounced message: ${msg}`);
}

printMe = debounce(printMe, 1000);

// Test with 3 different messages
setTimeout(() => printMe("Message 1"), 100);  // Won't print
setTimeout(() => printMe("Message 2"), 200);  // Won't print
setTimeout(() => printMe("Message 3"), 300);  // Will print after 1000ms


console.log("---line break---Answer to Question 4:");
//4
/* 4-a)
function printFibonacci () {
    let a = 0, b = 1;
    
    console.log(b);

    const setIntervalId = setInterval(() => {
        const next = a + b;
        console.log(next);
        a = b;
        b = next;
    }, 1000);
}

printFibonacci(); */

//4-b
function printFibonacciTimeouts() {
    let a = 0, b = 1 ;

    function next() {
        const nextValue = a + b;
        console.log(nextValue);
        a = b;
        b = nextValue;
    
        setTimeout(next, 1000);
    }

    console.log(b);
    setTimeout(next, 1000);
}

printFibonacciTimeouts();

//4-c)
function printFibonacci(limit) {
    let a = 1, b = 1;
    let count = 1;

    console.log(b);
    
    const setIntervalId = setInterval(() => {
        const next = a + b;
        console.log(next);
        a = b;
        b = next;

        if (count >= limit) {
            clearInterval(setintervalId);
        }
    }, 1000);
}

printFibonacci(10);


console.log("---line break---Answer to Question 5:");
//5.
let car = {
  make: "Porsche",
  model: "911",
  year: 1964,
  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  }
};


console.log("Calling with wrapper:");
setTimeout(() => car.description(), 200); 

let newerCar = { ...car, year: 2020 };

// Just to show the clone works
console.log("Newer car description:");
newerCar.description(); 

let boundDescription = car.description.bind(car);

console.log("Calling bound description:");
setTimeout(boundDescription, 400);


let updatedCar = { ...car, model: "Cayenne" };


console.log("Updated car description:");
updatedCar.description(); 


console.log("Calling bound description again:");
setTimeout(boundDescription, 600); 


console.log("---line break---Answer to Question 6:");
//6.
Function.prototype.delay = function(ms) {
  const originalFunction = this;

  return function(...args) {
    setTimeout(() => {
      originalFunction.apply(this, args);
    }, ms);
  };
};

function multiply(a, b) {
  console.log(a * b);
}

console.log("Multiply 5 x 5 after 500ms:");
multiply.delay(500)(5, 5); 

function multiplyFour(a, b, c, d) {
  console.log(a * b * c * d);
}

console.log("Multiply 2 x 3 x 4 x 5 after 1000ms:");
multiplyFour.delay(1000)(2, 3, 4, 5); 


console.log("---line break---Answer to Question 7:");
//7.
// Original DigitalClock class
class DigitalClock {
  constructor(prefix) {
    this.prefix = prefix;
  }

  display() {
    let date = new Date();
    let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()];
    if (hours < 10) hours = '0' + hours;
    if (mins < 10) mins = '0' + mins;
    if (secs < 10) secs = '0' + secs;
    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.display();
    this.timer = setInterval(() => this.display(), 1000);
  }
}

// a) PrecisionClock - adds `precision` parameter (default 1000ms)
class PrecisionClock extends DigitalClock {
  constructor(prefix, precision = 1000) {
    super(prefix);
    this.precision = precision;
  }

  start() {
    this.display();
    this.timer = setInterval(() => this.display(), this.precision);
  }
}

// b) AlarmClock - adds `wakeupTime` (format 'hh:mm', default '07:00')
class AlarmClock extends DigitalClock {
  constructor(prefix, wakeupTime = '07:00') {
    super(prefix);
    this.wakeupTime = wakeupTime;
  }

  display() {
    let date = new Date();
    let [hours, mins] = [date.getHours(), date.getMinutes()];
    if (hours < 10) hours = '0' + hours;
    if (mins < 10) mins = '0' + mins;
    const currentTime = `${hours}:${mins}`;

    console.log(`${this.prefix} ${currentTime}`);

    if (currentTime === this.wakeupTime) {
      console.log('⏰ Wake Up!');
      this.stop();
    }
  }

  start() {
    this.display();
    this.timer = setInterval(() => this.display(), 1000);
  }
}

// Example usage:
// const myClock = new DigitalClock('my clock:');
// myClock.start();

// const preciseClock = new PrecisionClock('precise clock:', 500);
// preciseClock.start();

// const alarm = new AlarmClock('alarm clock:', '07:00');
// alarm.start();


console.log("---line break---Answer to Question 8:");
//8.
function orderItems(...itemNames) {
  return `Order placed for: ${itemNames.join(', ')}`;
}

function validateStringArgs(fn) {
  return function(...args) {
    for (let arg of args) {
      if (typeof arg !== 'string') {
        throw new Error('All arguments must be strings');
      }
    }
    return fn(...args);
  };
}

const validatedOrderItems = validateStringArgs(orderItems);

try {
  console.log(validatedOrderItems("Apple Watch", "iPhone")); 
} catch (err) {
  console.error("Error:", err.message);
}

try {
  console.log(validatedOrderItems("MacBook", 123)); 
} catch (err) {
  console.error("Error:", err.message);
}


console.log("---line break---Answer to Question 9:");
//9.
function randomDelay() {
  const delay = Math.floor(Math.random() * 20) + 1; // 1–20 seconds
  const delayMs = delay * 1000;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (delay % 2 === 0) {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delayMs);
  });
}

randomDelay()
  .then((delay) => {
    console.log(`Success! Delay of ${delay} seconds.`);
  })
  .catch((delay) => {
    console.log(`Failed! Delay of ${delay} seconds (odd number).`);
  });

  console.log("---line break---Answer to Question 10:");
  //10.


//a.
async function fetchURLDataAsync(url) {
  try {
    const response = await fetch(url);
    if (response.status === 200) {
      return await response.json();
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    throw new Error(error.message);
  }
}


fetchURLDataAsync('https://jsonplaceholder.typicode.com/todos/1')
  .then(data => console.log(data))
  .catch(error => console.error(error.message));