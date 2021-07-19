// - key contents of page -
// * 6 * string functions
// * 10 * reduce function coupled with arrow function condensing
// * 14 * turnary operator
// * 20 * JavaScript closures


// #1
// if we know the var names we'll be using, we can code something like 
// (var name, city, age;) at the top, then define them down the line

// var name, city, age;
// name = 'Jon Jones';
// city = 'New Mexico';
// age = 33;
// console.log(name)
// console.log(city)
// console.log(age)


// #2
// (newOne = 'charles';) assigns a variable, doesnt declare it. so in this
// example, we can call the value assigned with our console.log() even tho
// we havent declared, thanks to (hoisting)

// newOne = 'charles';
// console.log(newOne)
// var newOne;


// #3
// here we show how we can change the nested elements value by re assigning 
// the query value in the first console.log(), next we create another key value
// in the nested object during the second console.log(), then we query our 
// nested object in the third console.log(), lastly, we console.log() the 
// entire object with all our changes
// var user = {
//     name: 'jon',
//     age: 33,
//     styles: {
//       one: 'muai thai',
//       two: 'greeko wrestling',
//       three: 'ju jitsu'
//     }
//   };
//   user.styles.three = 'grappling';
//   user.title = 'champion';
//   console.log(user.styles.three);
//   console.log(user.styles.four=45);
//   console.log(user.styles);
//   console.log(user)


// #4
// here we have an example of js typecasting. it tries to help us out
// because it knows they are both numbers, but in doing so, it can
// lead to larger issues. as seen below, the first log works, however
// the second does not, it attempts to concatenate
// console.log('10' - 4);
// console.log('10' + 4);


// #5
// here we convert our variable from integer datatype to string with 
// the (.toString()) function, similarly we can convert a string 
// datatype to a number using two different functions. and lastly
// we use the unary operator to convert (most common use)
// var age = 56;
// var age = age.toString();
// console.log(typeof(age));
// var date = '20';
// var date = Number(date);
// var year = '91';
// var year = parseInt(year);
// console.log(typeof(year));
// console.log(typeof(date));
// var time = '12'
// var time = + time;
// console.log(typeof(time));


// #6
//      * String Functions in JavaScript// doesnt change orginal value creates new *
// var.includes() - if arg passed is in the var (boolean) is returned T/F
// var.concat() - adds the arg to the var
// var.length() - checks for total characters
// var.replace() - takes two args, what you want replaced, and whats replacing it
// var.indexOf()/.search() - gets the first index number of where arg was found
// var.trim() - removes whitespace
// var.slice() - works like pythons range([1:10]), takes three args: start/end/every multiple of
// var.repeat() - repeats var's value by arg number
// var.charAt() - returns element at index passed as arg
// var.match() - returns an array with our arg, its first known index, and the input its looking from
// var.toUpperCase()/.toLowerCase - caps all letters/ lowers all letters
// var user = 'the quick brown fox jumped over the lazy dog'
// console.log(user.replace('fox', 'cat'));


// #7
// here we increment our value with the increment operator in JS. 
// the instance we increment doesnt change our value, once we 
// call it again is when it does. however if we place the incrementor
// operator before it, the value is changed immediately. same goes with 
// the negatives. the incrementor has to be called on a variable, not number itself
// last example shows how we can create a negative
// var num = 2;
// num++;
// num;
// num--;
// num;
// var numTwo = -num;
// numTwo;


// #8
// compound assignment operator, adds on the fly without having to parse through code/DB
// var sum = 0;
// var sumtwo = 100;
// sum += sumtwo;
// sum += sumtwo;
// sum;


// #9
// arrow functions allow us to write shorter function syntax, the example
// at the top is the function expression without the arrow function.
// the following examples show how we can condense the same code.
// notice how the last example we lose the parens, this is allowed as long
// as there is only one argument being passed.
// var hello = function(val) {
//   return "Hello World!" + val;
// };
// console.log(hello(' How are ya?'));

// var hello = (val) => {
//   return "Hello World!" + val;
// };
// console.log(hello(' How are ya?'));

// var hello = val => "Hello World!" + val;
// console.log(hello(' How are ya?'))


// #10
// all we did here was nest a function (reducer) within our getavg() function
// from there we created its functionality, essentially made it a lambda.
// the reason we created it was for the purpose of using our reduce function
// thats being attributed to 'arr' ( arr.reduce() ), which demands 
// a function to apply to 'arr'.
// simplified form below, remember arrow functions allow us to skip labeling functions
// lastly, the finalized versions, condensed forms. work at building these functions and
// narrowing them down with the arrow function(=>)
// const getavg = arr => {
//   let reducer = (total, value) => total + value;
//   let sum = arr.reduce(reducer);
//   return (sum / arr.length);
// };
// console.log(getavg([23,45,65,7]));

// const getavg = arr => {
//   let sum = arr.reduce((total, value) => total + value);
//   return (sum / arr.length);
// };
// console.log(getavg([23,45,65,7]));

// const getavg = arr => sum = arr.reduce((total, value) => total + value) / (arr.length);
// console.log(getavg([23,45,65,7]));

// const content = arr => arr.reduce((x, y) => x + y) / arr.length;
// console.log(content([23,45,65,7]))


