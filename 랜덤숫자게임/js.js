/*const guessForm = document.querySelector("#guess-form");
const guessInput = document.querySelector("#guess-form input");
const answerForm = document.querySelector("#answer-form")
const answer = document.querySelector("#answer");
const endnumberForm = document.querySelector("#endnumber-form")
const endnumberInput= document.querySelector("#endnumber-form input")// 랜덤숫자 범위 끝숫자
const HIDDEN_CLASSNAME = "hidden";
const USER_NUMBER_KEY = "user-number" // 사용자의 저장될 키 이름
const MACHINE_NUMBER_KEY = "machine-number" //랜덤 숫자 저장될 키 이름
const result = document.querySelector("#result");


function answerSubmit(event){
    event.preventDefault(); // submit을 해도 새로고침 안되게함
    const usernumber = guessInput.value;
    localStorage.setItem(USER_NUMBER_KEY, usernumber);
    machineAnswer(usernumber);
}
//↑ Play를 누르면 발생하는 이벤트

function machineAnswer(usernumber){
    const randomEndNumber = endnumberInput.value; //첫번째 input 숫자의 값을 변수에 저장
    const machineRandomChose = Math.floor(Math.random() * randomEndNumber); // randomEndNumber를 곱해줌으로써 randomEndNumber미만의 값이 나오게함
    localStorage.setItem(MACHINE_NUMBER_KEY, machineRandomChose);//로컬에 랜덤값을 저장함
    answer.innerText = `You chose: ${usernumber}, the machine chose: ${machineRandomChose}`
    answerForm.classList.remove(HIDDEN_CLASSNAME);
    //↑ 랜덤숫자 구하는것

    const savedUsernum = localStorage.getItem(USER_NUMBER_KEY);
    const savedmachinenum = localStorage.getItem(MACHINE_NUMBER_KEY);

    console.log(savedUsernum);
    console.log(savedmachinenum);

if(savedUsernum === savedmachinenum){
    result.innerText="You Won!";
    result.classList.remove(HIDDEN_CLASSNAME);
    
} else{
    result.innerText="You lost!";
    result.classList.remove(HIDDEN_CLASSNAME);
   
}
}
//↑ play를 눌렀을때 나타나는 답변


guessForm.addEventListener("submit", answerSubmit);
//play를 누르면 answerSubmit이 작동한다.

// 첫번째 input에는 숫자를 쓰고 play를 누르면 
// 랜덤 숫자가 0부터 첫번째 input에 있는 숫자사이만큼 나옴

// 두번째 input에는 숫자를 쓰고 play를 누르면 
// input에 있는 숫자가 localstorage에 저장되고 
// hidden으로 숨겨져있던 문장이 나온다.
// if문으로 input에 있는 숫자와 랜덤숫자가 같으면 승,패를 쓴다.
// 숫자가 다르면 localstorage에 저장되있는 숫자를 지우고 다시 저장함

//Math.floor(Math.random() * 변수)
*/


const endnumberForm = document.querySelector("#endnumber-form");
const maxNumber = endnumberForm.querySelector("input");
const guessForm = document.querySelector("#guess-form");
const guessInput = guessForm.querySelector("input");
const answerForm = document.querySelector("#answer-form");
const answer = answerForm.querySelector("#answer");
const result = answerForm.querySelector("#result");
const HIDDEN_CLASSNAME = "hidden";

function play(event){
    event.preventDefault();
    //form에서 submit을 해도 페이지 새로고침이 안되게 함
    const max = maxNumber.value;
    const random = Math.floor(Math.random()* max)
    //Math.random()은 0~1사이의 난수를 생성한다
    //랜덤값에 max를 곱해 랜덤값이 max보다 작은 값으로 나오게 하고
    //Math.floor(내림)을 이용해 소수점을 없애준다
    const guess = parseInt(guessInput.value,10);
    //guessInput에 저장되는 값은 string이다
    //그래서 parseInt를 사용해서 숫자로 바꿔준다

    if(guess === random){
        answer.innerText=`you chose: ${max}, the machine chose: ${random}`;
        result.innerText=`you won!`;
        answerForm.classList.remove(HIDDEN_CLASSNAME);
    }
    else{
        answer.innerText=`you chose: ${max}, the machine chose: ${random}`;
        result.innerText=`you lost!`;
        answerForm.classList.remove(HIDDEN_CLASSNAME);
    }
}

guessForm.addEventListener("submit",play);
//guessForm이 submit될때 play함수를 실행한다




/*
function e(event){
    event.preventDefault();
    console.log(typeof guessInput.value);
}

guessForm.addEventListener("submit",e);
//guessInput에 저장되는 값은 string이다
//그래서 parseInt를 사용해서 숫자로 바꿔준다

//parseInt
//string을 n진법일 때의 값으로 바꿉니다. 
//n은 옵션으로 2부터 36까지 입력할 수 있습니다. 
//입력하지 않으면 10으로 처리합니다.


*/


