 const allSides = document.querySelectorAll("#input");
 const calculatebtn = document.querySelector("#calculate-btn");
 const outputE7 = document.querySelector("#output");

 function calculationOfArea() {
     let firstSide = Number(allSides[0].value);
     let secondSide = Number(allSides[1].value);
     let thirdside = Number(allSides[2].value);
     if((firstSide + secondSide > thirdside) && (firstSide + thirdside > secondSide) && (secondSide+thirdside > firstSide)) {
         let semiPrimeter = (firstSide + secondSide + thirdside)/2
         const AreaOfTriangle = Math.sqrt(semiPrimeter*(semiPrimeter-firstSide)*(semiPrimeter-secondSide)*(semiPrimeter-thirdside))
         outputE7.innerText = " The Area of the triangle of sides " + firstSide + " , " + secondSide + " and " + thirdside + " is equal to" + AreaOfTriangle + " units"

     }
     else {
         outputE7.innerText = "Check your sides please! The sum of the two sides of a triangle should be grate than the third side."
     }

 }


 calculatebtn.addEventListener("click", calculationOfArea)




