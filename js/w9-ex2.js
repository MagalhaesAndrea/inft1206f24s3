console.log("Hello")

function showGreetingMessage(){
    let name = window.prompt("What is your name");
    window.alert("Hello "+ name);
}

document.querySelector('#btn').addEventListener('click',showGreetingMessage)
//showGreetingMessage();

function changeColour(){
    document.querySelector('#banner').style.color = "red";
}


//changeColour();

document.querySelector('#banner').addEventListener('mouseover',changeColour);
