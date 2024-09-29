let a =Boolean('hello');
console.log(a);
console.log(typeof a);

let b =Boolean(10);
console.log(b);
console.log(typeof b);

let c =Number('10');
console.log(c);
console.log(typeof c);

let d =Boolean(null);
console.log(d);
console.log(typeof d);

let e =Boolean(undefined);
console.log(e);
console.log(typeof e);

let user = {
    name:'user',
    id:'12',
    age: 32,
    
    house:{
        square:100,
        floors:2,
        price:10000,

        coOwner:{
            name:'mrX',
            id:'24',
            age:42
        }
    }

}

console.log(user);
console.log(user.house.square);
console.log(user.house.coOwner.name, user.house.coOwner.id);

let list=['item1','item2','item3',['item4','item5','item6',['item7','item8','item9']]]
console.log(list);
console.log(list[3][0]);
console.log(list[3][3][1], list[3][3][2]);

let age = Number(prompt('enter age'));
console.log(age);

if(age>1&&age<12) {
    console.log('you are child');   
} 
else if(age>=12&&age<18) {
    console.log('you are teenager');
}
else if(age>=18&&age<60) {
    console.log('you are adult person');
}
else if(age>=60) {
    console.log('you are so old');
}

let name = prompt('enter name');

if(name == 'Admin') {
    console.log('I have full access');
} else if(name == 'Student') {
    console.log('I am Student');
} else if(name == 'Teacher') {
    console.log('I am Teacher');
} else if(name == 'Young') {
    console.log('I young and ready to party');
} else {
console.log('You entered own name');
}
