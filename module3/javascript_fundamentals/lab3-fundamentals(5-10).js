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

for (let key in sydney) {
    console.log('key: '+ key);
    console.log('value '+ sydney[key]);
}

const launceston = {
    name : 'Launceston',
    population : 76_849,
    state : 'TAS',
    founded : '30 October 1853',
    timezone : 'Australian Eastern Standard Time'
}

for (key in launceston) {
    console.log('key: '+key);
    console.log('value: '+launceston[key]);
}


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
        return this.age >= 17;
    }
}

let person3 = new PersonClass('Sarah','40');
console.log(person3);