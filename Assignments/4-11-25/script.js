// Allow only 3 attempts to enter correct password
// If user gets it right early, stop. If not → “Account locked”


// let attempt = 0;
// let sahiPassword = "somesh";
// let password = prompt('apna password batana');
// attempt++;

// while(attempt < 3 && sahiPassword !== password){
//     password = prompt('apna password batana');
//     attempt++;
// }

// if (attempt === 3 && sahiPassword !== password) {
//     console.error("Account is Locked")
// }
// else{
//     console.log("Logged in successfully")
// }\

// <------------------>
// Ask user for words until they type “stop”. Count how many times they typed “yes”
// Loop until "stop" is typed. Count "yes".

// let word = prompt("word bolo");
// let counter = 0 ; 

// while(word !== "stop"){
//     if(word === "yes") counter++;
//     word = prompt("word bolo");
// }

// console.log(`Total no of Yes count: ${counter}`);

// <------------------>

// for (let i = 1; i < 51; i++) {
//     if (i % 7 === 0) {
//         console.log(i);
//     }
// }

// <------------------>
// Sum of all odd numbers from 1 to 30
// Add only odd numbers. Print final sum.

// let countSum = 0;
// for (let i = 1; i < 31; i++){
//     if(i % 2 !== 0){
//         console.log(i)
//         countSum+=i 
//     }
// }
// console.log(countSum);

// <------------------>
// Keep asking number until user enters an even number
// Use while loop. Stop only if input is even

// let divi = +prompt("Give me a even number");

// while (divi % 2 !== 0) {
//     divi = +prompt("Give me a even number");
// }

// <------------------>
// Print only first 3 odd numbers from 1 to 20
// Use loop. Stop with break after 3 odd prints.

// let counter = 0;
// for (let i = 1; i < 21; i++) {
//     if (counter === 3) break
//         if (i % 2 !== 0) {
//             console.log(i)
//             counter++;
//         }

// }

// <------------------>

//  Ask user 5 numbers. Count how many are positive
// Use loop + condition + counter.

// let counter = 0;

// for (let i = 0; i < 5; i++) {
//     let num = +prompt("Give me numbers")
//     if (num > 0) counter++
// }
// console.log(counter)


// Write a Program to reverse a string in JavaScript.

// function reverse(str){

//    return str.split("").reverse().join("")

// }
// console.log(reverse("hello"))


//  Write a Program to check whether a string is a palindrome string.

// function palindrome(str){
//     const reserved = str.split("").reverse().join("");
//     return str === reserved
// }

// console.log(palindrome("madam")) 

// Find the largest number in an array in JavaScript.

// arr = [3, 5, 7, 2, 8];

// function largestNum(arr){

//     console.log(arr)
//     let largest = arr[0];

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > largest){
//             largest = arr[i];
//         }
//     }
//    return largest;
// }

// console.log(largestNum(arr))

// function findLargest(arr){
//     console.log(Math.max(...arr))

// }
// findLargest([3, 5, 7, 2, 8]);

// How to remove first element from an array

// let arr = [5, 6, 7];
// arr = arr.splice(1)
// console.log(arr);

// Write a Program to find a sum of an array?

// function sumArray(arr){
//     let sum = 0;
//     for(i=0; i < arr.length; i++){
//         sum = sum + arr[i];
//         console.log(arr.length)
//     }
//     return sum;

// }
// console.log(sumArray([15, 6, 10, 2])) // Output: 33

// function isPrime(num){
// if(num <=1 || num <=2 )return false;
// else{
//     if(num % 2 == 0 ) return false;
//     else return true;
// }
// }
// console.log(isPrime(0)) // true

// Reverse  a string

// const st =  "javascript";

// console.log(st.split("").reverse().join(""))

// palindrome

// const str = "madam";

// function Palindome(str) {
//     const reserve = str.split("").reverse().join("");
//     return str === reserve;
// }
// console.log(Palindome(str)); 

// Count vowels in a string

// function vow(str){
//     const vows = "aeiouAEIOU";
//     let count = 0;
//     for(let char of str){
//         if(vows.includes(char)){
//             count++
//         }
//     }
//     console.log(`Total vowels in ${str} is ${count}`)
// }

// vow('Hello Javascript')

// Count consonants in a string

// function conso(str){
//     const vowels = "aeiouAEIOU";
//     let count = 0;
//     for(let char of str){
//         if(!vowels.includes(char) && char !== " "){
//             console.log(char)
//             count++
//         }

//     }
//     console.log(`Total consonants in ${str} is ${count}`)
// }
// conso("Hello Javascript")


// Find the length of a string without using
// function lengths(str) {
//     let length = 0
//     for (const vari of str) {
//         length += 1
//     }
//     console.log(length)

// }
// lengths("javacsript")

// console.log(null == undefined);





