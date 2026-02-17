const global=
{
    stack : [],
    num : "",
    checkIfOperatorAlreadyPressed : false,
    inputForNum2 :false,
    equate : false,
    clearPressed : false,

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
            if(isNaN(answer))
            {
                displayId.textContent="Syntax Error"
                global.stack.length=0;
            }
            console.log(answer);
            global.stack.push(answer);
            console.table(global.stack);
            display(global.stack);
}
number.addEventListener('click',e =>
{
    target = e.target
   if(target.classList.contains('padButtons'))
   {
    if(target.id==="clear_key")
    {
        console.log("clear");
        global.stack.length=0;
        display(global.stack);
        decideInputField();
        return;
    }
    if(target.id==='equate_key')
    {
        console.log("equate");
        if(global.stack.length<3)
        {
            if(global.checkIfOperatorAlreadyPressed)
            {
                global.stack.length=0;
                displayId.textContent="Syntax Error"
                return;
            }
            global.stack.length=1;
            display(global.stack);
            return;
        }
        carryOutOperation();
        global.checkIfOperatorAlreadyPressed=false;
        return;
    }
    global.num+=target.textContent;
    decideInputField();
   }});
const operator= document.querySelector("#operatorPad");
operator.addEventListener('click',e=>
{
    if(global.clearPressed)
    {
        global.clearPressed = false;
        
    }
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
