function sum(a, b) {
  const result = a + b;
  return result;
}

// console.log(result); result is out of scope

sum(1, 2); // ReferenceError : sum is not defined

console.log('hi');
