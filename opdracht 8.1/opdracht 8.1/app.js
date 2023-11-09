let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let output = document.getElementById("answer")


function multiply() {

    if (num1.value <= 0 || num2.value <= 0) {
        output.innerText = "Getal is niet mogelijk";
    }
    else {
        let answer = num1.value * num2.value;
        output.innerText = answer;
    }

}

function devide() {
    if (num1.value <= 0 || num2.value <= 0) {
        output.innerText = "Getal is niet mogelijk";
    }
    else {
        let answer = num1.value / num2.value;
        output.innerText = answer;
    }
}


function add() {
    if ( Number(num1.value) <= 0 ||Number(num2.value)   <= 0) {
        output.innerText = "Getal is niet mogelijk";
    }
    else {
        let answer = Number(num1.value) + Number(num2.value);
        output.innerText = answer;
    }

}

function minus() {
    if (num1.value <= 0 || num2.value <= 0) {
        output.innerText = "Getal is niet mogelijk";
    }
    else {
        let answer = num1.value - num2.value;
        output.innerText = answer;

    }


}



