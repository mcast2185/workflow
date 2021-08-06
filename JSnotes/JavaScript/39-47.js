const { toInteger } = require("lodash")
const _ = require("lodash")
const ver = _.VERSION


// 39
// try catch wont tell us where the error occured if we wrap the whole process together, 
// so instead we run separate try catch's for each promise.
// this helps us understand where the issue is when running multiple promises in our async function
// to prevent all promises from running we would wrap the async functions block with 
// a try catch, that is if we need one promise to resolve in order to chain with the next

// async function queryApi() {
//     try {
//         const postPromise = fetch('https://api.dailysmarty.com/posts');
//         const posts = await postPromise.then(res => res.json());
//         console.log(posts)
//     } catch (err){
//         console.log(err)
//         console.log('Daily smarty Error')
//     }
//     try {
//         const reposPromise = fetch('https://api.github.com/users/jordanhudgens/repos');
//         const repos = await reposPromise.then(res => res.json());
//         console.log(repos);
//     } catch (err){
//         console.log(err)
//         console.log('Github Error')
//     }

// };
// queryApi();


// #40
// the first example is my solution to the weighted lottery
// second is his with a bit of my twist as well
// const weights = {
//     win: 1,
//     draw: 2,
//     loss: 7
// }
// function lottery(x){
//     let list = []
//     let keys = Object.keys(x)
//     keys.forEach((key) => {
//         if ( key == keys[0]){
//             list.push(key)
//         } else if (key == keys[1]){
//             for (i =0; i< x[key]; i++){
//                 list.push(key);
//             } 
//         } else if (key == keys[2]){
//             for (i=0; i< x[key]; i++){
//                 list.push(key);
//             }
//         }
//     })
//     return list[Math.floor(Math.random() * list.length)]
// }
// console.log(lottery(weights));

// const lot = (weights) => {
//     let currentWeight = [];
//     Object.keys(weights).forEach((key) => {
//         for (i=0; i< weights[key]; i++){
//             currentWeight.push(key)
//         };
//     });
//     return currentWeight[Math.floor(Math.random() * currentWeight.length)];
// }
// console.log(lot(weights));


// #41
// using lodash to iterate and filter through collections
// here we learned:
// ( _.filter(), _.keyBy(), _.reduce(), _.times(), _.random() )
//
// const players = [
//     { name: 'Bregman, A',  battingAverage: 0.284 },
//     { name: 'Altuve, J',   battingAverage: 0.346 },
//     { name: 'Springer, G', battingAverage: 0.283 },
//     { name: 'Gurriel, Y',  battingAverage: 0.299 },
//     { name: 'Gonzalez, M', battingAverage: 0.303 }
// ];
// const over300 = _.filter(players, player => {
//     return player.battingAverage > 0.300;
// });
// console.log(over300);

// const roster = [
//     { position: '3B', name: 'Bregman, A' },
//     { position: '2B', name: 'Altuve, J' },
//     { position: 'CF', name: 'Springer, G' },
//     { position: '1B', name: 'Gurriel, Y' },
//     { position: 'LF', name: 'Gonzalez, M' }
// ];
// const positions = _.keyBy(roster, 'position');
// const newPost = positions['2B']
// console.log(positions['2B'])
// console.log(newPost)

// const homerunStats = [
//     { name: 'Bregman, A',  hr: 19 },
//     { name: 'Altuve, J',   hr: 24 },
//     { name: 'Springer, G', hr: 34 },
//     { name: 'Gurriel, Y',  hr: 18 },
//     { name: 'Gonzalez, M', hr: 23 }
// ];
// const sum = _.reduce(homerunStats, (a,b) => {
//       return a + b.hr;
// }, 0)
// console.log(sum)

// const links = [
    // "https://google.com",
    // "https://devcamp.com",
    // "https://airbnb.com"
// ];

// const Post = _.reduce(links, (a,b) => {
//       return `<a href='${b}'>${b}</a>` + a;
// }, '')
// console.log(Post)
  
// const rand = () => {
//       return _.random(1, 100);
// }
// const randy = _.times(5, rand);
// console.log(randy)


// #42
// stops the program where the debugger is placed and helps you see what has
// occurred up to that point, or , what happens immediately after pressing play
//
// const webLinks = [
//     "https://google.com",
//     "https://devcamp.com",
//     "https://airbnb.com"
// ];
// const wLinks = _.reduce(webLinks, (a,b) => {
//     debugger;
//     return `<a href='${b}'>${b}</a>` + a;
// }, '');
// console.log(wLinks);


// #43
// building out an E-commerce tax edit
//
// const price = (gross, tax) => {
//     try {
//         if (tax < 1){
//             return toInteger(gross) + tax;
//         } else if (tax > 1){
//             return toInteger(gross) + (tax * 0.01);
//         }
//     } catch (err){
//         return `${err} occurred during process.`
//     }
// };
// console.log(price(3.99, .89))


