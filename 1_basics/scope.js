let a=10
const b=20
var c=30
if (true){
    let a=40
    const b=50
    var c=60
    console.log(a) // 40     
    console.log(b)  // 50
    console.log(c)  // 60

}
console.log(a) // 10  {let is block scoped}
console.log(b) // 20  {const is block scoped}
console.log(c) // 60  
//  In global scope, function.


////////// DOM(Document object model)How to manipulate HTML using JS.


function one(){
    const username="Aman"

    function two(){
        const channel_name="CodeWithAman"
        console.log(username)
    }
    two()
    // console.log(channel_name)
}
one()
