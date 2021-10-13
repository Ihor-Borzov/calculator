let buttonC = document.querySelector('.calc__button_C');
let buttonPlus_minus = document.querySelector('.calc__button_plus-slash-minus');
let buttonDivide = document.querySelector('.calc__button_divide');
let buttonMultiply = document.querySelector('.calc__button_x');

let button7 = document.querySelector('.calc__button_7');
let button8 = document.querySelector('.calc__button_8');
let button9 = document.querySelector('.calc__button_9');
let buttonDeduct = document.querySelector('.calc__button_-');

let button4 = document.querySelector('.calc__button_4');
let button5 = document.querySelector('.calc__button_5');
let button6 = document.querySelector('.calc__button_6');
let buttonPlus = document.querySelector('.calc__button_plus');

let button1 = document.querySelector('.calc__button_1');
let button2 = document.querySelector('.calc__button_2');
let button3 = document.querySelector('.calc__button_3');

let button0 = document.querySelector('.calc__button_0');
let buttonPoint = document.querySelector('.calc__button_point');
let buttonDel = document.querySelector('.calc__button_del');
let buttonEqual = document.querySelector('.calc__button_equal');

let calc__display = document.querySelector('.calc__display'); 
let calc_history = document.querySelector('.calc__history');

let displayValue = '';
let firstNum = '';
let secondNum = '';
let result = '';
let selectedAction = '';

buttonC.addEventListener('click',onOperationButtonClick);
buttonPlus_minus.addEventListener('click',onOperationButtonClick);
buttonDivide.addEventListener('click',onOperationButtonClick);
buttonMultiply.addEventListener('click',onOperationButtonClick);

button7.addEventListener('click',onOperationButtonClick);
button8.addEventListener('click',onOperationButtonClick);
button9.addEventListener('click',onOperationButtonClick);
buttonDeduct.addEventListener('click',onOperationButtonClick);

button4.addEventListener('click',onOperationButtonClick);
button5.addEventListener('click',onOperationButtonClick);
button6.addEventListener('click',onOperationButtonClick);
buttonPlus.addEventListener('click',onOperationButtonClick);

button1.addEventListener('click',onOperationButtonClick);
button2.addEventListener('click',onOperationButtonClick);
button3.addEventListener('click',onOperationButtonClick);

button0.addEventListener('click',onOperationButtonClick);
buttonPoint.addEventListener('click',onOperationButtonClick);
buttonDel.addEventListener('click',onOperationButtonClick);
buttonEqual.addEventListener('click',onOperationButtonClick);




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
     
    calc__display.value = getdisplayValue()+clickedElement;}


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
    displayValue = calc__display.value
    return displayValue
}


function showHistory(clickedElement){
    if (calc_history.innerHTML.includes('=')){calc_history.innerHTML = `${result} ${clickedElement}`}
    else if (secondNum ==''){calc_history.innerHTML = `${firstNum} ${clickedElement}`}
    else if (secondNum !==''){calc_history.innerHTML = `${calc_history.innerHTML} ${secondNum} =`}
    }
}




































/* 
let buttonC = document.querySelector('.calc__button_C');
let buttonPlus_minus = document.querySelector('.calc__button_plus-slash-minus');
let buttonDivide = document.querySelector('.calc__button_divide');
let buttonMultiply = document.querySelector('.calc__button_x');

let button7 = document.querySelector('.calc__button_7');
let button8 = document.querySelector('.calc__button_8');
let button9 = document.querySelector('.calc__button_9');
let buttonDeduct = document.querySelector('.calc__button_-');

let button4 = document.querySelector('.calc__button_4');
let button5 = document.querySelector('.calc__button_5');
let button6 = document.querySelector('.calc__button_6');
let buttonPlus = document.querySelector('.calc__button_plus');

let button1 = document.querySelector('.calc__button_1');
let button2 = document.querySelector('.calc__button_2');
let button3 = document.querySelector('.calc__button_3');

let button0 = document.querySelector('.calc__button_0');
let buttonPoint = document.querySelector('.calc__button_point');
let buttonDel = document.querySelector('.calc__button_del');
let buttonEqual = document.querySelector('.calc__button_equal');

let calc__display = document.querySelector('.calc__display'); 
let calc_history = document.querySelector('.calc__history');
let displayValue
let firstNum = '';
let secondNum = '';
let result
let selectedAction

buttonC.addEventListener('click',onOperationButtonClick);
buttonPlus_minus.addEventListener('click',onOperationButtonClick);
buttonDivide.addEventListener('click',onOperationButtonClick);
buttonMultiply.addEventListener('click',onOperationButtonClick);

button7.addEventListener('click',onOperationButtonClick);
button8.addEventListener('click',onOperationButtonClick);
button9.addEventListener('click',onOperationButtonClick);
buttonDeduct.addEventListener('click',onOperationButtonClick);

button4.addEventListener('click',onOperationButtonClick);
button5.addEventListener('click',onOperationButtonClick);
button6.addEventListener('click',onOperationButtonClick);
buttonPlus.addEventListener('click',onOperationButtonClick);

button1.addEventListener('click',onOperationButtonClick);
button2.addEventListener('click',onOperationButtonClick);
button3.addEventListener('click',onOperationButtonClick);

button0.addEventListener('click',onOperationButtonClick);
buttonPoint.addEventListener('click',onOperationButtonClick);
buttonDel.addEventListener('click',onOperationButtonClick);
buttonEqual.addEventListener('click',onOperationButtonClick);




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
   let a = getdisplayValue().indexOf('.');  //find the first dot
   let b = getdisplayValue().indexOf(".", ++a); // try to find the second dot=> if found remove it
   if (b > -1) {calc__display.value = getdisplayValue().slice(0,displayValue.length-1);}
}

////---------------------------


else if(clickedElement==="+"){
    if (selectedAction == clickedElement){secondIteractionCalculation(clickedElement);}  
else{firstIteractionCalculation(clickedElement);}
}


else if(clickedElement==="-"){
    if (selectedAction == clickedElement){secondIteractionCalculation(clickedElement);}  
else{firstIteractionCalculation(clickedElement);}
}


else if(clickedElement==="x"){
    if (selectedAction == clickedElement){secondIteractionCalculation('*');}  
else{firstIteractionCalculation('*');}
}


else if(clickedElement==="/"){
    if (selectedAction == clickedElement){secondIteractionCalculation(clickedElement);}  
else{firstIteractionCalculation(clickedElement);}
}


////=======================================================
else if(clickedElement==="="){
 equal();
 }

 else{ 
     
    calc__display.value = getdisplayValue()+clickedElement;}


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
    displayValue = calc__display.value
    return displayValue
}


function showHistory(clickedElement){
    if (calc_history.innerHTML.includes('=')){calc_history.innerHTML = `${result} ${clickedElement}`}
    else if (secondNum ==''){calc_history.innerHTML = `${firstNum} ${clickedElement}`}
    else if (secondNum !==''){calc_history.innerHTML = `${calc_history.innerHTML} ${secondNum} =`}
    }
}

 */