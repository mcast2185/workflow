// #1
// here we used a function expression coupled with arrow functions to shorten the code.
// we applied the reduce method to utilize all of our elements in the array
// //
// const reducer = (x) => x.reduce((a,b) => a + b);
// console.log(reducer([1,2,3,4,5]));


// #2
// we made use of function expressions while leveraging our ternary operator for less code.
// we nested an if statement within the initial if statement
//
// const turnary = (age) => age > 7 ? age < 13 ? 'Kids eat free.' : 'Kid is too old.' : 'kid is too young';
// console.log(turnary(12));


// #3
// here we make use of javascripts closures by returning a function that contains a argument
// outside of scope. closure gives us access to an outer functions scope from inner function
//
// function close(x){
//     return function nested(y){
//         return (x * y);
//     }
// }
// const closure = close(5);
// console.log(closure(5));


// #4
// batting avg algorithm. we leverage JS's closures by accessing the outer scopes variables.
// with use of closures, we must create a function expression to properly scale down the scopes
//
// function battingAvg(hits, atBats){
//     var hits = 100;
//     var atBats = 300;
//     return {
//         avgBats: function(){
//             return hits/atBats;
//         },
//         updateHits: function(hit, bat){
//             hits += hit;
//             atBats += bat;
//         }
//     };
// }
// const altuve = battingAvg()
// console.log(altuve.avgBats());
// altuve.updateHits(0,20);
// console.log(altuve.avgBats());


// #5
// here we apply our, this, attribute to access values outside of our functions immediate scope.
// by applying, this, we reference our object in the same lexical environment as the values, now accessible
//
// const guide = {
//     title: 'Ruins',
//     author: 'James P. McAdams',
//     visibleTo: function(viewer){
//         if (viewer === 'paid'){
//             return true;
//         } else {
//             return false
//         }
//     },
//     renderContent: function(user){
//         if (this.visibleTo(user)){
//             console.log(`${this.title} was crafted by: ${this.author}`);
//         } else {
//             this.author = ' ';
//             console.log(`${this.title} was crafted by: ${this.author}`)
//         }
//     }
// };
// const user = { role: 'paid' };
// guide.renderContent(user.role);


// #6
// we use arrow functions as well as a forEach method loop to extract the values in the array
//
// var newone =['assdd','good','content','yee','tagasdfa'];
// newone.forEach((x) => console.log(x));


// #7
// we exercise an old use of creating objects, but the setInterval function is the highlight here, 
// capable of running the same console log, infinitely by the intervals of 2000 milliseconds.
//
// function Invoice(subtotal) {
//     this.taxRate = 0.06;
//     this.subtotal = subtotal;
//     this.total = setInterval( () => console.log(this.taxRate * this.subtotal) + subtotal, 2000)
// }
// const interval = new Invoice(200)
// interval.total(); --- remove the ()


// #8
// here pass an object as an argument in order to deconstruct its values within the scope of 
// our function.
// //
// let bank = {
//     balance: 2000,
//     accountNumber: 2185,
//     name: 'Morty'
// }
// const bankInfo = (bank) => `${bank.name} your balance is at $${bank.balance}.`;
// console.log(bankInfo(bank))


// #9
// deconstructing an object with spread. the ellipsis, followed by an argument expression, 
// takes up the attribute keys not defined and returns them as an object
//
// const { name, home, ...hobbies } = {
//     name: "Rick",
//     home: "Citidal of Ricks",
//     hobby1: "Adventures",
//     hobby2: "Get wasted"
// }
// console.log(hobbies);


// #10
// by using our bind method, we are able to wrap the functionality of fullName with the values of
// our object rick, allowing us access to its contents which were out of scope and inaccessible
//
// let rick = {
//     fName: "Rick",
//     lName: "Sanchez"
// }
// let fullName = function () {
//     return `${this.fName} ${this.lName}`;
// }
// const RickBio = fullName.bind(rick);
// console.log(RickBio());


// #11
// building a testing algorithm to compare whether two objects are truly equal.
// since it perceives the objects as wholes, simply from their name, viewed as not equal
//
// const isEqual = (obj1, obj2) => {
//     let obj1keys = Object.keys(obj1);
//     let obj2keys = Object.keys(obj2);
//     if (obj1keys.length !== obj2keys.length){
//         return false;
//     }
//     for (objkey of obj1keys){
//         if (obj1keys[objkey] !== obj2keys[objkey]){
//             return false;
//         }
//     }
//     return true;
// };
// const obj1 = {
//     first: "Rick",
//     last: "Sanchez"
// };
// const obj2 = {
//     first: "Rick",
//     last: "Sanchez"
// };
// console.log(isEqual(obj1, obj2));

// #12
//
// use class and utilize the constructor method in order to create new instances of the class, now,
// values passed are capable of accessing its lexical environment. static method passes object not calls

// class Rickoning{
//     constructor({ name, rival }) {
//         this.name = name;
//         this.rival = rival;
//     }
//     render(){
//         return `${this.name}, who is this: "${this.rival}"`
//     }
//     static likelyWinner(x){
//         if ( x.rival === 'Evil Morty'){
//             return `sorry ${this.name}, you lost.`
//         }
//     }
// }

// const Rick = new Rickoning({ name: 'Rick', rival: 'Evil Morty' });
// console.log(Rick.render());
// console.log(Rickoning.likelyWinner(Rick));

// #13
// here we create a manual exponent function with arrow functions and reduce. the highlight
// is the Array object and fill method. we create an array with empty elements then fill 
//
// const expo = (x, y) => Array(y).fill(x).reduce((a,b) => a * b)
// console.log(expo(3,3))
 

// #14
// we introduce Promises in this function. Promise always takes up two arguments, resolve and reject
// each demanding their own setTimeout function. when calling the expression promise, we apply then and catch methods

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('hello...')
//     }, 2000);
//     setTimeout(() => {
//         reject(Error('sleep...'))
//     }, 2000);
// });
// promise
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.log(err)
//     })

