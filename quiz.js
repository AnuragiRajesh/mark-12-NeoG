const quizForm = document.querySelector(".quiz-form");
const submitAnswerBtn = document.querySelector("#submit-answer-button");
const outputE3 = document.querySelector("#output");
const rightAnswers = ["90","right angled","one right angle","12,16,20","Equilateral triangle","100","30","a+b+c","no","45"];



function calculateScore() {
    let score = 0;
    let index = 0
    const formResults = new FormData(quizForm)
    for(let value of formResults.values()){
        if(value===rightAnswers[index]){
            score=score+1
            console.log(value)
            console.log(rightAnswers[index])
        }
        else {
        }
        index=index+1     
    }
    outputE3.innerText = "Your Score is : " + score
    
}

submitAnswerBtn.addEventListener("click",calculateScore)
