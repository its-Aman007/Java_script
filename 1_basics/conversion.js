
let score='33'
console.log(typeof score)
console.log(score.toString())

let valueInNumber=Number(score)
console.log( typeof valueInNumber)

/**
33=> number
'33'=> string
true=> boolean
false=> boolean
null=> null
undefined=> undefined
{}=> object
 */
let isLoggedIn=true


let booleanIsloggedIn=Boolean(isLoggedIn)
console.log(booleanIsloggedIn)

let anynumber=21
let stringNumber=String(anynumber)
console.log(stringNumber)
console.log(typeof stringNumber)


let x=10
const y=x++
console.log(`x: ${x}, y: ${y}`);

let a=23
const b=++a
console.log(`a: ${a}, b: ${b}`);

console.log(null==0);
console.log(null>0);
console.log(null>=0); //here null is converted to number ,treated as 0.


console.log(undefined==0);
console.log(undefined>0);
console.log(undefined>=0); //here undefined is converted to number ,treated as NaN.


console.log('5'==5);// True
console.log('5'===5);// False, it will check data_type and value both..



