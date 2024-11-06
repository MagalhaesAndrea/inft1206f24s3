console.log("Hello")

function showOutput(){
    let num1 = parseFloat(document.querySelector('#num1').value);
    let num2 = parseFloat(document.querySelector('#num2').value);
    let sum = num1 + num2
    document.querySelector('#output').textContent = sum;
}

document.querySelector('#btn').addEventListener('click',showOutput);