// var a = [12, 13, 23, 89, 9];
// var b = a;

// console.log(b.pop());
// console.log(b.push(4, 44));
// console.log(b);

// console.log();
// console.log("FUNCTIONS in JavaScript");

//TODO:  Function declaration:-
// function abcd(name) {
//     console.log(name);
// }
// abcd("Aayush");


// Function expression:-
// var add = function (a, b) {
//     return a + b;
// }
// console.log(add(3, 7));


// TODO: Arrow Function:-
// const multiply = (x, y) => x * y;

// console.log(multiply(9, 9));

// console.log();
// console.log("ARRAYS");

// var arr = [12, 6, 7, 55, 90, 44];
// arr.splice(2, 1);
// console.log(arr);


// var - es5 
// let & const - es6

// function abc() {
//     for (var i = 1; i < 12; i++) {
//         console.log(i);
//     }
//     // console.log(i);
// }
// abc();

//TODO: Execution context is a container where the functions code is executed and it's created whenever a function is called, it contains 3 things, variables, functions and lexical environment.

// console.log();
// console.log("Spread Operator");
// //Spread Operator
// var a = [12, 55, 4, 345, 67, 6];
// var b = [...a];

// console.log(b.pop());
// console.log(b);
// console.log(a);

// setTimeout(function () {
//     console.log("2 seconds");
// }, 2000);

// console.log();

// Function that takes a callback
// function doSomethingAsync(callback) {
//     setTimeout(function () {
//         console.log("Task completed!");
//         callback(); // Invoke the callback function
//     }, 1000);
// }

// TODO: Callback function

// function onTaskComplete() {
//     console.log("Callback executed!");
// }

// Using the function with a callback
// doSomethingAsync(onTaskComplete);
// console.log();
// console.log("// How to delete Object props");

// var a = {
//     name: "Aayush",
//     age: 23
// };
// delete a.age;
// delete a.name;

// console.log(a);

//TODO: Higher Order Function

//That type of function which accepts a function as parameter or return a function or Both.Example:- ForEach method Always takes another function inside it, so for-each is a higher order function.

// TODO: Constructor function
//A function which whenever invoked with "new" keyword, returns an object, if we use "this" keyword inside that function, it returns an object with all of the properties and methods mentioned inside that function with this keyword, such function is called Constructor function.

// function abcd(){
//     this.name =  "aayush";
//     this.age =  23;
// }

// var abcd = new abcd();
// console.log(abcd);

// TODO: Async JavaScript

// var ans = new Promise((res, rej) => {
//     var n = Math.floor(Math.random() * 10);

//     if (n < 5) {
//         return res();
//     } else {
//         return rej();
//     }
// })

// ans.then(function () {
//     console.log("below");
// })
//     .catch(function () {
//         console.log("above");
//     })


// var ans = new Promise(function(res, rej){
//     return res("sabse pehle ghar pee aao");
// })

// var p2 = ans.then(function(data){
//     console.log(data);
//     return new Promise(function(res, rej){
//         return res("gate kholo aur gate lgao");
//     })
// })

// var p3 = p2.then(function(data){
//     console.log(data);
//     return new Promise(function(res, rej){
//         return res("khana pkao aur khana khao");
//     })
// })

// p3.then(function(data){
//     console.log(data);
// })


// async function abcd(){
//     let raw = await fetch('https://randomuser.me/api/')
//     let ans = await raw.json();
//     console.log(ans); 
// }

// abcd();


// TODO: DOM (Document Object Model)

// FIXME: 4 Pillars of DOM

// 1.> Selection of an Element
// 2.> Changing HTML
// 3.> Changing CSS
// 4.> Event Listener


// 1.>
// var a = document.querySelector("h1");
// console.log(a);

// 2.>
// var a = document.querySelector("h1");
// a.innerHTML = "Changed HTML";

// 3.>
// var a = document.querySelector("h1");
// a.style.color = "skyBlue"; 
// a.style.backgroundColor = "black";

// 4.>
var a = document.querySelector("h1");
a.addEventListener("click", function () {
    console.log("hey");

    a.innerHTML = "Mera Bhai hai tum";
    a.style.color = 'yellow';
    a.style.backgroundColor = 'black';
});


