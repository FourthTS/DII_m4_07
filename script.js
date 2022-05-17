let numB=0;
let numA=1;
let num=10
let sum=1;
for(let i=1;i<num;i++){
    numA=numB;
    numB=sum;
    sum=numA+numB;
}
console.log(sum)
