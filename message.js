const messageCont = document.querySelector(".js-message")

const myArray = ["Rome is not built in a day.", "Who dares, wins.", "Only I can change my life, No one can do it for me.", "love what you have."];

function randomMessage(){
    const randomItem = myArray[Math.floor(Math.random()*myArray.length)];
    paintMessage(randomItem);
}

function paintMessage(randomItem){
    messageCont.innerText = `${randomItem}`;
}

function init(){
    randomMessage();
}

init();