// var can be declared more that once
// var in hoisted (can be accessed before declaration as undefined)
// var is function scoped, but let and const are block scoped

// var num;
// console.log(num);

// var num = 132;

// var x;
let x = 1;
if (true) {
  // var x = 2;
  let x = 2;
}

console.log(x);
