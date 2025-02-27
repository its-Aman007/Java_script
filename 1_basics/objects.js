// Symbols//
const my_sym=Symbol('key1')

const user_js={
    'name':'Aman',
    [my_sym]:'mykey1',
    'age':23,
    'email':'aman@gmail.com'

}
console.log(user_js.name)
console.log(user_js[my_sym])


///    Singleton object and non singleton object.
// Singleton object is the object which is created only once and it is used in the entire application.
// Non singleton object is the object which is created multiple times and used in the entire application.

const user_Name=new Object() // Singleton object

const user_name={}// Non singleton object
user_name.id='123'
user_name.name='Aman'
user_name.age=23
// console.log(user_name)

const random_user={
    userName:{
        userFullname:{
            firstName:'Aman',
            lastName:'Vishwakarma'
        }
    }
}
console.log(random_user.userName.userFullname.firstName)


const obj1={1:'a',2:'b'}
const obj2={3:'c',4:'d'}
const obj3={obj1,obj2}
// console.log(obj3)
const obj_3=Object.assign(obj1,obj2)
// console.log(obj_3)
const obje3={...obj1,...obj2}
// console.log(obje3)

console.log(Object.keys(random_user['userName']['userFullname']))
console.log(Object.values(random_user['userName']['userFullname']))



const course={
    name:'Javascript',
    duration:'3 months',
    mentor:'Aman',
    students:['Aman','Rahul','Raj','Rohan','Ravi'],
    topics:['Basics','Advance','Projects']
}
course.mentor
console.log(course.mentor)
console.log(course.students[1])





