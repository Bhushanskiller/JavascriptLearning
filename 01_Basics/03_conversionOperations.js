//Section 1 Basic
let score = 33
//output as number in lower case
//console.log(typeof score) //number
//console.log(typeof(score))//number

let scoreInString = "33"
//output as string in lower case
//console.log(typeof scoreInString) //string
//console.log(typeof(scoreInString))//string

//Section 2 Number conversion
//For "Number" conversion type N in Upper Case as its a class

let valueInNumber = Number(scoreInString)
//console.log(valueInNumber) //33
//console.log(typeof valueInNumber)//number

//Output as NaN - Not A Number and typeof is number
let stringValue = "Bhushan"
let stringValueNumberConversion = Number(stringValue)
//console.log(stringValueNumberConversion) //NaN
//console.log(typeof stringValueNumberConversion)//number

let scoreInStringWithAlphabets = "33abc"
let valueInNumberWithAlphabets = Number(scoreInStringWithAlphabets)
//console.log(valueInNumberWithAlphabets) //NaN (Not a Number)
//console.log(typeof valueInNumberWithAlphabets)//number

let scoreAsUndefined = undefined
let valueAsUndefined = Number(scoreAsUndefined)
//console.log(valueAsUndefined) //NaN
//console.log(typeof valueAsUndefined)//number

//Output as 0 for empty string and null post Number conversion and typeof is number
let scoreInEmptyString = ""
let valueInEmptyString = Number(scoreInEmptyString)
//console.log(valueInEmptyString) //0 <- This can pass wrong result as 0 degreee in calcuate temperature program if empty string is passed
//console.log(typeof valueInEmptyString)//number

let scoreAsNull = null
let valueAsNull = Number(scoreAsNull)
//console.log(valueAsNull) //0 <- This can pass wrong result as 0 degreee in calcuate temperature program if empty string is passed
//console.log(typeof valueAsNull)//number

/* If null or Empty string is passed and converted into Number in JS then it will return output as 0
and type as number Ex. above scoreInEmptyString and scoreInNullString*/

//Boolean
let boolVal = true
let boolValCheck= Number(boolVal)
//console.log(boolValCheck)//1
//console.log(typeof boolValCheck)//number

//Converting into boolean value
let isloggedIn = 1
let booleanIsLoggedIn = Boolean(isloggedIn)
//console.log(booleanIsLoggedIn)//true
//console.log(typeof booleanIsLoggedIn)//boolean

let isloggedInNumber = 33
let booleanIsLoggedInNumber = Boolean(isloggedInNumber)
//console.log(booleanIsLoggedInNumber)//true
//console.log(typeof booleanIsLoggedInNumber)//boolean

let isloggedInString = "Bhushan"
let booleanIsLoggedInString = Boolean(isloggedInString)
//console.log(booleanIsLoggedInString)//true
//console.log(typeof booleanIsLoggedInString)//boolean

let isloggedInEmptyString = ""
let booleanIsLoggedInEmptyString = Boolean(isloggedInEmptyString)
//console.log(booleanIsLoggedInEmptyString)//false
//console.log(typeof booleanIsLoggedInEmptyString)//boolean

let isloggedInNull = null
let booleanIsLoggedInNull  = Boolean(isloggedInNull)
//console.log(booleanIsLoggedInNull)//false
//console.log(typeof booleanIsLoggedInNull)//boolean

let isloggedInUndefined = undefined
let booleanIsLoggedInUndefined  = Boolean(isloggedInUndefined)
//console.log(booleanIsLoggedInUndefined)//false
//console.log(typeof booleanIsLoggedInUndefined)//boolean

//String Conversion

let someNumber = 33
let stringNumber = String(someNumber)
//console.log(stringNumber)// 33 
//console.log(typeof stringNumber)//string

let someNull = null
let stringNull = String(someNull)
//console.log(stringNull)// null 
//console.log(typeof stringNull)//string

let someUndefined = undefined
let stringUndefined = String(someUndefined)
//console.log(stringUndefined)// undefined 
//console.log(typeof stringUndefined)//string

// String to number confusion
// console.log(2+3);//5
// console.log(2*3);//6
/*In JavaScript, the operator ** is the exponentiation operator.
It raises the number on the left to the power of the number on the right. 
take 2 raised to the power 5
2^5=2×2×2*2*2=8
*/
// console.log(2**5);//32
// console.log(-8);//-8

