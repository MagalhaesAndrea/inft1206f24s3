console.log("hello");

// function declaration
function greeting1(){
    console.log("Hello");
}

greeting1();

function greeting2(){
    return "hello";
}

let str = greeting2();
console.log(str);
console.log(greeting2());
console.log(greeting1());

function greeting3(name){
    return "Hello ${}" +name;
}

console.log(greeting3('Andrea'));

function greeting4(name='Sam'){
    return "Hello ${}" +name;
}
console.log(greeting4());

function sum(num1=0,num2=0){
    return num1+num2
}

console.log(sum(3,5));
console.log(sum('3','5'));
console.log(sum('Hi ','Andrea'));
console.log(sum(3));
console.log(sum(3,5,6));

let m = sum();
console.log(m);
console.log(typeof(m));

let f = sum;
console.log(typeof(f));
console.log(f(7,9));

f = 9;

// function expression
let f2 = function(){
    return "Good Afternoon"
};

console.log(f2());

f2 = 20;
console.log(f2);


// Arrow function
let f3 = ()=> "Good Afternoon";



console.log(f3());
f3();

const sum3 = function(num1=0,num2=0){
    return num1+num2;
}

console.log(sum3(4,7));

const sum4 = (num1=0,num2=0) => num1+num2;

console.log(sum4(10,5));