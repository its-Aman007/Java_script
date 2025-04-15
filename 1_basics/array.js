//   Arrays
const array = [1, 2, 3, 4, 5];
console.log(array[0]); // 1
console.log(array[1]); // 2

const myHeroes = ['Spiderman', 'Batman', 'Superman', 'Ironman'];
console.log(myHeroes[0]); // Spiderman

array.push(6)
array.push(7)
array.pop()
console.log(array)
const newArray=array.join()
console.log(array)
console.log(newArray) // type of newarray is string

console.log('A',array)
const newa1=array.slice(1,3)
console.log(newa1)
console.log('B',array)
const newa2=array.splice(1,3) // incase of splice the original array will be modified
console.log('C',array)
console.log(newa2)


