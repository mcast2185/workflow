// # 28
//the (bind()) method allows us to combine a function with an object,
// meaning, we dont have to have to pass arguments to get the values we want
// specifically in this case, i dont have to pass the (firstName) into our 
// (fullName) function expression, we can simply "Bind" them together.

// const userOne = {
//     firstName: 'Rick',
//     lastName: 'Sanchez'
// };
// const userTwo = {
//     firstName: 'Morty',
//     lastName: 'Smith'
// };
// const fullName = function() {
//     return `${this.lastName}, ${this.firstName}`
// };
// const Rick = fullName.bind(userOne);
// const Morty = fullName.bind(userTwo);
// console.log(Rick());
// console.log(Morty());


// #29
// How to check if two objects have equal values. given our example here 
// ( obj1 = {name: 'moe'} === obj2 = {name: 'moe'} ) we would think these two values
// would equAL or even with the more laxed (==) equivalent symbol.
// the reason, when javaScript looks at objects, it perceives it as a whole. it has it stored 
// in one spot in memory.
//      * whats interesting here is that we learn ( Object.keys() / Object.values() ) 
// can grab all the values or keys and returns them in an array. from there we can query deeper *
//
// *** building a testing algorithm in relation to two values ***
// 
// for our first step, we do a form of instantiating, (const obj1keys = Object.keys(obj1))
// placing all the object keys in array held by each ( obj1keys, obj2keys )
// then as our first conditional parameter, we check if the length or amount of keys
// are the same. have the easiest form of checking at the beginning of the function.
// after, we create a loop to match the key at each index and if they are not the same
// then, again we would return false. if it passes through both then we are welcome 
// to return true. 
// this debugging method is used for shallow equivalence one data type.
// 

// const isEqual = (obj1, obj2) => {
//     const obj1keys = Object.keys(obj1);
//     const obj2keys = Object.keys(obj2);
//     if (obj1keys.length !== obj2keys.length ){
//         return false;
//     }
//     for (let objkey of obj1keys) {
//         if (obj1[objkey] !== obj2[objkey]) {
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

// console.log(obj1 == obj2);
// console.log(isEqual(obj1, obj2));


// #30
// Object oriented programming (OOP) in JavaScript.
// a class is like our blueprint. a class is simply a list of definitions that say 
// exactly how the class should behave. it will list out attributes so it can describe what
// the class is supposed to do and the behavior its going to have
// if we have a new user on our website, the program is going to look at your user class and
// its going to see the blueprint. its going to see how that user should behave.
// we do that with instantiation, which means were taking the blueprint and were creating
// a real world object with it. 
// its going to be this object that they are going to work with.
//
// here we build an Account class 
// (constructor) is like (__init__) where every time we create or have a new (Account), they
// run whats inside, in this case (username, password).
// everytime we want to create a new (Account) we simply are going to pass all attributes
// in as an object.
// ( constructor({ username, password }) ) we are making (username and password) part of our class
// ( this.username ) references the instance of (Account) so it stores whatever we pass it with 
// instantiation as part of (Account)
// instantiation tells us the program that it wants to create something that matches the blueprint, (creating the house)
// when instantiating, (new) comes before our class object
// when console logging the instance (user) we receive back the object of (Account)
// in this case (Account { username: 'jon', password: 'asdf' }) 
// and like other objects in JS we can call specific keys to get values
// like this (console.log(user.username)) to get (jon)

// class Account{
//     constructor({ username, password }) {
//         this.username = username;
//         this.password = password;
//     }
// }
// const user = new Account({ username: 'jon', password: 'asdf'});
// console.log(user)


// #31
// JavaScript OOP instance methods
// in (renderDetails()) the string interpolation (${this.name}) needs to have
// (this) because its calling the instance of your new constructor and its values
// at that moment.
// so we can call on that method by (user.renderDetails) after we've instantiated

