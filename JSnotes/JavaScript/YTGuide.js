// (.innerHTML) grabs the html written from the class or id picked and replaces 
// it with the string we set the function to. 
// (.onclick) doesnt need an argument when used with (.getElementById)
// the bottom portion (document.getElementById('button').style.display) is only 
// used here to get rid of the button after the click.
// we can perform a function expression and make it equal to a variable

// document.getElementById('button').onclick = function () {
//     document.getElementById('confirm').innerHTML = "Order placed, check email for your receipt.";
//     document.getElementById('button').style.display = "none"
// }


// here, whenever we pass the code we will have to insert a value for (prompt)
// whatever that value is, and when its established, (alert) will call the value

// var username = prompt();
// alert(username);


// (new Date()) gives us the time at the instance its called, and in this case, 
// since its assigned to the var (presentTime) each time we call our var, we receive
// the current time.
// (new Date()) will always need the attribute "new"
// the second example is made into a date object however we see the values passed
// give us jan 2021, the second value simply wraps around after 11(dec) because
// our list of months begins with 0
// if we pass in (Date.now()) as the (Date()) arg we get how many miliseconds passed


// var presentTime = new Date();
// console.log(presentTime)

// {
//     let presentTime = new Date();
//     console.log(presentTime)   
// }
// {
//     const newD = Date.now();
//     console.log(newD)
// }

// below we have a loop that increments as long as its a lower value
// than what we passed, and it returns our operator as a value, 
// however, 
// its set within the parameters of two (date.now()) methods, which is the 
// usecase were looking to run, if we subtract our two dates and console
// the value JS returns the amount of time taken to run our loop all the way through
// we also see that we can perform string interpolation as well
// (`${}`) is the syntax, not regular quotes

// {
//     let start = Date.now();

//     let x = 0;
//     for (let i = 0; i < 100000; i++) {
//         x += i;
//     }

//     let end = Date.now();

//     let total = end - start;
//     console.log(`our total is: ${total}`)
//     console.log(`${start}` + `${end}`)
//     console.log(x)
// }

// here we see an example of placing our function (pow) inside an array.
// as is, the value of (cool) is an array, however by accessing its nested value
// we can then pass our two values that the function takes up
// 
// with our var (mathfunc) we see that, like our previous example, we can 
// access our nested key/value by attributing the key, which represents its value
// and from there we can pass the arguments (pow) requires
//
// the third example leverages a callback function (function content(callback)). 
// here we pass two arguments to our anonymous argument we set as (callback).
// a callback is a function thats going to be executed inside a function that
// takes it as a parameter.
//
// for our last example, we dont return a value, but instead we return a function
// so by (console.log(returnfunc())) we are actually calling the function of
// (pow) since thats our return value. so if ( returnfunc() == pow ) we still need 
// to add to it its own, separate function argument bubble
// ( returnfunc()(3,5) )

// {
//     function pow(x, y){
//         let total = 1;
//         for (let i = 0; i < y; i++){
//             total *= x;
//         }
//         return total;
//     }
//     let cool = [pow];
    // console.log(cool[0](3,5))
    // let mathfunc = {
    //     power : pow
    // };
    // console.log(mathfunc.power(3,5))
    // function content(callback){
    //     return callback(3,5);
    // }
    // console.log(content(pow));
    // function returnfunc(){
    //     return pow;
    // }
    // console.log(returnfunc()(3,5));
// }

//          * function memorization and algorithm optimization *
// this is a very insightful lesson. as we exercise different function arguments
// and receive unique values along the way, by creating an empty array that sits outside
// of the lexical environment, we are able to maintain state between numerous function calls
// meaning, we are saving values long after arguments have been passed.
// this seems to be extremely applicable given real world use. especially when
// we need that sort of memory in more difficult/ longer methods and functions
//
// in his method of extracting the unique values, he changed the array to an object
// he then created a new variable that formed a string with the arguments used to 
// pass through the algorithim. 
// and like in python, he added to the dictionary/object new key/values
// (pow.calc[newstring] = total) passing each string from the variable (x+'^'+y) as the key
// (pow.calc[newstring]) and each (total) as the key. to ensure we are not passing in a repeated
// key/value, he leverages a conditional statement to catch the reoccurence 
// what we are left with is a perfect key/value object that represents only
// the unique values along with integers used to reach them. 
//
// *switch back to array* at the bottom is my method to finding the unique values in (pow.calc) while also
// returning every value from (pow.calc) in order to see what values repeated
// as well as how many values were left out. i used the object set to store
// the data, which inherently only takes up unique values and looped through the 
// (pow.calc) and pulled values by index.