//let str1, str2,str3
str1 = "Bhushan"
str2 = " Shelar" 
str3 = str1+str2
// console.log("stringCheck => "+str3) //Bhushan Shelar
str1 = null
str2 = null
str3 = str1+str2
// console.log("nullCheck => "+str3) //0
// console.log("nullChecktypeOf => "+typeof str3) //0

let strUndefinedTypeCheck;
// console.log("undefinedtypeOf strUndefinedTypeCheck=> "+typeof strUndefinedTypeCheck) //undefined
str1 = undefined
str2 = undefined
str3 = str1+str2
// console.log("undefinedCheck => "+str3)//NaN
// console.log("undefinedtypeOf str3=> "+typeof str3) //number


//String Number Concatenation Scenarios
/* 
Document for Primitive Type Data Conversion
URL : https://tc39.es/ecma262/#sec-type-conversion 
*/

/* If string is found in start for eg. "1"+2+3 then it will considered as a complete string and output will be 123*/
// console.log("1"+2+3);//123

// console.log(1+"2"+3);//123
// console.log(1+2+3+"4"+5+6);//6456 Here it starts with Numeric values and from "4" it will start considering it as string
// console.log("4"+"5"); //45

//Increment and Decrement operation Scenarios
// console.log(true);//true
// console.log(+true);//1 
// console.log(false);//false
// console.log(+false);//0
//Wrong Implementation will give compile time error
/* console.log(++true);//1 //Invalid left-hand side expression in prefix operation
console.log(true+); //error SyntaxError: Unexpected token ')' */

// console.log("string=> "+"");
//Here we are just passing +"" in console.log
//stringWithIncrementPrefix
// console.log(+"");
//console.log(++""); //Invalid left-hand side expression in prefix operation

// console.log("null=> "+null);
//Here we are just passing +null in console.log
//nullWithIncrementPrefix
// console.log(+null);

// console.log("undefined=> "+undefined);
//Here we are just passing +undefined in console.log
// undefinedWithIncrementPrefix
// console.log(+undefined);

//Prefix Increment and Decrement
// console.log("Increment")
// let prefixGameCounter = 1001;
// console.log(+prefixGameCounter); //1001
// console.log(++prefixGameCounter); //1002
// //console.log(+++prefixGameCounter); //Invalid left-hand side expression in prefix operation
// console.log(++prefixGameCounter); //1003
// console.log("Decrement")
// console.log(-prefixGameCounter); //1001
// console.log(--prefixGameCounter); //1002
// //console.log(+++prefixGameCounter); //Invalid left-hand side expression in prefix operation
// console.log(--prefixGameCounter); //1003


//Postfix Increment and Decrement
// console.log("Increment")
// let postfixGameCounter = 1001;
//console.log(postfixGameCounter+); //Unexpected token ')'
// console.log(postfixGameCounter++); //1001 //line A
//console.log(postfixGameCounter+++); //Unexpected token ')'
// console.log(postfixGameCounter++); //1002 //line B
// console.log("Decrement")
//console.log(postfixGameCounter-); //Unexpected token ')'
// console.log(postfixGameCounter--); //1003 //line C
//console.log(postfixGameCounter+++); //Unexpected token ')'
// console.log(postfixGameCounter--); //1002 //line D

/*
Step-by-step execution
console.log(postfixGameCounter++);//line A 1001
console.log(postfixGameCounter++);//line B 1002
console.log(postfixGameCounter--);//line C 1003
console.log(postfixGameCounter--);//line D 1002
Start:
postfixGameCounter = 1001 
 
--> line A console.log(postfixGameCounter++);
++ is postfix, so:
First return the current value (1001)
Then increment it (1002)
Output: 1001
Now postfixGameCounter = 1002

Line B console.log(postfixGameCounter++);
Current value: 1002
Postfix means print first, increment after
Output: 1002
Now postfixGameCounter = 1003

Line C console.log(postfixGameCounter--);
Current value: 1003
Postfix -- means print first, decrement after
Output: 1003 <- This is why you see 1003
Now postfixGameCounter = 1002

Line D  console.log(postfixGameCounter--);
Current value: 1002
Postfix: print first, decrement after
Output: 1002
Now postfixGameCounter = 1001
*/


/* 
URL : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
Key Rule
x++ → return x, then do x = x + 1
x-- → return x, then do x = x - 1 
*/

let x =3
console.log(x) //3

/* 
Here output will be 3 as it will print output first and then do postfix operation 
(In stack it updated to 4 after postfix operation) 
*/
console.log(x++) //3 

console.log(x)//4