// #11
// strict equal(===) is best practice, as opposed to (==) for the reason
// that equal will allow the likeness of a string datatype of ('12') to be considered
// equal to the number datatype of (12)
// our bottom example shows strict not equal (!==)
// var age, ageTwo;
// age = 12;
// ageTwo = '12';
// if (age === ageTwo){
//   console.log('correct');
// } else {
//   console.log('incorrect');
// };

// if (age !== ageTwo) {
//   console.log('not equal');
// } else {
//   console.log('same');
// };


// #12
// similar to pythons if/else conditionals with the differences being
// (elif) is spelled out (else if), the other difference is the additional
// condition, where as python spells out (and) JS uses (&&)
// like python, always use else as a catch
// var age = 'fs'
// if (age <= 16){
//   console.log('of age');
//   console.log('not allowed');
//   console.log('not yet, but close');
// } else if (age > 16 && age < 25){
//   console.log('not of age');
//   console.log('allowed');
//   console.log('not yet, but close');
// } else if (age >= 25){
//   console.log('you can rent');
// } else {
//   console.log('Incorrect input');
// };

// #13
// switch statement to check for datatypes
// var data = true
// switch (typeof data){
//   case 'string':
//     console.log('Its a string');
//     break;
//   case 'number':
//     console.log('Its a number');
//     break;
//   default:
//     console.log('No matches');
// };


// #14
// here we leverage the Ternary operator. the (?) reads (if) for the condition before
// (:) reads as else
// function user(age){
//   if (age === 14){
//     console.log('youre right');
//   } else {
//     console.log('aw, guess again');
//   }
// };
// user(14)

// function content(ageOne){
//   let answer = ageOne > 25 ? 'can rent' : 'cant rent';
//   console.log(answer);
// }
// content(20);

// function cond(content){
//   if (content > 20){
//     if (content < 28){
//       console.log('yup');
//     } else {
//       console.log('nope');
//     }
//   } else {
//     console.log('maybe');
//   }
// };
// cond(24)

// function newOne(con){
//   var user = con > 20 ? con < 28 ? 'yup' : 'nope' : 'maybe';
//   return user
// }
// console.log(newOne(8));


// #15
// returning value and function expression
// function user(){
//   return 'its young!';
// }
// var nameOne = user();
// console.log(nameOne);


// #16
// here we experience what can happen when not declaring your variable
// within the scope. the nested variable of user should only be accessible
// within the function however, by not declaring it, we redefined the 
// variable outside the function. made it a global variable.
// var user = {
//   fullname: 'Morty'
// };

// function greeting(){
//   user = {
//     fullname: 'Rick'
//   }
//   console.log('hey ' + user.fullname);
// };
// greeting();
// console.log(user.fullname);


// #17
// working with function expressions
// var content = function () {
//   return 'Rick and Morty';
// };
// console.log(content());

// var con = () => 'Rick and Morty';
// console.log(con());


// #18
// working with function args, new use is the (||) element,
// the variable reads, if the arg (phrase) is defined, then
// let it be what its defined, otherwise, its default is ('ahh geez')
// function fullName(first, last, phrase){
//   var phrase = phrase || 'ahh geez.';
//   return first.toUpperCase() + ', ' + last.toUpperCase() + ' wait, ' + phrase;
// };
// console.log(fullName('rick', 'morty'));


// #19
// here we can see that once we passed the variable (someUser) through
// our function, the return re assigns the value being passed, that is why
// when we (console.log()) the variable alone it no longer carries its
// original value.
// in order to avoid that, simply return the variable, it disregards the arg
// and does not re assign
// var someUser = {
//   name: 'Rick'
// };

// function form(user){
//   return user.name = 'Morty'
// };
// console.log(form(someUser));
// console.log(someUser);

// #20
// Working with JavaScript closures.
// a closure's functionality is essentially being able to wrap up an 
// entire set of behavior, usually in a function, and be able to use that, 
// pass it around, and call it however you need.
// in detail, a "closure" is the combination of a function and the lexical
// environment within which that function was declared. This environment 
// consists of any local vars that were in-scope at the time the closure was
// created. 
// * closures let you associate the environments data with a function that operates
// on that data. *
// in the first example both add5 and add10 are closures. they inherit the environment
// of the function (adder())

// function adder(x){
//     return function(y){
//         return x + y;
//     };
// };
// var add5 = adder(5);
// var add10 = adder(10);
// console.log(add5(2));
// console.log(add10(2));

// the variable (altuve) has access to the entire evironment here, with 
// (getCurrentAvg) and (updateHitsAndBats) serving as the closures.
// each closure taking up the preceeding data set. when querying the key (getCurrentAvg)
// it takes up its functionality of (hits/atBats).
// the second portion, (altuve) queries the key (updateHitsAndBats) with its new
// values passed, since closures take up the lexical environment data, we apply 
// the (getCurrentAvg) key functionality to its value/ function, passing first 
// the compound assignment operator it contains, then, passing the (getCurrentAvg)
// method (hits/atBats)

// function batAvg(){
//     var hits = 100;
//     var atBats = 300;
//     return {
//         getCurrentAvg: function(){
//             return (hits/atBats);
//         },
//         updateHitsAndBats: function(hit, atBat){
//             hits += hit;
//             atBats += atBat;
//         }
//     };
// };
// var altuve = batAvg();
// console.log(altuve.getCurrentAvg());
// altuve.updateHitsAndBats(0,20);
// console.log(altuve.getCurrentAvg());


