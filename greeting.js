const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing"; //showing = 보여주기

function saveName(text){
    localStorage.setItem(USER_LS, text); // 15. localStorage 에 USER_LS 라는 키에 text 인수를 저장. 이때 text 인수는 currentValue
}

function handleSubmit(event){
    event.preventDefault(); // 11. 우선, 디폴트 이벤트를 멈춰라. (폼의 데이터를 전송하지 말아라.)
    const currentValue = input.value; // 12. 폼으로부터 받은 value 를 currentValue 라고 선언.
    paintGreeting(currentValue); // 13. 이 값으로 paintGreeting 함수를 실행.
    saveName(currentValue); // 14. currneValue 를 가지고 saveName 함수를 실행해라.
}

function askForName(){
    form.classList.add(SHOWING_CN); // 9. form 에 SHOWING_CN 클래스를 넣어라. class="showing"
    form.addEventListener("submit", handleSubmit); // 10. submit 할때, handleSubmit 함수를 실행해라.
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN) // 4. 우선 form의 showing 클래스를 지워라. 그러면 .form만 남아서 display: none; 이 됨.
    greeting.classList.add(SHOWING_CN) // 5. greeting 에는 showing 클래스를 넣어라. 그러면 display: inline;
    greeting.innerText = `Hello! ${text}!`; // 6. 그리고 greeting 이 있는 태그의 안에 Hello 'text' 를 넣어라.
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS) // 1. User_LS 의 밸류값을 가져와서 currentUSer 에 넣어라.
    if(currentUser === null){ // 7. 만약 currentUser 가 없다면
        askForName(); // 8. askForName 을 동작해라.
    } else { // 2. currentUser의 밸류값이 있다면
        paintGreeting(currentUser); // 3. paintGreeting 을 실행해라.
    }
}

function init(){
    loadName();
}

init();