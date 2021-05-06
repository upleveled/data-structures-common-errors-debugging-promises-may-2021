// undefined
// null

// bigint
// symbol

// String

const myString = `this is
a long
paragraph`;

const myUppercaseString = myString.toUpperCase();
// console.log(myUppercaseString);
// console.log(myString);

// Boolean

const myBool = 1 != 2 && 5 == '5';

// console.log(myBool);

// number

const myNumber2 = 0.1 + 0.2;
const myNumber = 9007199254740991n + 2n;

// console.log(myNumber);

// console.log(null == undefined)  true;
// console.log(null === undefined)  false;

const myNumber4 = 123;

// console.log(String(myNumber4));
// console.log(myNumber4);

// Array

// const myArray = [
//   () => {
//     console.log('i am inside');
//     return 'hello';
//   },
//   12,
//   'hi',
//   {},
// ];

const myArray = [1, 2, 3];

// console.log(myArray);
// myArray.push(4);
const myNewArray = myArray.concat(4);

// console.log(myArray);

// console.log('new', myNewArray);

// object

const myObject = { num1: 1, num2: 2, num3: 3 };

const myKey = 'num1';

// console.log(myObject);

const myNewObject = { ...myObject, myList: [...myArray] };

// console.log(myObject.num1 === myNewObject.num1);
// console.log('new object', myNewObject);

// Function

function myFunction() {
  console.log('inside', 123);
  return 123;
}

const myFunction2 = () => {
  // calculations

  const response = 'calculations';
  return response;
};

const myFunctionReturn = myFunction();

// console.log('outside', myFunctionReturn);
