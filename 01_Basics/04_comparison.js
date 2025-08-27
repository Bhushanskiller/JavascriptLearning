//Basic comparison operations
// console.log(2>2)// false
// console.log(2<2)// false
// console.log(2!=2)// false
// console.log(2==2)// true

//Tricky
 //console.log(2<=2)// true
 //console.log(2>=2)// true


/* Datatype checks and the value that will be received as output is very important to identify 

Quality checks
1. Are there any chances if we will be receiving null or undefined
2. What if there comparison between null and null, null and undefined, undefined and undefined happens in program
When you use relational operators (<, >, <=, >=), JavaScript tries to convert operands to numbers (except when comparing strings).

Convert null
Number(null) -> 0
null >= null
 0 >= 0

--****************************--
Number(null) → 0
Number(undefined) → NaN
That’s the key difference.
--****************************--

*/

//Null is converted to zero in Javascript comparison but when null==0 it is false as it only equals undefined or itself

/*
//null with null comparison scenarios
console.log(null>null);// false
console.log(null<null);// false
console.log(null>=null);// true
console.log(null<=null);// true
console.log(null!=null);// false
console.log(null==null);// true */

/* //null with 0 comparison scenarios
console.log(null>0);// false
console.log(null<0);// false
console.log(null>=0);// true
console.log(null<=0);// true
console.log(null!=0);// true
console.log(null==0);// false  //== does not convert null to 0 (it only equals undefined or itself).
 */

/*
console.log(Number(undefined)); // NaN
Because comparisons with NaN are always false.
*/


/* //null with undefined comparison scenarios
console.log(null>undefined);// false
console.log(null<undefined);// false
console.log(null>=undefined);// false
console.log(null<=undefined);// false
console.log(null!=undefined);// false
console.log(null==undefined);// true  */



/* //undefined with undefined comparison scenarios
console.log(undefined>undefined);// false
console.log(undefined<undefined);// false
console.log(undefined>=undefined);// false
console.log(undefined<=undefined);// false
console.log(undefined!=undefined);// false
console.log(undefined==undefined);// true 
 */

/*  //undefined with 0 comparison scenarios
console.log(undefined>0);// false
console.log(undefined<0);// false
console.log(undefined>=0);// false
console.log(undefined<=0);// false
console.log(undefined!=0);// true
console.log(undefined==0);// false  */

//=== Strict Check does not perform internal dataconversion

console.log(null===0) //false
console.log("2"===2) //false
console.log("2"==2) //true