// {
//     pow.calc = {};
//     function pow(x, y){
//         let newstring = x +'^'+ y;

//         if (newstring in pow.calc){
            // console.log('found');
        //     return pow.calc[newstring]
        // }

        // let total = 1;
        // for (let i = 0; i < y; i++){
        //     total *= x;
        // }
        // pow.calc.push(total);
    //     pow.calc[newstring] = total;
    //     console.log(pow.calc);
    //     return total;
    // }
    // pow(3,5);
    // pow(3,5);
    // pow(4,3);
    // pow(4,4);
    // pow(4,4);
//     var set = new Set();
//     function content(){
//         for (x in pow.calc){
//             console.log(set.add(pow.calc[x]), pow.calc[x])
//         }
//     }
//    content();
// }

// here we have four examples of default parameters in case we only have one
// argument to work with but our function requires 2.

// {
//     function pow(x, y= 2){
//         if (y == undefined){y = 2};
//         typeof y == 'undefined' ? 2 : y;
//         var y = y || 2;
//         let total = 1;
//         for (let i = 0; i < y; i++){
//             total *= x;
//         }
//         return total;
//     }
//     console.log(pow(2));
//     console.log(pow(2,3,4,5));
// }

// below we look at how we can work around rest parameters.
// the first option is leaving it as is, the function will only run the beginning
// two, which is what we need. the second would be creating an ellipses followed by an
// empty variable, which would take up the remaining arguments as an array
//
// the next example, we have an instance where we are dealing with various arguments again
// however this time we have to work with all them.
//      * side note: i noticed that for all his algorithims he exhausts the
// arguments by running a variation of this loop ( for(i= 0; i < n.length; i++) ) 
// we should make that a standard *
// we are extracting the largest possible number by using his algorithms loop
// to ensure we work through all arguments, then setting a conditional 
// ( if (n[i] > large) ) to compare the larger values, in which if the looped
// value is greater we re assign are variable (large) to the value of the nested
// value.

// {
//     function pow(x, y, ...n){
//         console.log(n);
//         let total = 1;
//         for (let i = 0; i < y; i++){
//             total *= x;
//         }
//         return total;
//     }
//     console.log(pow(2,3,4,5));
// }

// {
//     function largest(x, ...n){
//         var large = x;
//         for (var i = 0; i < n.length; i++){
//             if (n[i] > large){
//                 large = n[i];
//             }
//         }
//         return large;
//     }
//     console.log(largest(2,3,4,5,7,8));
// }

// our final parameter is implicit parameters, unseen parameters, 
// like (this) and (arguments). (arguments) if passed, returns our argument data
// in the form of an array, not recommended for use as its not as capable as
// a true array.

//          * next video up: JavaScript Programming Tutorial 59. diving into (this)*
// (this) skips the binding of the function because it was truly last called be the 
// variable (me)

// let me = {
//     name: 'Rick',
//     outputMe: function(){
//         console.log(this);
//     }
// };
// me.outputMe();


// function content(input, input2){
//     console.log(input, input2);
//     console.log(this);
// }
// content.call("You think the darkness is your ally", [5, 10]);




// const makeRequest = (location) => {
//     return new Promise((resolve, reject) => {
//         console.log(`making request to ${location}`)
//         if (location === 'Google') {
//             resolve('Google says hi')
//         } else {
//             reject('we can only talk to Google')
//         }
//     })
// }
// const processRequest = (response) => {
//     return new Promise((resolve, reject) => {
//         console.log('processing response')
//         resolve(`extra info + ${response}`)
//     })
// }
// how this chains is:
// we call the make request function and pass the argument Google
// the function console logs our argument before anything
// since it meets the functions requirements of Google we follow the then method
// the method first console logs then returns the second promise in order to chain (then), which takes our make request resolve answer
// to which we say then process that response, instead of just calling it for its console log
// finally, we attach the catch for any errors

// makeRequest('Google').then((response) => {
//     console.log('response received')
//     return processRequest(response)
// }).then((processedResponse) => {
//     console.log(processedResponse)
// }).catch((err) => {
//     console.log(err)
// })
// below is the same asynchronous result except we leverage async which makes it easier to follow
// response is the total of make request after its ran, which consoles once ran
// then we console now that its ran
// next, processed response is the total of processe request after being ran which consoles once ran
// then we console the processed Response which returns its resolve that takes up the resolve of response
// all this wrapped up in a try catch 
// async function doWork(){
//     try {
//         const response = await makeRequest('Google')
//         console.log('response received')
//         const processedResponse = await processRequest(response)
//         console.log(processedResponse)
//     } catch (err) {
//         console.log(err);
//     }
// }
// doWork();

