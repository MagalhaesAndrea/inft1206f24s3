console.log("hello");

// Scope of the variables
//1- Global Scope:
//a - Any variable declared using var or ket keywords outside the function

// Any variable declared with let or var or const is global. BUT DO NOT DO IT! NOT GOOD PRACTICE

//2 - Function Scope (local scope)
//a - Any variable declared using var keyword inside the function

//3 - Block Scope
//a - Any variable declared using let keyword inside the block

var g = 10;

console.log("(outside the function) g = "+g);

function todo(){
    console.log("(inside the function) g = "+g);
    var a = 5;
    console.log("(inside the function) a = "+a);

    // block
    {
        let c = 100;
        console.log("(inside the block) c = "+c);

        var b = 22;
        console.log("(inside the function) b = "+b);

    }
    console.log("(inside the function) b = "+b);
    //console.log("(inside the function) c = "+c); //error

    let e = 500;
    console.log("(inside the function block) e = "+e);

    d = 250
}

//console.log("(inside the function) a = "+a); // error

todo();
console.log("(outside the function) d = "+d);

document.getElementById('id1').innerHTML = "(outside the function) d = "+d;
