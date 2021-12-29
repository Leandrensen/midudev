let x: number; //* Explicitly declares x as a number type
x = 1;
// x = "one";

let y = 1; //* Implicitly declares y as a number type
// y = "one";

let z; //* Declares z without initializing it
z = 1;
z = "one";

// enums

// Create an enum to represent our scenario by entering the following:

enum ContractStatus {
  Permanent,
  Temp,
  Apprentice,
}

// Now, declare a variable for a new employee named employeeStatus of the type ContractStatus and assign "Temp". Display the result to the console.

let employeeStatus: ContractStatus = ContractStatus.Temp;
console.log(employeeStatus);

// By default, enum values begin with a value of 0, so Permanent is 0,
// Temp is 1, and Apprentice is 2. If you want the values to start with a
// different value, in this case 1, specify that in the enum declaration.
// Make the following edits to have the enum start the values at 1.

enum ContractStatus {
  Permanent = 1,
  Temp,
  Apprentice,
}

// To display the name associated with the enum, we can use the indexer provided. Add the following to the bottom of your code:

console.log(ContractStatus[employeeStatus]);

// Any type

// The any type is the one type that can represent any JavaScript value with no constraints. This can be useful when
// you're expecting a value from a third-party library or user inputs where the value is dynamic because the any
// type will allow you to reassign different types of values. And, as mentioned earlier, using the any type allows
// you to gradually migrate your JavaScript code to use static types in TypeScript.

let randomValue: any = 10;
randomValue = "Mateo"; // OK
randomValue = true; // OK

console.log(randomValue.name); // Logs "undefined" to the console
randomValue(); // Returns "randomValue is not a function" error
randomValue.toUpperCase(); // Returns "randomValue is not a function" error

// While flexible, the any type can cause unexpected errors. To address this, TypeScript introduced the unknown type.

// The unknown type is similar to the any type in that any value is assignable to type unknown. However, you can't
// access any properties of an unknown type, nor can you call or construct them.
let randomValue: unknown = 10;
randomValue = true;
randomValue = "Mateo";

console.log(randomValue.name); // Error: Object is of type unknown
randomValue(); // Error: Object is of type unknown
randomValue.toUpperCase(); // Error: Object is of type unknown

// Union types

// A union type describes a value that can be one of several types. This can be helpful when a value is not under
// your control (for example, values from a library, an API, or user input.)

// The any type can also accept different types, so why would you want to use a union type? The union types
// restrict the assignment of values to the specified types, whereas the any type has no restrictions. Another
// reason is Intellisense support.

// A union type uses the vertical bar or pipe (|) to separate each type. In the following example, multiType
// let multiType: number | boolean;

let multiType: number | boolean;
multiType = 20; //* Valid
multiType = true; //* Valid
multiType = "twenty"; //* Invalid

// Using type guards, you can easily work with a variable of a union type. In this example, the add function
// accepts two values that can be either a number or a string. If both values are number types, it adds them.
// If both are string types, it concatenates them. Otherwise, it raises an error.

function add(x: number | string, y: number | string) {
  if (typeof x === "number" && typeof y === "number") {
    return x + y;
  }

  if (typeof x === "string" && typeof y === "string") {
    return x.concat(y);
  }

  throw new Error("Parameters must be numbers or strings");
}

console.log(add("one", "two")); //* Returns "onetwo"
console.log(add(1, 2)); //* Returns 3
console.log(add("one", 2)); //* Returns error

// Intersection types

// Intersection types are closely related to union types, but they are used very differently. An intersection type
// combines two or more types to create a new type that has all properties of the existing types. This allows you
// to add together existing types to get a singles tpe that has all the features you need.

// An intersection type uses the ampersand (&) to separate each type

// Intersection types are most often used with interfaces. The following example defines two interfaces, Employee
// and Manager, and then creates a new intersection type called ManagementEmployee that combines the properties in
// both interfaces

interface Employee {
  employeeID: number;
  age: number;
}
interface Manager {
  stockPlan: boolean;
}
type ManagementEmployee = Employee & Manager;
let newManager: ManagementEmployee = {
  employeeID: 12345,
  age: 34,
  stockPlan: true,
};

// Literal types

// A literal is a more concrete subtype of a collective type. What this means is that "Hello World" is a string,
// but a string is not "Hello World" inside the type system

// There are three sets of literal types available in TypeScript: string, number and boolean. By using literal
// types you can specify an exact value that a string, number or boolean must have (for example: "yes", "no",
// "maybe".)

// What is literal narrowing ?

// When you declare a variable using var or let in TypeScript, you are telling the compiler that there is a the
// chance that his variable will change its contents. Declaring a variable with let types the variable (for
// example, as a string), allowing for an infinite number of potential values.

// In contraste, using const todeclare a variable will inform TypeScript that this object will never change.
// Declaring with const types it to the value (for example, "Hello World").

// The process of going from an infinite number of potential cases to a smaller, finite number of potential cases
// is called narrowing.

// Defining literal types

// Literal types are written as object, array, function of constructor type literals and are used to compose new
// types from other types

// The best way to demonstrate the use of literal types is with an example. This type definition creates a literal
// type called testResult, which can contain one of three string values:

type testResult = "pass" | "fail" | "incomplete";
let myResult: testResult;
myResult = "incomplete"; //* Valid
myResult = "pass"; //* Valid
myResult = "failure"; //* Invalid

