/*Prefer not to use var because of issue in block scope and functional scope */
/*Keywords like const, let, typeof etc. are case sensitive */
/*Single quotes can be used for string in JS*/
const accountID = 54312
let accountEmail = "Bhushan@gmail.com"
var accountPassword = "12345"
accountCity = "Mumbai"
let accountState // accountState is declared but not initialized
let accountNewState = "Hyderabad"

//Overwrite
//accountID = 456//This will throw error as const property value cannot be reinitalized(TypeError: Assignment to constant variable.)
accountEmail = 'b@gmail.com'
accountPassword = "765674676"
accountCity = "Bengaluru"
console.log("accountState => "+accountState);  // Output: undefined
console.log("typeof => "+typeof accountState);  // Output: undefined
console.log("accountNewState => "+accountNewState);  // Output: Hyderabad
console.log("typeof => "+typeof accountNewState);  // Output: string

console.table([accountID,accountEmail,accountPassword,accountCity,accountState]);


