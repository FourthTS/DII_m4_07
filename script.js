let user=[5]

user[0] = {     
    'name': 'ก',     
    'age': 68,     
    'income': 75900,
    'salary':0,
} 
user[1] = {     
    'name': 'ข',     
    'age': 35 ,     
    'income': 55400, 
    'salary':0,
}
user[2] = {     
    'name': 'ค',     
    'age': 51,     
    'income': 81000, 
    'salary':0,
}
user[3] = {     
    'name': 'ง',     
    'age': 76,     
    'income': 111000, 
    'salary':0,
}
user[4] = {     
    'name': 'จ',     
    'age': 76,     
    'income': 20500, 
    'salary':0,
}
let averageAge = 0
for(let i =0 ; i < user.length; i++){
    user[i].salary=user[i].income*12
    console.log(user[i]);
}

function totalIncome(array,key){
    let totalIncome = 0
    for(let i =0 ; i < array.length; i++){
        totalIncome+=array[i][key];
    }
    return totalIncome;
}
function totalAge(array,key){
    let totalAge = 0
    let averageAge = 0
    for(let i =0 ; i < array.length; i++){
        totalAge+=array[i][key];
    }
    return averageAge = totalAge/user.length;
}
console.log(totalIncome(user,'income'));
console.log(totalAge(user,'age'));

