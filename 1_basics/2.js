    /// For Of Loop

    // ["","",""]
    // [{},{},{}]

// const array=['Aman','Abhay','Satyam','Khushi']
// for(const num of array){
//     console.log(num);
// }

const arr1=[1,2,3,4,5]
for(const num of arr1){
    console.log(num)
}


const greeting='Hello World!'
for(const greet of greeting)[
    //console.log(greet)
]

/// Maps///

const map=new Map()
map.set('IN',"India")
map.set('US',"United States")
map.set('UK',"United Kingdom")
map.set('AU',"Australia")
map.set('NZ',"New Zealand")
console.log(map) // we cannot apply for in loop on maps, bcz it is not iterable




const myobj={  // For objects
    'js':'Javascript',
    'py':'Python',
    'rb':'Ruby',
    'java':'Java',
    'cs':'C#'
}
for(const key in myobj){  // we cannot use for of loop in objects, so we use for in loop**
    console.log(`${key} is shortcut for ${myobj[key]}`)
}



const programming=['js','py','rb','java','cs'] // for arrays
for(const key in programming){
    //console.log(key)  // By default it will print index of the array
    console.log(programming[key])  // By default it will print value of the array
}


const language=['Javascript','Python','Ruby','Java','C#']
language.forEach( (items,index,arr)=>{
    console.log(items,index,arr)
})  /// it will print all the values of array, index of array and array itself



