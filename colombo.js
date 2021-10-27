let operationButtons = document.getElementsByClassName('buttons');  //get all the buttons

for (let i=0;i<operationButtons.length;i++){
    operationButtons[i].addEventListener('click',onOperationButtonClick);}  //set an event listener for all the buttons



let calc__display = document.querySelector('.calc__display')/* .addEventListener("change", checkForLetters) */; 
let calc_history = document.querySelector('.calc__history');

let displayValue = '';
let firstNum = '';
let secondNum = '';
let result = '';
let selectedAction = '';





function checkForLetters (){
/* 
  let a =  getdisplayValue()
if (Number(a)===Number){console.log("Number")}
else {console.log("Not a Number")}
 */
}
 



function onOperationButtonClick(eventObject){
let clickedElement = eventObject.currentTarget.innerHTML     //current target is an object-list about event what happend

if(clickedElement==="C"){
    calc__display.value = '';
    calc_history.innerHTML ='';
    firstNum = '';
    secondNum = '';
}

else if(clickedElement==="+/-"){
    if(getdisplayValue()[0]=="-"){calc__display.value = getdisplayValue().slice(1);}    //removes first simbol from the string
    else if(getdisplayValue()[0]!=="-"){calc__display.value = "-"+displayValue}
   }

   else if(clickedElement==="DEL"){
    calc__display.value = getdisplayValue().slice(0,displayValue.length-1);    //function is used to extract parts of a string between the given parameters. The slice() method takes the starting index and the ending index of the string and returns the string in between these indices 
}

else if(clickedElement==="."){
    calc__display.value = getdisplayValue()+clickedElement;
    console.log(typeof clickedElement);
   let a = getdisplayValue().indexOf('.');  //find the first dot
   let b = getdisplayValue().indexOf(".", ++a); // try to find the second dot=> if found remove it
   if (b > -1) {calc__display.value = getdisplayValue().slice(0,displayValue.length-1);}
}

////---------------------------


else if(clickedElement==="+"){
    if (selectedAction !==""){secondIteractionCalculation(clickedElement);}  
else{firstIteractionCalculation(clickedElement);}
}


else if(clickedElement==="-"){
    if (selectedAction !==""){secondIteractionCalculation(clickedElement);}  
else{firstIteractionCalculation(clickedElement);}
}


else if(clickedElement==="x"){
    if (selectedAction !==""){secondIteractionCalculation('*');}  
else{firstIteractionCalculation('*');}
}


else if(clickedElement==="/"){
    if (selectedAction !==""){secondIteractionCalculation(clickedElement);}  
else{firstIteractionCalculation(clickedElement);}
}


////=======================================================
else if(clickedElement==="="){
 equal();
 }

 else{ 
     let maxChar = 10;
     if(calc__display.value.length<=maxChar-1){calc__display.value = getdisplayValue()+clickedElement;}
     else{return}
}


function equal(){
    secondNum = Number(getdisplayValue());
    if(selectedAction==='+'){add();}
    else if(selectedAction==='-'){substruct();}
   else if(selectedAction==='*'){multiply();}
else if(selectedAction==='/'){divide();}
}

////----------------------

function add(){result = firstNum+secondNum
    calc__display.value = result
    showHistory(clickedElement);
secondNum = '';
firstNum = result;
selectedAction = '';
}

function substruct(){
    result = firstNum-secondNum
    calc__display.value = result
    showHistory(clickedElement);
    secondNum = '';
    firstNum = result;
    selectedAction = '';
}

function multiply(){
    result = firstNum*secondNum
    calc__display.value = result
    showHistory(clickedElement);
    secondNum = '';
    firstNum = result;
    selectedAction = '';
}

function divide (){
    if (secondNum == 0){calc__display.value = "do not divide by zero"}
    else{    result = firstNum/secondNum;
        calc__display.value = result;
        showHistory(clickedElement);
        secondNum = '';
        firstNum = result;
selectedAction = '';
}
}

////=============================================================

function firstIteractionCalculation(clickedElement){
    firstNum = Number(getdisplayValue());
    selectedAction = clickedElement;
    calc__display.value = '';
    showHistory(clickedElement);
}

function secondIteractionCalculation(clickedElement){
    equal();
    calc__display.value = '';
     selectedAction = clickedElement;
      showHistory(clickedElement);
}


function getdisplayValue(){
    displayValue = calc__display.value;
    return displayValue;
}


function showHistory(clickedElement){
    if (calc_history.innerHTML.includes('=')){calc_history.innerHTML = `${result} ${clickedElement}`}
    else if (secondNum ==''){calc_history.innerHTML = `${firstNum} ${clickedElement}`}
    else if (secondNum !==''){calc_history.innerHTML = `${calc_history.innerHTML} ${secondNum} =`}
    }
}


















/*  

 if (number === '.' && this.currentOperand.includes('.')) return    another way to check for a dot  // where number is a pressed key and "this.currentOperand" is the value what entered in the screen.
 
function checkIfNum(){console.log("guvno")
 let regex = /[^0-9]/g;
     calc__display.value = calc__display.value.replace(regex,""); 

 */
