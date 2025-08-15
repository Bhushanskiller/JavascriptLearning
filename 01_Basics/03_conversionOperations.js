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
console.log(stringNull)// null 
console.log(typeof stringNull)//string

let someUndefined = undefined
let stringUndefined = String(someUndefined)
console.log(stringUndefined)// undefined 
console.log(typeof stringUndefined)//string





