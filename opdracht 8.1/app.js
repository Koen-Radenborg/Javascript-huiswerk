let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let output = document.getElementById("answer")


function multiply() {
   let answer = num1.value * num2.value
output.innerText = answer;
  
    
}

function devide() {
    let answer = num1.value / num2.value
output.innerText = answer;
 
}

function add() {
    let answer = Number(num1.value) + Number(num2.value)
    output.innerText = answer;

}

function minus() {
    let answer = num1.value - num2.value
output.innerText = answer;
    
}