// TypeScript algo has numeric literal types, which act the same as the string literals above. For example:

type dice = 1 | 2 | 3 | 4 | 5 | 6;
let diceRoll: dice;
diceRoll = 1; //* Valid
diceRoll = 2; //* Valid
diceRoll = 7; //* Invalid

// You can also use boolean values when defining literal types, or any combination types.

// Collection types in TypeScript
// The object types are all class, interface, array and literal types (anything that is not a primitive type.) For
// now, let's look at the array and Tuple types.

// Arrays
// TypeScript, like JavaScript, allows you to work with arrays. Arrays can be written in one of two ways. In the
// first, you use the type of the elements followed by square brackets ([]) to denote an array of that element type:

let list: number[] = [1, 2, 3];

// The second way uses a generic Array type, using the syntax Array<Type>

let list: Array<number> = [1, 2, 3];

// There is no advantage to using one over the other so it's up to you to decide wich syntax to use

//Tuples
// Having an array of the same value types is useful, but sometimes you have an array that contains values of
// mixed types
// For that purpose, TypeScript provides the Tuple type. To declare a Tuple, use the syntax
// variableName: [type, type, ...]

let person1: [string, number] = ["Marcia", 35];

let person2: [string, number] = ["Marcia", 35, true];

let person3: [string, number] = [35, "Marcia"];

/*  EXERCISE 1
    TODO: Modify the code to add types to the variable declarations. 
    The resulting JavaScript should look the same as the original example when you're done. */

// let firstName;
// let lastName;
// let fullName;
// let age;
// let ukCitizen;

// firstName = 'Rebecca';
// lastName = 'Smith';
// age = 42;
// ukCitizen = false;
// fullName = firstName + " " + firstName;

// if (ukCitizen) {
//     console.log("My name is " + fullName + ", I'm " + age + ", and I'm a citizen of the United Kingdom.");
// } else {
//     console.log("My name is " + fullName + ", I'm " + age + ", and I'm not a citizen of the United Kingdom.");
// }

let firstName: string;
let lastName: string;
let fullName: string;
let age: number;
let ukCitizen: boolean;

firstName = "Rebecca";
lastName = "Smith";
age = 42;
ukCitizen = false;
fullName = firstName + " " + firstName;

if (ukCitizen) {
  console.log(
    "My name is " +
      fullName +
      ", I'm " +
      age +
      ", and I'm a citizen of the United Kingdom."
  );
} else {
  console.log(
    "My name is " +
      fullName +
      ", I'm " +
      age +
      ", and I'm not a citizen of the United Kingdom."
  );
}

/* EXERCISE 2
   TODO: Run the code as is and then modify it to have strongly typed variables. 
   Then, address any errors you find so that the result returned to a is 12. */

//  let x;
//  let y;
//  let a;

//  x = 'five';
//  y = 7;
//  a = x + y;

//  console.log(a);

let x: number;
let y: number;
let a: number;

x = 5;
y = 7;
a = x + y;

console.log(a);

// Exercise 3: Implement an enum type

/* EXERCISE 3
   TODO: In the following code, implement an enum type called Season that represents 
   the constants "Fall", "Winter", "Spring", and "Summer". Then, update the function so 
   you can pass in the season by referencing an item in the enum, for example 
   Season.Fall, instead of the literal string "Fall". */

// function whichMonths(season) {
//   let monthsInSeason: string;
//   switch (season) {
//     case "Fall":
//       monthsInSeason = "September to November";
//       break;
//     case "Winter":
//       monthsInSeason = "December to February";
//       break;
//     case "Spring":
//       monthsInSeason = "March to May";
//       break;
//     case "Summer":
//       monthsInSeason = "June to August";
//   }
//   return monthsInSeason;
// }

// console.log(whichMonths("Fall"));

enum Season {
  "Fall",
  "Winter",
  "Spring",
  "Summer",
}

const whichMonths = (season: Season) => {
  let monthsInSeason: string;

  switch (season) {
    case Season.Fall:
      monthsInSeason = "September to November";
    case Season.Winter:
      monthsInSeason = "December to February";
    case Season.Spring:
      monthsInSeason = "March to May";
    case Season.Summer:
      monthsInSeason = "June to August";
  }
};

// Otro agregado para resumir todavia mas el codigo seria con un diccionario

// const months = {
//   [Season.Fall]: "September to November",
//   [Season.Winter]: "December to February",
//   [Season.Spring]: "March to May",
//   [Season.Summer]: "June to August",
// };

// const whichMonths = (season: Season) => {
//   let monthsInSeason: string;
//   return months[season];
// };

console.log(whichMonths(Season.Fall));

// Exercise 4: Declare an array type

/* EXERCISE 4
   TODO: Declare the array as the type to match the type of the items in the array. */

//  let randomNumbers;
//  let nextNumber;
//  for (let i = 0; i < 10; i++) {
//      nextNumber = Math.floor(Math.random() * (100 - 1)) + 1;
//      randomNumbers.push(nextNumber);
//  }

//  console.log(randomNumbers);

/* EXERCISE 4
   TODO: Declare the array as the type to match the type of the items in the array. */

let randomNumbers: number[] = [];
let nextNumber: number;

for (let i = 0; i < 10; i++) {
  nextNumber = Math.floor(Math.random() * (100 - 1)) + 1;
  randomNumbers.push(nextNumber);
}

console.log(randomNumbers);
