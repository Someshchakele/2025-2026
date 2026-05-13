// ------------Remove Duplicate from set & Filter -------------

let arr = ['a','b', 'a', 'c', 'd','e','e','b'];

let dupArr1 = () =>[...new Set(arr)];  //new Set remove duplicate & ... convert into arr 

let dupArr2 = () => {
  return arr.filter(function (item, pos){
    return arr.indexOf(item) == pos;
  })
}

// Both the function gives same result remove duplicates from array