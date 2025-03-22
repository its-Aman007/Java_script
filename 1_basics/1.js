/// For Loop

for(let index=0; index<=10;index++){
    const element=index;
    console.log(element);
}


for(let i=0;i<=10;i++){
    console.log(i)
    for(let j=0;j<=10;j++){
        console.log(i+'*'+j+'='+i*j);
    }
}



let myarray=['Batman','Superman','Flash']
console.log(myarray.length)
for(let i=0;i<myarray.length;i++){
    
    console.log(myarray[i])
}



let newarray=['Batman','Superman','Flash']
console.log(newarray.length)
for(let i=0;i<myarray.length;i++){
    if(i==2){
        break; // This will break the loop when i==2
    }
    console.log(newarray[i])
}
