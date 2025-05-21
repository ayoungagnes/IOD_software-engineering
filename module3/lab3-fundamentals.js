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


console.log("---line break---Answer to Question 5:");
//5.
const getGreeting = function(name) {
    return 'Hello ' + name + '!' ;       //a) function expression syntax
}
console.log(getGreeting('Ayoung'));

const getGreetingArrow = (name) => {return 'Hello ' + name + '!'};
console.log(getGreetingArrow('Lisa'));  //b) arrow function syntax



console.log("---line break---Answer to Question 6:");
//6.
const westley = { 
    name: 'Westley', 
    numFingers: 5 
} 
const rugen = { 
    name: 'Count Rugen', 
    numFingers: 6 
} 
const inigo = { 
    firstName: 'Inigo',
    lastName: 'Montoya' ,
    greeting(person) { 
        let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `; 
        console.log(greeting + this.getCatchPhrase(person)); 
    }, 
    getCatchPhrase: (person) => person.numFingers == 6 ? "You killed my father. Prepare to die.":"Nice to meet you."
} 
    
inigo.greeting(westley) 
inigo.greeting(rugen)



console.log("---line break---Answer to Question 7:");
//7.
const basketballGame = { 
    score: 0, 
    fouls: 0,
    freeThrow() { 
        this.score++; 
        return this;
    }, 
    basket() { 
        this.score += 2; 
        return this;
    }, 
    threePointer() { 
        this.score += 3; 
        return this;
    }, 
    halfTime() { 
        console.log('Halftime score is '+this.score + ' Foul count is '+this.fouls); 
        return this;
    }, 
    fullTime() {
        console.log('Fulltime score is '+this.score + ' Foul count is '+this.fouls);
        return this;
    },
    foul() {
        this.fouls++;
        return this;
    }
}; //modify each of the above object methods to enable function chaining as below: 
basketballGame.basket().freeThrow().freeThrow().basket().threePointer().foul().halfTime().fullTime();
basketballGame.basket().freeThrow().freeThrow().foul().basket().threePointer().halfTime().fullTime();
basketballGame.freeThrow().freeThrow().foul().foul().threePointer().halfTime().fullTime();


console.log("---line break---Answer to Question 8:");
//8.
const sydney = { 
    name: 'Sydney', 
    population: 5_121_000, 
    state: 'NSW', 
    founded: '26 January 1788', 
    timezone: 'Australia/Sydney' 
}

function printCityInfo(city){
    for (let key in city) 
    {
        console.log('key: '+ key);
        console.log('value '+ city[key]);
    }
}

const launceston = {
    name : 'Launceston',
    population : 76_849,
    state : 'TAS',
    founded : '30 October 1853',
    timezone : 'Australian Eastern Standard Time'
}
printCityInfo(sydney);
printCityInfo(launceston);


console.log("---line break---Answer to Question 9:");
//9.
let teamSports = ['Hockey', 'Cricket', 'Volleyball']; 
let dog1 = 'Bingo'; 
let cat1 = { name: 'Fluffy', breed: 'Siberian' };

let moreSports = [...teamSports];
moreSports.push('Archery');
moreSports.unshift('Tennis');

let dog2 = dog1;
dog2 = 'Max';
let cat2 = cat1;
cat2.name='Bluey';
                         //d)Have they changed? Why?
console.log(teamSports); //didn't change becasue moreSports was created with [...teamSports], which makes a copy.
console.log(dog1);       //didn't change because dog1 and dog2 are primitive(string) and store seperate values
console.log(cat1);       //did change because cat2 is a reference to the same object. Changing cat2.name affects cat1.name.

/*let cat2 ={...cat1};    //e) >> moreSports already remains independant 
cat2.name = 'Bluey'; */   //   >> line 45,46 : changed cat2 variable 



console.log("---line break---Answer to Question 10:");
//10.
function Person(name, age) { 
    this.name = name; 
    this.age = age; 
    this.human = true; 
    this.canDrive = function() {
        return this.age >= 17;
    }
}

let person1 = new Person('Michelle','31');
let person2 = new Person('Michael', '26');

console.log(person1);
console.log(person2);

class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.human = true;
    }
    canDrive() {
        if (this.age > 18){
            return true;
        }
        else
        {
            return false;
        }
    }
}

let person3 = new PersonClass('Sarah','40');
console.log(person3);
console.log(person3.canDrive());