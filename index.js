const display = document.getElementById("display");

document.addEventListener('keydown', function (event) {
    if (!isNaN(event.key) || "+-*/.".includes(event.key)) {
        appendToDisplay(event.key);
    }
    if (event.key === "Enter"){
        calculate();
    }
    if (event.key === "Backspace") {
        display.value = display.value.slice(0, -1);
    }
}) 

function appendToDisplay(input){
    if (!isNaN(input) || "+-*/.".includes(input)) {
        display.value += input;
    }
    
}

function calculate() {
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Erorr!"
    }
}

function clearDisplay() {
    display.value = "";
}