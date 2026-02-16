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
    let b=stack.pop();
    const operator=stack.pop();
    let a=stack.pop();
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
const stack = [];
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
number.addEventListener('click',e =>
{
    target = e.target;
    switch (target.id) {
        case "number_9":
            num=9;
            break;
        case "number_8":
            num=8;
            break;
        case "number_7":
            num=7;
            break;
        case "number_6":
            num=6;
            break;
        case "number_5":
            num=5;
            break;
        case "number_4":
            num=4;
            break;
        case "number_3":
            num=3;
            break;
        case "number_2":
            num=2;
            break;
        case "number_1":
            num=1;
            break;
        case "number_0":
            num=0;
            break;
        case "clear_key":
            {
            stack.pop();
            display(stack);
            }
            return;
        case "equate_key":
            answer=operate(stack);
            console.log(answer);
            stack.push(answer);
            display(stack);
            checkIfOperatorAlreadyPressed=false;
            return;
        default:
            return;
    }
    stack.push(num);
    display(stack);
}
);
const operator= document.querySelector("#operatorPad");
checkIfOperatorAlreadyPressed = false;
operator.addEventListener('click',e=>
{
    target=e.target;
    switch (target.id) {
        case 'divide':
            if(checkIfOperatorAlreadyPressed)
            {
                answer=operate(stack);
                stack.push(answer);
                display(stack);
                console.table(stack);
                checkIfOperatorAlreadyPressed=false;   
            }
            operatorValue='÷';
            checkIfOperatorAlreadyPressed = true;
            console.log(checkIfOperatorAlreadyPressed);
            break;
        case 'multiply':
            if(checkIfOperatorAlreadyPressed)
            {
                answer=operate(stack);
                stack.push(answer);
                display(stack);
                console.table(stack);
                checkIfOperatorAlreadyPressed=false;   
            }
            operatorValue='×';
            checkIfOperatorAlreadyPressed = true;
            break;
        case 'add':
            if(checkIfOperatorAlreadyPressed)
            {
                answer=operate(stack);
                stack.push(answer);
                display(stack);
                console.table(stack);
                checkIfOperatorAlreadyPressed=false;   
            }
            operatorValue='+';
            checkIfOperatorAlreadyPressed = true;
            break;
        case 'subtract':
            if(checkIfOperatorAlreadyPressed)
            {
                answer=operate(stack);
                stack.push(answer);
                display(stack);
                console.table(stack);
                checkIfOperatorAlreadyPressed=false;   
            }
            operatorValue='-';
            checkIfOperatorAlreadyPressed = true;
            break;
        default:
            return;
    }
    stack.push(operatorValue);
    display(stack);
}
);
const displayId = document.querySelector('#display');
function display(displayStack)
{
    displayId.textContent = displayStack.join("");
    displayId.scrollLeft = displayId.scrollWidth;
}
