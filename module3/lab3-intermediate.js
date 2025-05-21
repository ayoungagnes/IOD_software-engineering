//1.
function ucFirstLetters(str) {
    const words = str.split(' ');
    let result = '';
    for (let i = 0; i < words.length; i++) 
    {
        const word = words [i];
        result += word.charAt(0).toUpperCase() + word.slice(1);
        if (i < words.length - 1) result += ' ';
    }
    return result;
}
console.log(ucFirstLetters('los angeles'));

/* function ucFirstLetters(str) {
    let words = str.split(" ");
    console.log("begin " + words);
    let result = "";
    console.log("original result " + result);

    for (let word of words) {
        if (result.length != 0) {
            result += " "
        }; // Add space only after first word
        console.log("debug 1 " +result);
        result += word.charAt(0).toUpperCase() + word.slice(1); // Capitalize first letter
        console.log("debug 2 "+result);
    }

    return result;                       
    
}  >> an example of Glen's suggestion:another way for Q1. want to keep it here for self-study.

console.log(ucFirstLetters("hello there"));*/

 
console.log("---line break---Answer to Question 2:");
//2.

function truncate(str, max) {
   return (str.length > max) ? str.slice(0, max) + '...': str ;
   
}

console.log(truncate('This text will be truncated if it is too long', 25)) ;//where should this be located?


console.log("---line break---Answer to Question 3:");
//3.
const animals = ['Tiger', 'Giraffe'] 
console.log(animals);

animals.push('Quakka', 'Kangaroo');
console.log(animals);
animals.unshift('Rabbit', 'Koala');
console.log(animals);
animals.sort();
console.log(animals);

function replaceMiddleAnimal(newValue) {
    const middleIndex = Math.floor(animals.length / 2) ;
    animals.splice(middleIndex, 1, newValue);
}
replaceMiddleAnimal('Lion');
console.log(animals);

function findMatchingAnimals(beginsWith) {
    const result = [];
    for (let animal of animals) {
        if (animal.toLowerCase().startsWith(beginsWith.toLowerCase())) {
            result.push(animal);
        }
    }
    return result;
}

console.log(findMatchingAnimals('k'));


