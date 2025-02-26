const marvel_heros=['Ironman','Thor','Hulk','Captain America','Black Widow','Hawkeye'];
const dc_heros=['Superman','Batman','Wonder_women','Flash','Aquaman'];
const all_heros=marvel_heros.concat(dc_heros)

console.log(all_heros)


// Use of spread like breaking glass of water.
// console.log([...marvel_heros,...dc_heros])


// const img_array=[1,2,3,[4,5,6,[7,8,9]]]
// console.log(img_array.flat(Infinity))


let num1=100
let num2=200
let num3=300
console.log(Array.of(num1,num2,num3))
console.log(Array.from({name:"Aman"}))// It will give empty array,we have to give key or value to get the array.

