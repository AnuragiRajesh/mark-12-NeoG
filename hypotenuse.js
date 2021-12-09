const inputs = document.querySelectorAll(".side-input")
const hypotenuseBtn = document.querySelector("#hypotenuse-btn")
const outputE6 = document.querySelector("#output2")

function calculateHypotenuse() {
    const firstinpu1 = Number(inputs[0].value) 
    const seconinput = Number(inputs[1].value)
    const sum = (firstinpu1*firstinpu1)+(seconinput*seconinput)
    console.log(sum)
    outputE6.innerText = "Your Hypotenuse is :  " + sum;

}

hypotenuseBtn.addEventListener("click",calculateHypotenuse)