console.log("---line break---Answer to Question 4:");
//4.
function camelCase(cssProp) {
   return cssProp.split('-')
                .map((word,index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
                    )
                    .join('')

    
}

console.log(camelCase('margin-left')) // marginLeft 
console.log(camelCase('background-image')) // backgroundImage 
console.log(camelCase('display')) // display

/* b) different approach1 : for loop
function camelCase(cssProp) {
  const words = cssProp.split('-');
  let result = words[0]; // keep the first word as is

  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    result += word.charAt(0).toUpperCase() + word.slice(1);
  }

  return result;
}
b) different approach2 : for.. of loop
function camelCase(cssProp) {
  const words = cssProp.split('-');
  let result = '';
  let index = 0;

  for (let word of words) {
    if (index === 0) {
      result += word;
    } else {
      result += word.charAt(0).toUpperCase() + word.slice(1);
    }
    index++;
  }

  return result;
}
*/

console.log("---line break---Answer to Question 5:");
//5.
let twentyCents = 0.20 
let tenCents = 0.10 

console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`) // 0.2 + 0.1 = 0.30000000000000004

let fixedTwenty = twentyCents.toFixed(2); 
let fixedTen = tenCents.toFixed(2); 

console.log(fixedTwenty + fixedTen); //Q)why is this not working? 
                                    //A)Because toFixed(2) turns the number into a string so, it's striing concatenation not adding numbers.

/*self-study:Fix it by converting back to a number : use "Number()"
let fixedTwenty = Number(twentyCents.toFixed(2));
let fixedTen = Number(tenCents.toFixed(2));
console.log(fixedTwenty + fixedTen); // 0.3 */
    
function currencyAddition(float1, float2) {
    return  (float1 * 100 + float2 * 100) / 100 ;
}
console.log(currencyAddition(0.1, 0.2));
console.log(0.3 == currencyAddition(0.1, 0.2));

function currencyOperation(float1, float2, operation) {
    const factor = 100;
    const int1 = float1 * factor;
    const int2 = float2 * factor;

    switch (operation) {
        case '+' : return (int1 + int2) / factor;
        case '-' : return (int1 - int2) / factor;
        case '*' : return (int1 * int2) / (factor * factor);
        case '/' : return (int1 / int2) ;
        default : return NaN;
    }    
}
console.log(currencyOperation(0.1, 0.2, '+'));
//(extension) d.
function currencyOperationD(float1, float2, operation, numDecimals = 2){
    const factor = Math.pow(10, numDecimals);
    const int1 = Math.round(float1 * factor);
    const int2 = Math.round(float2 * factor);

    let result;

    switch (operation) {
        case '+' : result = (int1 + int2) / factor; break;
        case '-' : result = (int1 - int2) / factor; break;
        case '*' : result = int1 * int2 / (factor * factor); break;
        case '/' : result = int1 / int2; break;
        default : return NaN;
    }
    return Number(result.toFixed(numDecimals));
}
console.log(currencyOperationD(0.3, 0.4, '+', 2));
console.log(currencyOperationD(0.3333, 0.3333, '+', 3)); 



console.log("---line break---Answer to Question 6:");
//6.
const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow'] 
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43] 

console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ] 
console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]

function unique(duplicateArray) {
    return [...new Set(duplicateArray)];
};


console.log("---line break---Answer to Question 7:");
//7.
const books = [ 
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 }, 
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }, 
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 }, 
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 }, 
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 }, 
];

function getBookTitle(bookId) {
    const book = books.find(randomBook => bookId == randomBook.id);
    return book ? book.title : 'Book not found';
}

console.log(getBookTitle(3));
console.log(getBookTitle(5));

function getOldBooks() {
    let oldBook = books.filter(ob => ob.year < 1950);
    return oldBook ? oldBook : 'Book not found';
}
console.log(getOldBooks());

function addGenre() {
    return books.map(book => ({...book,genre:'classic'}));
     
}
console.log(addGenre());
//(extension) d.
function getTitles(authorInitial) {
    return books.filter(book => book.author[0].toLowerCase() == authorInitial.toLowerCase())
                .map(book => book.title);   //author[0] : first letter of author
}
console.log(getTitles('F'));
console.log(getTitles('G'));

//(extension)e.
function latestBook(){
    let latest = books[0]; 
    books.forEach(book => { 
        if (book.year > latest.year) {
            lateset = book;
        }
    });
    return latest;
}
console.log(latestBook());



console.log("---line break---Answer to Question 8:");
//8.
const phoneBookABC = new Map() //an empty map to begin with 
phoneBookABC.set('Annabelle', '0412312343') 
phoneBookABC.set('Barry', '0433221117') 
phoneBookABC.set('Caroline', '0455221182')

/* const phoneBookDEF = new Map();
phoneBookDEF.set('Danielle', '0412333444');
phoneBookDEF.set('Elijah','0455444555');
phoneBookDEF.set('Fiona','0498456789'); */   // >>> create via '.set

const phoneBookDEF = new Map([
  ['Danielle', '0412333444'],
  ['Elijah', '0455444555'],
  ['Fiona', '0498456789']
]);

phoneBookABC.set('Caroline','0477788866');

function printPhoneBook(contacts) {
    contacts.forEach((number,name) => {
        console.log(`${name}: ${number}`);
    });
}
printPhoneBook(phoneBookABC);

const combinedPhoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);

console.log([...combinedPhoneBook.keys()]);


console.log("---line break---Answer to Question 9:");
//9.
let salaries = { 
    "Timothy" : 35000, 
    "David" : 25000, 
    "Mary" : 55000, 
    "Christina" : 75000, 
    "James" : 43000 
};
function sumSalaries(salaries){
    return Object.values(salaries).reduce((total, salary) => total + salary, 0);
}

 function topEarner(salaries){
      return Object.entries(salaries).reduce(
        (top,[name,salary]) => salary > top.salary ? {name, salary} : top,
        {name:'', salary: -Infinity }
    ).name;
}
console.log(topEarner(salaries));


console.log("---line break---Answer to Question 10:");
//10.
const today = new Date(); 
console.log('Current time is ' + today.toLocaleTimeString()) 

console.log(today.getHours() + ' hours have passed so far today')
//10-a)
const minutesPassed = today.getHours() * 60 + today.getMinutes();
console.log(`${minutesPassed} minutes have passed today.` );
//10-b)
const secondsPassed = minutesPassed * 60 + today.getSeconds();
console.log(`${secondsPassed} seconds have passed today.`) ;
//10-c)
const birthDate = new Date('1993-07-28');

let years = today.getFullYear() - birthDate.getFullYear(); 
let months = today.getMonth() - birthDate.getMonth();
let days = today.getDate() - birthDate.getDate();

if (months < 0){
years--;      //subtract 1 year 
months += 12; //add 12 months (like borrowring a dozen)
}
if (days < 0){
    const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += lastMonth.getDate();  //add days from April(30days) : borrowing from the previous month
    months--;                     //subtract the borrowed month
}

console.log(`I am ${years} years, ${months} months, ${days} days old.`); 

function daysInBetween(date1, date2) {
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}
const date1 = new Date('2023-01-01')
const date2 = new Date('2025-01-01')
console.log(daysInBetween(date1, date2));