// class Account{
//     constructor({ name, role = "assistant" }) {
//         this.name = name;
//         this.role = role;
//     }
//     renderDetails(){
//         console.log(`${this.name}: ${this.role}`);
//     }
// }
// const user = new Account({ name: 'jon'});
// const userOne = new Account({ name: 'ned', role: 'teacher'});
// user.renderDetails();
// userOne.renderDetails();

// #32
// guide to object oriented programming (OOP) static methods
// the static method does not require an object in order to work as opposed to 
// using the instantiation. it wont even work.
// static is useful when we want methods that dont target the instance of the class
// if we have a static method we need to ask (does this really belong inside of the class?)
// a class should only have a single job to do (Single Responsibility Principle)
// (static isWelcome()) we arent calling our instance we are passing the object
// very subtle difference

// class Account{
//     constructor({ name, role = "bastard" }) {
//         this.name = name;
//         this.role = role;
//     }
//     renderDetails(){
//         console.log(`${this.name}: ${this.role}`);
//     }
//     static helloWorld(){
//         console.log('hey there')
//     }
//     static isWelcome(x){
//         return (x.role === 'family')
//     }
// }
// Account.helloWorld();
// const user = new Account({ name: 'Jon Snow'});
// const userOne = new Account({ name: 'Ned Stark', role: 'family'});
// console.log(`${user.name} is welcomed here: ${Account.isWelcome(user)}`)
// console.log(`${userOne.name} is welcomed here: ${Account.isWelcome(userOne)}`)


// class Home {
// 	constructor({ type, payment = "renting" }) {
// 		this.type = type;
// 		this.payment = payment;
// 	}

// 	static homeImprovement(yourHome) {
// 		return (yourHome.payment === 'mortgage')
// 	}
// }

// const choice1 = new Home({ type: "house", payment: 'mortgage'})
// const choice2 = new Home({ type: "apartment" })
// console.log(Home.homeImprovement(choice1));
// console.log(Home.homeImprovement(choice2));


// #33
// JSON parsing guide for API development
// JavaScript Object Notation(JSON) is a way to format data into attribute-value pairs
// JSON was created to be a universal data format that could be used across all languages and frameworks,
// which means it has to be simple. 
// javascript object notation(JSON) is a way to universally structure data so to be used by other languages
// broken down into three levels:
// usually the first level is accessed by passing an integer (response[0])
// the second, we access by grabbing the attribute or key (response[0]['hobby'])
// the third is by grabbing the element your looking for (response[0]['hobby']['music'])


// #34
// the ( .fill() ) method fills the specified elements in the array with the value you pass
// it takes up 3 arguments (.fill(value,start,end))
// the first being the value you want in the array, the second is the index of where you want
// those values to start plugging in, the third is where to end.

// function expo(x,y){
//     let num = []
//     for (let i = 0; i < y; i++){
//         num.push(x);
//     }
//     return num.reduce((a,b) => a * b);
// }
// console.log(expo(3,3));
//
// or
// console.log((Array(3).fill(3)).reduce((a,b) => a * b));

// #35
// JavaScript promises
// if my page uses the twitter api for posts and for some reason twitter is down
// what a promise allows us to do is, allow us to call the twitter api, show the page
// then whenever the posts do arrive from the API, then show posts.
//      * this is one of the most common reasons why people like to use JS, because of whats called
//        its (asynchronous nature). you can call outside services, these APIs, and you can choose
//        which elements on your page/app will load right away vs ones taking longer  *
// promises deal specifically with the user experience.
//
// first we create a greeting object (sleepyGreeting). 
// the way we create a promise is (new Promise) and store it in the (sleepyGreeting).
// a promise takes two arguments, first is resolve, second is reject. 
// and with those two args its expected to give me a function for each. your either gonna give
// me a successful response or if theres an error your gonna tell me 
// one of the expectations when working with promises whatever you get back is not going
// to happen immediately. it may take a few milliseconds or so, and so by placing a 
// (setTimeout) it allows us to manage that and mimic what we ould get if we were calling an
// API or something like that.
// in our first (setTimeout) we call resolve and everything inside of here is what is going to run
// if the (sleepygreeting) promise is successful.
// in (2000) milliseconds its going to resolve in turn sending the message ('Hello...'), if successful
// if not, then this is where we create what happens in that case
// we return an (Error) and error takes a function.
// our promise is finished.
// we call our function * common convention is to place in multiple lines *
// the promise expects us to use the (.then) keyword when we call our (sleepyGreeting)
// it writes as it reads, call (sleepyGreeting) (then) then, access the data 
// which in this case, we are simply console logging it
// (then) is mapped to (resolve) and so (catch) is mapped to (reject)
// (catch) attempts to catch the (Error), so we (console.error(err)) not console log
// (err) and (data) are reserved words.
// if we cant pass our (resolve), (reject) gets passed by default
//
// * i can sort of see how we can use page transitions here for css styling *

