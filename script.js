var x=5
{
    let x =1
}
/*console.log(x+x)
let price = 100
let vat =70
console.log(price * (vat/100));
*/
let score = 70
let grade
if(score >= 80){
    grade = 'A';
}else if(score>=75){
    grade = 'B+';
}else if(score>=70){
    grade = 'B';
}else if(score>=65){
    grade = 'C+';
}else if(score>=60){
    grade = 'C';
}else if(score>=55){
    grade = 'D+';
}
else if(score>=50){
    grade = 'D';
}else{
    grade='F';
}
console.log(grade+' '+score);
