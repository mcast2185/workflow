

// #21
// here we exercise the use of (this) keyword. the keyword (this) is always
// a reference to an object. its use seems to focus on getting object 
// from outside the immediate scope (my thoughts).
// (this) is used to be explicit as to where we are grabbing the object its 
// attached to, the instance it was called, or else it will search the global
// environment and if it doesnt find it, globally, it will return (undefined)
// var guide = {
//     title: 'Js developement',
//     content: 'Software',
//     visibleToUser: function (viewingRole){
//         if (viewingRole === 'paid'){
//             return true;
//         } else {
//             return false;
//         }
//     },
//     renderContent: function (userRole){
//         if (this.visibleToUser(userRole)){
//             console.log(this.title + ' - ' + this.content);
//         } else {
//             this.content = ' ';
//             console.log(this.title + ' - ' + this.content);
//         }
//     }
// };
// user = { role: 'paid' };
// user2 = { role: 'not paid' };
// guide.renderContent(user.role);


// #22
// we created too many examples for this simple challenge, nevertheless,
// here is our many solutions for removing the first and last elements
// on a list. the first example I made was the most efficient, 
// the last example is Jordans.
// his example leverages a relatively new concept of (throw errors)
// begin to implement these in your code ( throw new Error('') )

// const arry = ['assdd','good','content','yee','tagasdfa'];
// var arrayList = arr => arr.splice(1,3);
// console.log(arrayList(arry));


// function subList(arr){
//     var user = a => (a.pop(), a.shift());
//     var newone = user(arr);
//     return arr
// };
// console.log(subList(arry));

// function arrList(arr){
//     var content = []
//     for (x in arr){
//         if ( x == 0 || x == 4){
//             continue;
//         } else {
//             console.log(content.push(arr[x]));
//         };
//     };
//     return content
// };
// console.log(arrList(arry));

// const remove = arr => {
//     if (arr.length >= 3){
//         return arr.slice(1, -1);
//     } else {
//         throw new Error('Must have a minimum of three elements in the array');
//     };
// };
// console.log(remove(['assdd','good','content','yee','tagasdfa']));


// #23
// (Array) functions & (forEach) loop, were going to be using often.

// (.pop()) removes last element, and stores it
// (.shift()) removes first element, and stores it
// (.push()) adds to the end of the list
// (.unshift()) adds to the beginning of the list
// (.splice()) removes multiple, returns them when passed
// the (forEach) loop is the most common used for loop
// it deals with very little coding.
// notice how it wraps the functionality, not just around (element)
// but the rest of the code as well
// (for (x in x)) our traditional for loop. very similar to pythons
// ( do{} while() ) this loop checks its condition after the loop,
// but also what makes it different is that it guarantees that 
// it will loop at least one time. 
// ( while() ) loop checks the conditional before the loop.

// var newone =['assdd','good','content','yee','tagasdfa'];
// newone.forEach((element) => {
//     console.log(element);
// });

// const content = {
//     alias: 'Morty',
//     age: 16,
//     city: 'San Diego',
//     grandpa: 'Rick'
// };

// for (key in content){
//     console.log(key + ' - ' + content[key]);
// };

// const content = [
//     'rick',
//     'morty',
//     'jerry',
//     'bird person'
// ];

// var i = 0;
// do {
//     console.log(content[i]);
//     i++;
// } while ( i < content.length);

// var i = 0;
// while ( i < content.length){
//     console.log(content[i]);
//     i++;
// };


// #24
// running google search queries in Javascript. any time were building out
// a script, try and figure out what data your working with.
// leveraging the inspect tool on the computer we can hover over code and it will 
// warn me when i found what im looking for as i parse the html.
// the code that highlighted the searchbar were looking for tells us
// some details about the input element (class, Id) two values we can 
// work with to query.
// below we have the code used, (document) serves as the browser global,
// so when using it with the (.getElementsByClassName()) it knows to parse
// through all the browser.
// when we set our query (.value) equal to ('javascript') and passed it
// through the browser, ('javascript') appeared on the searchbar because we
// assigned (document.getElementsByClassName('gsfi)[1]), which is the same as the
// (<input>) tag, the string.
// if we cant seem to get an id or class name to query the specific line of code
// we can (traverse the DOM) and grab the element a bit higher up.
// his example is the bottom one, however the code has been reworked since the video
// was made, but what hes doing is just scalling down until he finds the value
// our third line of code manages to do the same functionality, which is click search

// const search = document.getElementsByClassName('gsfi');

// document.getElementsByClassName('gsfi')[1].value = 'javaScript tips'

// document.getElementsByClassName('gNO89b')[0].click()

// $('.jsb').childnodes[0].childnodes[0].click()


