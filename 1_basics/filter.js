const num=[1,2,3,4,5,6,7,8,9,10]
const new_num=num.filter((num)=>num%2===0)
console.log(new_num)

// const new_num1=num.filter((num)=>{num%2==0})
// console.log(new_num1)// It will show empty array bcz we have to use return keyword in the block of code

const new_num1=num.filter((num)=>{
    return num>4

})
console.log(new_num1)



// const new_num2=[]
// new_num2.forEach((hash)=>{
//     console.log(hash)
// } )



const number=[1,2,3,4,5,6,7,8,9,10]
const new_number=number.filter((num)=>num>=4)
    console.log(new_number)


const arr1=[1,2,3,4,5]
const new_arr=arr1.filter((item)=>{
    return item>1
})
console.log(new_arr)


// Mapper

const numb=[1,2,3,4,5,6,7]
const new_numb=num.map((num)=>{
    return num**2
})
console.log(new_numb)




// const coding=['java','ruby','python','SQL']
// const new_coding=coding.forEach((language)=>{
//     return language

// })
// console.log(new_coding) // it will show undefined bcz forEach does not return anything



const coding=['java','ruby','python','SQL']
coding.forEach((language)=>{
    console.log(coding)
})



const numbers=[1,2,3,4,5,6,7]

// const new_numbers=numbers.map((num)=>{
//     return num+2
// })
const new_numbers=numbers.map((num)=>num+10)
                         .map((num)=>num+1)
                         .filter((num)=>num%2==0)
console.log(new_numbers)
 