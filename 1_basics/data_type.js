// Primitive datatypes=Are immutable, meaning their values cannot be changed once created,Are stored directly in memory
// eg: const name = 'John';
// 1. Number
// 2. String
// 3. Boolean
// 4. BigInt
// 5. Symbol
// 6. Undefined
// 7. Null


// Reference datatypes=Are mutable, meaning their values can be changed,Are stored in memory as references
//eg:// const numbers = [1, 2, 3, 4, 5];
// 1. Object
// 2. Array
// 3. Function
// 4. Date
// 5. RegExp
// 6. Map and Set



// Stack Memory(Primitive types) and Heap memory(Non-Primitive types)
// Stack memory is used to store the values of primitive types, and heap memory is used to store the values of non-primitive types.
// The stack memory is faster than the heap memory.
// The stack memory is limited, and the heap memory is larger.

// let name="Aman Vishwakarma"
// let another_name=name
// another_name="Akash Vishwakarma"
// console.log(name)
// console.log(another_name)




// let userone={
//     name:"Aman Vishwakarma",
//     age:23
// }
// let usertwo=userone
// usertwo.name="Akash Vishwakarma"
// console.log(userone)
// console.log(usertwo)




 let userone ="Aman Vishwakarma"
 let usertwo=userone
 usertwo="Akash Vishwakarma"
 console.log(userone)
 console.log(usertwo)



 let userOne={
    name : "Aman Vishwakarma",
    age :24
 }

 let userTwo=userOne
 userTwo.name="Akash Vishwakarma"
 console.log(userTwo)
console.log(userOne)
