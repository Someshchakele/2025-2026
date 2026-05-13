// --------------------Reverse a string using for loop -------------------------------

// let str = "javascript";
// // console.log(str.length);
// for ( let i = str.length-1 ; i >= 0; i--) {
//   console.log(str[i],[i]);
// }

function reverseString(str) {
  
  let revStr = "";
  const strLength = str.length;

  for (let i = strLength-1; i>= 0; i--) {
    revStr += str[i];
  }
  return revStr;
}

console.log(reverseString("JavaScript"));