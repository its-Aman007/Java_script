const accountId = 12113404
let accountEmail = "maahivishwaas@gmail.com"
var accountPassword = "12345"
accountCity = "Gorakhpur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "aman.12113404@lpu.in"
accountPassword = "21212121"
accountCity = "Phagwara"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])