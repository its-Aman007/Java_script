const sum=[1,2,3,4,5]
initial_value=0
const total=sum.reduce(
    (accumulator,current_value)=>accumulator+ current_value,initial_value
);
console.log(total)



const sum1=[1,2,3]
initial_val=0
const total1=sum1.reduce(function(acc,curr_val){
    console.log(`accumulator:${acc},current_value:${curr_val}`)
    return acc+curr_val
})
console.log(total1)