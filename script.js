const global=
{
    stack : [],
    num : "",
    checkIfOperatorAlreadyPressed : false,
    inputForNum2 :false,

}
function divide(a,b)
{
    return a/b;
}
function multiply(a,b)
{
    return a*b;
}
function sum(a,b)
{
    return a+b;
}
function subtract(a,b)
{
    return a-b;
}
function operate(stack)
{
    let b=parseInt(stack.pop());
    const operator=stack.pop();
    let a=parseInt(stack.pop());
    let ans
    switch (operator) {
        case "÷":
            ans = divide(a,b);
            break;
        case "×":
            ans=multiply(a,b);
            break;
        case "+":
            ans=sum(a,b);
            break;
        case "-":
            ans=subtract(a,b);
            break;
        default:
            console.log(operator);
            break;
    }
    return ans;
}
const keyPadButtons =
[
    {id:'number_7',text:"7",},
    {id:'number_8',text:"8",},
    {id:'number_9',text:"9",},
    {id:'number_4',text:"4",},
    {id:'number_5',text:"5",},
    {id:'number_6',text:"6",},
    {id:'number_1',text:"1",},
    {id:'number_2',text:"2",},
    {id:'number_3',text:"3",},
    {id:'number_0',text:"0",},
    {id:'clear_key',text:"⌫",},
    {id:'equate_key',text:"=",}

]
const operators =
[
    {id:'divide',text:"÷"},
    {id:'multiply',text:"×"},
    {id:'add',text:"+"},
    {id:'subtract',text:"-"},
]
const keyPadNumbers = document.querySelector(".numbers");
const operatorContainer = document.querySelector(".operators");
function createButtons(array,parent,styleClass)
{
const buttonsArray = array.map(button=>
{
    const element=document.createElement('button');
    element.id=button.id;
    element.textContent=button.text;
    element.classList.add(styleClass);
    parent.appendChild(element);
    return element;
}
);
    return buttonsArray
}
const numArray=createButtons(keyPadButtons,keyPadNumbers,'padButtons');
const operatorArray=createButtons(operators,operatorContainer,'operatorButtons');
const backSpace = document.querySelector("#clear_key");
backSpace.style.fontSize='35px';
backSpace.style.fontWeight="100";
const number = document.querySelector('#numberPad');
function decideInputField()
{
    switch (global.inputForNum2) 
    {
        case false:
            global.stack[0]=global.num;
            break;
        case true:
            global.stack[2]=global.num;
            break;
        default:
            break;
    }
    display(global.stack);
}
function carryOutOperation()
{
            answer=operate(global.stack);
            console.log(answer);
            global.stack.push(answer);
            console.table(global.stack);
            display(global.stack);
}
number.addEventListener('click',e =>
{
   
    let target = e.target;
    switch (target.id) {
        case "number_9":
            global.num+=9;
            break;
        case "number_8":
            global.num+=8;
            break;
        case "number_7":
            global.num+=7;
            break;
        case "number_6":
            global.num+=6;
            break;
        case "number_5":
            global.num+=5;
            break;
        case "number_4":
            global.num+=4;
            break;
        case "number_3":
            global.num+=3;
            break;
        case "number_2":
            global.num+=2;
            break;
        case "number_1":
            global.num+=1;
            break;
        case "number_0":
            global.num+=0;
            break;
        case "clear_key":
            {
            global.num=global.num.slice(0,-1);
            decideInputField();
            }
            return;
        case "equate_key":
            carryOutOperation();
            global.checkIfOperatorAlreadyPressed=false;
            return;
        default:
            return;
    }
    decideInputField();
}
);
const operator= document.querySelector("#operatorPad");
operator.addEventListener('click',e=>
{
    let operatorValue;
    let target=e.target;
    switch (target.id) {
        case 'divide':
            if(global.checkIfOperatorAlreadyPressed)
            {
                carryOutOperation();
                global.checkIfOperatorAlreadyPressed=false;   
            }
            operatorValue='÷';
            global.checkIfOperatorAlreadyPressed = true;
            console.log(global.checkIfOperatorAlreadyPressed);
            break;
        case 'multiply':
            if(global.checkIfOperatorAlreadyPressed)
            {
                carryOutOperation();
                global.checkIfOperatorAlreadyPressed=false;   
            }
            operatorValue='×';
            global.checkIfOperatorAlreadyPressed = true;
            break;
        case 'add':
            if(global.checkIfOperatorAlreadyPressed)
            {
                carryOutOperation();
                global.checkIfOperatorAlreadyPressed=false;   
            }
            operatorValue='+';
            global.checkIfOperatorAlreadyPressed = true;
            break;
        case 'subtract':
            if(global.checkIfOperatorAlreadyPressed)
            {
                carryOutOperation();
                global.checkIfOperatorAlreadyPressed=false;   
            }
            operatorValue='-';
            global.checkIfOperatorAlreadyPressed = true;
            break;
        default:
            return;
    }
    global.stack.push(operatorValue);
    display(global.stack);
    global.num="";
    global.inputForNum2=true;
}
);
const displayId = document.querySelector('#display');
function display(displayStack)
{
    displayId.textContent = displayStack.join("");
    displayId.scrollLeft = displayId.scrollWidth;
}
