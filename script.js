let display = document.getElementById('display');
// display.value = 0;

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    display.value = eval(display.value);
}