
//             * reducing algorithm *               \\

// let num = [2,3,46,5,6,7]

// let user = function (numList) {
//     let total = 0
//     for(let i =0; i < numList.length; i++){
//         total+= numList[i];
//     }
//     return total / numList.length
// };
// console.log(user(num))
// // or
// const reduceFunc = (x) => x.reduce( (a, b) => a + b) / x.length;
// console.log(reduceFunc(num))



//----


//           * creating a batting average algorithm *   \\

// function batAvg(hits, atBats){
//     hits = 100;
//     atBats = 300;
//     return {
//         currentAvg: function(){
//             return (hits/atBats);
//         },
//         newAvg: function(hit, bat){
//             hits += hit;
//             atBats += bat;   
//         }  
//     };
// }; 
// let altuve = batAvg();
// console.log(altuve.currentAvg());
// altuve.newAvg(0,20);
// console.log(altuve.currentAvg());




//-----




//              * forming closures *                \\

// function adder(n){
//     return function(y){
//         return (n * y);
//     }
// };

// let addThree = adder(6);
// let addFour = adder(9);
// console.log(addThree(3));
// console.log(addFour(5));

// const content = (x) => (y) => (x * y);
// let addOne = content(3);
// let addTwo = content(5);
// console.log(addOne(3));
// console.log(addTwo(5));




//-----




//            * algorithm for finding median of an array *         \\

// const arr = [0,1,1,2,5,5,6,12]
// function median(list){
//     organized = list.sort((a,b) => a - b);
//     if ( organized.length % 2 == 1 ){
//         let x = Math.floor(organized.length/ 2);
//         return organized[x];
//     } if ( organized.length % 2 == 0 ){
//         let y = (organized[organized.length/2]) + (organized[(organized.length/2)-1]);
//         let idx = y / 2;
//         return idx;
//     } 
// };
// console.log(median(arr));



//------



//              * returning the greatest possible number *          \\

// function never(x){
//     let comp = 0;
//     for (i = 0; i in x; i++){
//         if (comp < x[i]){
//             comp = x[i];
//             continue;
//         } if (comp > x[i]){
//             comp = comp
//             continue;
//         };    
//     };
//     return comp;
// }
// function nope(x){typeof(x) == 'object' ? console.log(Math.max(...x)) : console.log(x)};

// nope([12,3,5,6,7]);
// console.log(never([12,3,5,6,7]));



//-----



//              * factorial algorithm *             \\

// function factorial(x) {
//     if (x === 0){
//         return 1
//     } else {
//         return factorial(x -1) * x
//     }
// };
// console.log(factorial(5));



//-----




//              * creating matrix *             \\

// function matrices(){
//     var matrix = [];
//     for(var i=0; i<5; i++) {
//         console.log(matrix[i] = Array(5));
//     }
// }
// matrices()



//-----



//              * function that builds on tax *         \\

// function sales(net, tax){
//     if (tax > 1){
//         return Math.floor(net) + parseFloat('.' + String(tax))
//     } else {
//         return Math.floor(net) + tax
//     }
// };
// console.log(sales(3.99, .76));



//------




//              * manual exponent function *                    \\

// function expo(x,y){
//     let num = []
//     for (let i = 0; i < y; i++){
//         num.push(x);
//     }
//     return num.reduce((a,b) => a * b);
// }
// console.log(expo(3,3));



//-----




//             * creating phone number *        \\

// function createPhoneNumber(numbers){
//     return `(${n.slice(0,3).join('')}) ${n.slice(3,6).join('')}-${n.slice(6,10).join('')}`)
//   }
//   console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));



//-----




//              * fibonacci algorithm *         \\

// function fibonacci(num){
//     var a = 1, b = 0, temp;
//     while (num >= 0){
//         temp = a;
//         a = a + b;
//         b = temp;
//         num--;
//     }
//     return b;
// }
// console.log(fibonacci(10));