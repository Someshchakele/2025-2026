// var a = 10;
// console.log(a);
// function fn(){
//     console.log(a);
//     var a = 20;
//     a++
//      console.log(a);
//      if(a){
//         var a = 30;
//         a++;
//         console.log(a);
//      }
//      console.log(a);
// }
// fn();
// console.log(a);

// 10
// undefined
// 21
// 31
// 31
// 10

// --------------------------------------------------------------------------------------------------------

// var obj = {
//    a: "hello world",
//    b: 42
// };

// var b = "a";

// console.log(obj[b]);  // a is assigned to b --> hello world
// console.log(obj['b']);  // 42

// // o/p=> hello world
//          42

// -----------------------------------------------------------------------------------------------------------

// console.log(1);

// setTimeout(()=>{
//    console.log(2);
// },1000)

// setTimeout(()=>{
//    console.log(3);
// },0)

// console.log(4);

// // 1
// // 4
// // 3
// // 2

// // console.log(1) and console.log(4) run first because they are synchronous → output: 1 4
// // Both setTimeout callbacks go to Web APIs, not executed immediately
// // After sync code, 0ms timeout (console.log(3)) executes first via event loop
// // After ~1 second, console.log(2) runs

// ---------------------------------------------------------------------------------------------------------------

// function print(){
//    setTimeout(()=>{
//    console.log(name);
// },1000);

//  var name = "Somesh"

// }

// print()

// // Somesh

// // Since var is hoisted var is declared then setTimeoutwill go in MacroTask for 1 ms till then name is assigned after completion of time it will print Somesh

// -------------------------------------------------------------------------------------------------------------

// var num1;

// num1 = 10;

// function print(){
//     var num1;  //num is recreated and variabe is hoisted so undefined
//     if(num1>20){
//         num1 = 50;
//     }
//     console.log(num1);
// }

// print();

// ----------------------------------------------------------------------------------------------------------------

// function isAnagram(first, second) {
//   var a = first.toLowerCase();
//   var b = second.toLowerCase();

//   a = a.split("").sort().join("");  //a will split() into array -> then alphabetekely sort() --> and then convert into string using join()
//   b = b.split("").sort().join("");

//   return a === b  // amry === amry
// }
// console.log(isAnagram("Mary", "Army")); // true
// console.log(isAnagram("Mary", "Aryam")); // false

// --------------------------------------------------------------------------------------------------------------

// (function() {

//     try{
//         throw new Error();
//     }
//     catch (x){
//         var x = 1, y = 2;
//         console.log(x);
//     }
//     console.log(x);
//     console.log(y);
// })();

// 1
// undefined
// 2

// ---------------------------------------------------------------------------------------------------------------