// #25
// we are treating this(Invoice()) like a class, essentially. 
// before, java didnt have object oriented syntax, no classes
// every function in java is an object. 
// ( const inv = new Invoice()) is sort of an instantiation process, where our variable 
// gains access to the values of (Invoice()), and since it is an object
// we can attribute (inv) to the nested values like ( inv.taxRate ) this
// passed now returns the value of (taxRate)(0.06)
// this is a more proper way to display (setInterval(function, milliseconds))
// this is how the function reads, passing the function at the intervals of when the 
// (milliseconds) expire to which it counts down again before returning the value
// without stop
// arrow functions allow the (this) keyword to go back and find the instance
// they were last called since it has no binding, meaning its not attributed
// to the arrow function for being the last to call it.
// (inv.total) has parens because if not it would keep returning the console value
// second example is from course work


// function Invoice(subTotal) {
//     this.taxRate = 0.06;
//     this.subTotal = subTotal;
//     this.total = setInterval( () => {console.log((this.taxRate * this.subTotal) + this.subTotal);}, 2000);
// }
// const inv = new Invoice(200);
// inv.total();


// function SavingCalc(paycheck) {
//     this.percent = 0.30;
//     this.paycheck = paycheck;
//     this.deposit = () => {
//       return (this.percent * this.paycheck)
//     }
// };
// const piggyBank = new SavingCalc(2000);
// console.log(piggyBank.deposit());


// #26
// * swapping variables in javascript with variable deconstruction, one example
// * Array deconstructing, two examples
// * Objects passed as function arguments by deconstruction. in order for us to be able
// to deconstruct the object (user) from our (renderUser) arrow function, while 
// passing an object as an argument, we have to explicitly name the keys in (user)
// because its going to be looking for those keys within the object we pass, 2 examples
// * guide to adding default object values to JavaScript function arguments. 
// we come across the (OpenGraphMetaData) for the first time, and what it allows is
// for you to take links from your app or site and be shared on other sites.
// if you want those sites to pull in the title description, (OpenGraphMetaData) is 
// one way you can do that.
//2 examples


// let left = 'rick';
// let right = 'morty';
// let tempL = left;
// let tempR = right;
// left = tempR;
// right = tempL;
// console.log(` Wait, is that ${right} and ${left}?`)

// const api = [1,2,3];
// const [one, two, three] = api;
// console.log(one);
// console.log(two);
// console.log(three);

// const user = {
//     name: "Rick",
//     email: 'and@Morty.com'
// };
// const render = ({name, email}) => `ahhh, geez ${name}${email}.`;
// console.log(render(user));

// const bank = {
//     accountNum: 454812259,
//     name: 'John Doe',
//     balance: 1257
// }
// const bankInfo = (bank) => {
//     return (`Hi ${bank.name}! Your current balance is $${bank.balance}. Account#: ${bank.accountNum}.`)
// }
// console.log(bankInfo(bank));


// const user = {
//     username: "Rick & Morty",
//     status: "away"
// }

// function loginEvent({username, status="active"}){ 
//     return `${username} is ${this.status}`;
// }
// console.log(loginEvent({username:"jim"}));

// function loginEvent({username, status}){ 
//     return `${username} is ${status}`;
// }
// console.log(loginEvent({username:"jim", status:'not active'}));

// function loginEvent({username}) {
//     return `${username} is ${status="active"}`;
// }
// console.log(loginEvent({ username: 'jim'}));


// const blog = {
//     title: "My great post",
//     summary: "Summary post"
// }
// const OpenGraphMetaData = ({ title, summary ="Daily Smarty"}) => `og-title= ${title} \nog-description= ${summary}`;
// console.log(OpenGraphMetaData(blog))


// #27
// spread operator (...word)
//   *we can use it to flatten our lists by adding them together spreads the array.
//   *when we set a variable equal to another, its not making a copy, only a 
// refference point, so if we add to (array a) which was recently set equal
// to, that value too will inherit whatever we pass it.
// with slice we copy our variable and using method to add 5 only affects one var.
//   *return greatest value from a collection or sequence by the leveraging spread
// operator, taking the values of the item passed and makes them arguments
//   *deconstructing objects with spread. taking up all the values not called
// and storing them ( { relief_1: 'Jerry', relief_2: 'Bird person' } )


// *adding to array's
// let shopping = [45,3,46,54,32];
// let items = [12,54,3];
// shopping.push(...items)
// console.log(shopping)

// *copy array with slice. method to add 5 only affects one var.
// let shopping = [45,3,46,54,32];
// let items = shopping.slice();
// items.push(5);
// console.log(shopping);
// console.log(items);

// *copy 2. using spread operator 
// let shop = [45,3,46,54,32];
// let item = [...shop]
// console.log(item)

// * Return greatest value
// let oz = [3,4,51,8,3,65];
// console.log(Math.max(...oz));
// console.log(Math.max(3,4,51,8,3,65));

// function user(x, ...n){
//     var large = x;
//     for (var i = 0; i < n.length; i++){
//         if (n[i] > large){
//             large = n[i];
//         }
//     }
//     console.log(large)
// }
// user(45,3,46,54,32);

// deconstructing objects with spread.


// const { starter, closer, ...relievers } = {
//     starter: 'Rick',
//     closer: 'Morty',
//     relief_1: 'Jerry',
//     relief_2: 'Bird person'
// };
// console.log(starter);
// console.log(closer);
// console.log(relievers);