// let sleepyGreeting = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         resolve('Hello...')
//     }, 2000);
//     setTimeout(()=> {
//         reject(Error('Too sleepy...'))
//     }, 2000);
// });
// sleepyGreeting
//     .then(data =>{
//         console.log(data);
//     })
//     .catch(err =>{
//         console.error(err)
//     });


// #35
// we are creating a promise inside (postPromise) but we set it equal to fetch()
// and we can do that because there is a built in promise inside ( fetch() )
// meaning when we call fetch we are getting a promise back.
// the point of working with promises is to implement asychronous behavior
// meaning you want to call this API without stopping the entire communication pattern
// and the data flow for the rest of your app.
// leveraging promises to contact outside api 

// const smartyPromise = fetch('https://api.dailysmarty.com/posts');
// smartyPromise
//     .then(data => data.json())
//     .then(data => {
//         data.posts.forEach((el) => {
//             console.log(el.title);
//         })
//     })
//     .catch((err) => {
//         console.log(err)
//     });


// #36
// what we are trying to mimic is the process that you might do when building an app
// where you want to render out a greeting to a user, but once they log in you also
// want to update their account and let the system know their logged in. so both need
// to run every time a user logs in and because of that, it makes sense to treat
// them the same
// we can directly attach the (then) method because (Promise.all) returns a promise itself
// (then) returns our promises which are in an array so we are able to use our (forEach)
// looping method to individually return our promises

// const greet = new Promise((resolve, reject) => {
//     resolve('hi there.');
//     reject('oops');
// });

// const updateAccount = new Promise((resolve, reject) => {
//     resolve('update last login');
//     reject('error updating');
// });

// const longActivities = Promise.all([greet, updateAccount]);
// longActivities.then(res => {
//     res.forEach((el) => {
//         console.log(el);
//     })
// });

// #37
// (async) functions can contain zero or more await expressions. (await) expressions make promise 
// returning functions behave as though theyre synchronous by suspending execution until the 
// reurned promise is fulfilled or rejected
// the resolved value of the promise is treated as the return value of the (await) expression
// (const returnedLogin = await login();) this is going to call the login function then its going to,
// because it works with the promise by prepending await, its going to say- i dont want anything else
// to occur unti this process has completed.
// once completed, store whatever is getting returned into this (returnedLogin). in this case, it returns
// our string, but in a real world example, it would return the user credentials.
// our async function dictates how our processes occur. after 2 seconds, login(), 2 seconds after that
// update()

// const login = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('user logged in')
//         }, 2000);
//     });
// }
// const update = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('update last login')
//         }, 2000);
//     });
// }
// async function longActivities() {
//     const returnedLogin = await login();
//     console.log(returnedLogin);

//     const returnedUpdate = await update();
//     console.log(returnedUpdate);
// }
// longActivities();


// #38
// combining async/await with closures to ensure all processes have run
// (longActivities(login(), update()); )

// const login = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('logged in')
//         }, 4000);
//     });
// }
// const update = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('update')
//         }, 2000);
//     });
// }
// async function longActivities(login, update){
//     const returnedLogin = await login;
//     console.log(returnedLogin);

//     const returnedUpdate = await update;
//     console.log(returnedUpdate);
// }
// longActivities(login(), update());




