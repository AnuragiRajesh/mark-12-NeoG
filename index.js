const inputs = document.querySelectorAll(".angle-input");
const isTriangleButton = document.querySelector("#is-triangle-button");
const outputE2 = document.querySelector("#output");


function calculateSumOfAngles(angle1,angle2,angle3){
    const sumOfAngles = angle1 + angle2 + angle3
    return sumOfAngles; 
}


function isTriangle() {
    const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value))
    console.log(sumOfAngles)
    if(sumOfAngles===180){
        outputE2.innerText = "Yes, These angles form a Triangle"
    }
    else {
        outputE2.innerText = "No, These angles do'nt form a Triangle"
    }
    

}

isTriangleButton.addEventListener("click",isTriangle)