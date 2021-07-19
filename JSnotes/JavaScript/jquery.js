// use of map() with jquery

// const { each } = require("jquery");
// const { selectors } = require("sizzle");

// $(document).ready(function(){
//     $('button').click(function(){
//         var array = ["Welcome","to","the","javaTpoint.com"];
//         var newArray = jQuery.map(array,function(val){
//             return val + "J";
//         })
//         document.getElementById('p1').innerHTML                 =               "
//         <b> the new array is: </b>" + JSON.stringify(newArray);
//     });
// });


// use of first() method, 
// $(document).ready(function(){
//     $('button').click(function(){
//         $("p").first().css('background-color', 'lightblue');
//     });
// });
// use of last(), similar to -first()
// $(document).ready(function(){
//     $('button').click(function(){
//         $('div span').last().css('background-color', 'lightblue')
//     });
// });
// adds event handlers,. perferred method
// $(document).ready(function(){
//     $('h3').on("click", function(){
//         alert('you just clicked');
//     })
// });
// can pass a funtion to all tags under the same scope
// $(document).ready(function(){
//     $('button').click(function(){
//         $('span').siblings().css({ "color": "red", "border": "2px dashed blue"})
//     })
// })
// runs a function for each element in DOM that matches whats passed
// function fun(){
//     $(document).ready(function(){
//         $('i').each(function(){
//             alert($(this).text())
//         });
//     });
// };
// left retreives data, arg is optional, if blank,returns all data in the form of an object
// right, must take both args, to know what to attach and how much
// $(selector).data(name) ||  $(selector).data(name, value)

// display values
// function displayVals(){
//     var singleVal = $('#single').val();
//     $("p").html("<b>Value:</b>" + singleVal);
// }
// $("select").change(displayVals);
// displayVals();


// triggers events, very useful!!!
// $(document).ready(function(){
//     $('p').click(function(){
//         $('#tf').trigger('select');
//     });
//     $('#tf').select(function(){
//         $("#tf").css({"backgroundColor": "yellow", "fontSize": "25px"});  
//         $("body").css({"backgroundColor": "lightgreen", "fontSize": "25px"});  
//   });  
// });    

// changes element
// $("#p1").replaceWith("<p> This is a paragraph element </p>")

// custom fade feature
// $(document).ready(function(){  
//     $("button").click(function(){  
//         $("#div1").fadeTo("slow", 0.3); 
//     });  
// }); 
// toggles by fading
// $(document).ready(function(){  
//     $("button").click(function(){  
//         $("#div1").fadeToggle();  
//         $("#div2").fadeToggle("slow");  
//         $("#div3").fadeToggle(3000);  
//     });  
// });  
    

// each() runs a function that matches the parsed elements, ( function(index,element) ), having multiple returns
// hasClass() returns true or false
// detach() removes all selected elements, texts, and childNodes, saves a copy of removed data
// empty() removes all content
// toggle() used with hide(), and show() works as the opposite for each
// on() this method adds event handlers and is a preferred method
// sibilings() targetsall tags in same scope, takes up the argument (filter) to exclude
// is()/not() returns who is or isnt in scope
// queryDelay()
// removeAttr() removes elements attribute
// extend() merges two objects
// replaceWith() changes one element to another with value submitted
// $.merge() merges two arrays into one
// add()/RemoveData() attach or get data / removes datat
// delegate() adds multiple event handlers
// parents() applies css to everything above it 
// parseJSON() converts json data
// map() translates items in obj/arr to a new array of items, it applies a function to each item and maps
// -- the results into a new array. returns array of values (null, undefined) used for removing items
// removeProp() removes selected css properties of element
// animate() creates custom animations $("div").animate({left: '450px'}) 