// #44
// constructor is where we pass in a default message in case dont specify ourselves
// ...params is a rest operator which takes up any other amount of params
// super() calls the error class, inheriting from it whatever we pass
// this.msg = msg creates an instance for whatever msg we do pass
// for catch, we use throw and create a new DevErr and pass in our actual error
// passing the arg for catch gives us a typeError, otherwise the second param can be whatever msg
//
// class DevErr extends Error{
//     constructor(msg='error', ...params){
//         super(...params);
//         this.msg = msg;
//     }
// }
// function devSample(func){
//     return func();
// }
// try {
//     console.log(devSample('oops'));
// } catch (e){
//     throw new DevErr('DevErr', e);
// }

// widget = () => {
//     return '<div> hi there </div>';
// }


// #45
// the common syntax being used with the class made and used for errors
// is the constructor  with the params as well as the super function passing params
// then the use of the (this) instance.
// in this example we get our error sent back with a string interpolation pulling 
// the request status of the api that triggers the error, giving us the exact moment
// so to map the location of our error
// super params gives us access to all the elements inside the Error class, which is
// an extension of the class ApiError
// throw new ApiError(), arg one takes up the name of the error we want to pass
// which is the class above. arg two is the data we want returned for our error
//
// class ApiError extends Error {
//     constructor(msg= 'An api error occurred',...params){
//         super(...params);
//         this.msg = msg;
//     }
// }
// var request = new XMLHttpRequest();

// request.open('GET', 'http://api.dailysmarty.com/posts', true);

// request.onload = function(){
//     if (request.status >= 200 && request.status < 400){
//         var data = JSON.parse(request.responseText);
//         console.log(data);
//     } else {
//         throw new ApiError('ApiError',`An API error occurred with a status code of ${request.status}`)
//     }
// };
// request.send();


// #46
// tips and tricks to building new features as a developer
// 
// exchange your idea of a websites requirement for the approach of a users story
// meaning, user enters the site, user sees button to create/edit posts, user sees a login
// and so on. 
// we know that a site and all its components can be intricate and thought out
// however, when approaching the development, take a base case strategy.
// this means, drill down a feature to its most basic components. 
// create a simple form page, from there only add in the ability to create a post with a title. 
// other features can be added in the future.
// after a user has the ability to create a post with a title i can circle back and add each of 
// the other components one at a time. taking this approach makes the entire process less intimidating 
// * move fast and break things *
// a common theme with great developers is that they dont just look at a program or
// feature and start listing models and relationships, they focus on the messages
// that will be sent from class to class. this is a completely diff way to think about the actual 
// behavior of the classes.
// * you dont send messages because you have objects, you have objects because you send messages *


// #47
// basic guide to importing and exporting code in JS with es6 syntax the way it works is, any time 
// that you want to export some variable/function/class from one file to another you have to explicitly 
// say that you want to export this value. then on the other side, importing on separate file



// const newPromise = () => {
//     try {
//         return new Promise((resolve, reject) => {
//             let num = 18;
//             if (num < 17){
//                 return resolve('it works, below')
//             } else {
//                 return reject('nope')
//             }
//         })
//     } catch (err){
//         throw err;
//     }
// }
// newPromise().then(data => console.log(data));


// const NuProm = new Promise((resolve, reject) => {
//     let num = 14;
//     if (num < 17){
//         return resolve('it works, below')
//     } else {
//         throw reject('off')
//     }
// })
// NuProm
//     .then(data => console.log(data));

// const samplePromise = new Promise((resolve, reject) => {
//     setInterval(() => {
//         let content = 17;
//         if (content > 10){
//             return resolve('content is above threshold');
//         } else {
//             return reject(`Error, content was at: ${content}`);
//         };
//     }, 2000);
// });

// const promiseTwo = new Promise((resolve, reject) => {
//     setInterval(() => {
//         let cont = 15;
//         if (cont > 16){
//             return resolve('proceed');
//         } else {
//             return reject(`Error, ${cont} is just below`);
//         }
//     }, 4000);
// });

// async function newFunc(samplePromise, promiseTwo){
//     const newSample = await samplePromise;
//     console.log(newSample);
//     const newTwo = await promiseTwo;
//     console.log(newTwo);
// }
// newFunc(samplePromise, promiseTwo);

// class NewError extends Error{
//     constructor(msg= "Error here", ...params){
//         super(...params);
//         this.msg = msg;
//     }
// };

// const hov = () => {
//     let one = 1;
//     if (one == 1){
//         return 'we are good here';
//     } else {
//         throw new NewError(this.msg, 'error in msg')
//     }
// }

// console.log(hov());
