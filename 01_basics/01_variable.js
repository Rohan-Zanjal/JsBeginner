const accountId = 1234
let accountEmail = "rohan@google.com"
var accountPassword = "1234345"
accountCity = "Nagpur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "rz@rz.com"
accountPassword = "21212121"
accountCity = "Pune"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
//If we want to print in table or you do not want to print with single console