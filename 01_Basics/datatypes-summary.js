/*
Immutable -> you cannot change the actual value once it's created.
let a = 10;
let b = a; // b gets a copy of the value in a

b = 20;

console.log(a); // 10
console.log(b); // 20

a -> 10
b -> 10 (a copy)

b changes to 20:
b -> 20

a stays at 10


Mutable
Both person1 and person2 refer to the same object.
Changing one affects the other — this is "copied by reference".

let person1 = { name: "Alice" };
let person2 = person1;

person2.name = "Bob";

console.log(person1.name); // "Bob"

let obj1 = { name: "Alice" };
let obj2 = obj1;

obj2.name = "Bob";

console.log(obj1.name); // "Bob"

obj1 ─┐
      ├-> { name: "Alice" }
obj2 ─┘

obj2.name = "Bob":

obj1 ─┐
      ├-> { name: "Bob" }
obj2 ─┘

// 



*/

//  Primitive
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
// const bigNumber = 3456543576654356754n

// Reference (Non primitive)
// Array, Objects, Functions
const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof myFunction); //function
console.log(typeof anotherId);
// https://262.ecma-international.org/5.1/#sec-11.4.3

/* Return type of variables in JavaScript
1. Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2. Non-primitive Datatypes 
       Arrays  =>  object
       Function  =>  functionObject
       Object  =>  object */