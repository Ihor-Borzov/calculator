let operationButtons = document.getElementsByClassName('buttons');  //get all the buttons

for (let i = 0; i < operationButtons.length; i++) {
    operationButtons[i].addEventListener('click', onOperationButtonClick);
}  //set an event listener for all the buttons



let calc__display = document.querySelector('.calc__display');
calc__display.addEventListener("keyup", onKeyboardButtonClick);
let calc_history = document.querySelector('.calc__history');

let displayValue = '';
let firstNum = "";
let secondNum = "";
let result = '';
let selectedAction = '';
let clickedElement = '';





function onKeyboardButtonClick(event) {
    let ev = event.key; console.log(ev);

    if (ev === 'Enter') {
        clickedElement = "="; runTheCalc(clickedElement);
    }

    else if(ev==='Escape'){runTheCalc("C")}


    else if (ev == ".") {
        let a = calc__display.value.split("");
        let firstDot = a.indexOf('.');
        if (firstDot == 0) {a.unshift('0'); calc__display.value=a.join('');firstDot = a.indexOf('.'); }
        for (let j =firstDot+1; j <= a.length - 1;j++) {
            if (a[j] == ".") { a.splice(j, 1);  --j;} 
        } 
        calc__display.value = a.join("");
    }


    else if (ev == "/" || ev == "*" || ev == "-" || ev == "+") {
        let a = calc__display.value.split("");
        for (let j = a.length - 1; j >= 0; j--) {
            if (a[j] == ev) {
                clickedElement = a.splice(j, 1).join("");
                calc__display.value = a.join("");
            }
        }
        runTheCalc(clickedElement);
    }


    else {
        let regex = new RegExp('^[0-9\.\-]$');
        let a = calc__display.value.split("");  //  divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.
        for (let i = a.length - 1; i >= 0; i--) {                           //reverse loop
            if (regex.test(a[i]) === true) { }
            else {
                a.splice(i, 1);                 //this is the way we can remove an element from an array (first digit is position from what we want to remove and second digit is amount of positions we want to remove)       
                calc__display.value = a.join("");
            }
        }
    }
}


function onOperationButtonClick(eventObject) {
    clickedElement = eventObject.currentTarget.innerHTML;     //current target is an object-list about event what happend
    runTheCalc(clickedElement);
}



function runTheCalc(clickedElement) {

    if (clickedElement === "C") {
        calc__display.value = '';
        calc_history.innerHTML = '';
        firstNum = "";
        secondNum = "";
        selectedAction = "";
    }

    else if (clickedElement === "+/-") {
        if (getdisplayValue()[0] == "-") { calc__display.value = getdisplayValue().slice(1); }    //removes first simbol from the string
        else if (getdisplayValue()[0] !== "-") { calc__display.value = "-" + displayValue }
    }

    else if (clickedElement === "DEL") {
        calc__display.value = getdisplayValue().slice(0, displayValue.length - 1);    //function is used to extract parts of a string between the given parameters. The slice() method takes the starting index and the ending index of the string and returns the string in between these indices 
    }

    else if (clickedElement === ".") {
        calc__display.value = getdisplayValue() + clickedElement;
        let a = getdisplayValue().indexOf('.');  //find the first dot
        let c = a + 1;
        let b = getdisplayValue().indexOf(".", c); // try to find the second dot=> if found remove it
        if (b > -1) { calc__display.value = getdisplayValue().slice(0, displayValue.length - 1); }
        if (a == 0) { calc__display.value = "0."; }
    }

    ////---------------------------


    else if (clickedElement === "+") {
        if (selectedAction !== "") { secondIteractionCalculation(clickedElement); }
        else { firstIteractionCalculation(clickedElement); }
    }


    else if (clickedElement === "-") {
        if (selectedAction !== "") { secondIteractionCalculation(clickedElement); }
        else { firstIteractionCalculation(clickedElement); }
    }


    else if (clickedElement === "x" || clickedElement === "*") {
        if (selectedAction !== "") { secondIteractionCalculation('*'); }
        else { firstIteractionCalculation('*'); }
    }


    else if (clickedElement === "/") {
        if (selectedAction !== "") { secondIteractionCalculation(clickedElement); }
        else { firstIteractionCalculation(clickedElement); }
    }


    ////=======================================================
    else if (clickedElement === "=") {
        equal();
    }

    else {
        let maxChar = 10;
        if (calc__display.value.length <= maxChar - 1) { calc__display.value = getdisplayValue() + clickedElement; }
        else { return }
    }


    function equal() {
        if (getdisplayValue() == "") { return }  // to prevent empty input field become 0 when we pars it to a number in the next string.
        if (isNaN(getdisplayValue())) { return; }
        secondNum = Number(getdisplayValue());
        if (selectedAction === '+') { add(); }
        else if (selectedAction === '-') { substruct(); }
        else if (selectedAction === '*') { multiply(); }
        else if (selectedAction === '/') { divide(); }
    }

    ////----------------------

    function add() {
        result = firstNum + secondNum
        calc__display.value = result
        showHistory(clickedElement);
        secondNum = '';
        if (clickedElement!=="="){  firstNum = result;} else{firstNum="";}
        selectedAction = '';
    }

    function substruct() {
        result = firstNum - secondNum
        calc__display.value = result
        showHistory(clickedElement);
        secondNum = '';
        if (clickedElement!=="="){  firstNum = result;} else{firstNum="";}
        selectedAction = '';
    }

    function multiply() {
        result = firstNum * secondNum;
        calc__display.value = result;
        showHistory(clickedElement);
        secondNum = '';
        if (clickedElement!=="="){  firstNum = result;} else{firstNum="";}
        selectedAction = '';
    }

    function divide() {
        if (secondNum == 0) { calc__display.value = "do not divide by zero" }
        else {
            result = firstNum / secondNum;
            calc__display.value = result;
            showHistory(clickedElement);
            secondNum = '';
            if (clickedElement!=="="){  firstNum = result;} else{firstNum="";}
            selectedAction = '';
        }
    }

    ////=============================================================

    function firstIteractionCalculation(clickedElement) {
        firstNum = Number(getdisplayValue());
        if (isNaN(firstNum)) { return; }
        selectedAction = clickedElement;
        calc__display.value = '';
        showHistory(clickedElement);
    }

    function secondIteractionCalculation(clickedElement) {
        equal();
        calc__display.value = '';
        selectedAction = clickedElement;
        showHistory(clickedElement);
    }


    function getdisplayValue() {
        displayValue = calc__display.value;
        return displayValue;
    }


    function showHistory(clickedElement) {
        if (calc_history.innerHTML.includes('=')) { calc_history.innerHTML = `${firstNum} ${clickedElement}` }
        else if (secondNum == '') { calc_history.innerHTML = `${firstNum} ${clickedElement}` }
        else if (secondNum !== '') { calc_history.innerHTML = `${calc_history.innerHTML} ${secondNum} =` }
    }
}








/*  // checks only for the last character
let a = calc__display.value.split("");  //  divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.
let lastNum = a.pop();
let regex = new RegExp('^[0-9]$');
if((regex.test(lastNum)) === true){a.push(lastNum);}
calc__display.value = a.join("");
console.log("groove") */


/*
 if (number === '.' && this.currentOperand.includes('.')) return    another way to check for a dot  // where number is a pressed key and "this.currentOperand" is the value what entered in the screen.

 */
