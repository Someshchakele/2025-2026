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


