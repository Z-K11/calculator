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
function operate(a,b,operator)
{
    switch (operator) {
        case "/":
            ans = divide(a,b);
            break;
        case "*":
            ans=multiply(a,b);
            break;
        case "+":
            ans=sum(a,b);
            break;
        case "-":
            ans=subtract(a,b);
            break;
        default:
            alert('ERROR IN OPERATE FUNCTION');
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
    {id:'clear_key',text:"CE",},
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
console.table(numArray);
const operatorArray=createButtons(operators,operatorContainer,'operatorButtons');
console.table(operatorArray);
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
            alert('Clear');
            break;
        case "equate_key":
            alert('Equate!');
            break;
        default:
            return;
    }
    stack.push(num);
    display(stack);
}
);
const operator= document.querySelector("#operatorPad");
operator.addEventListener('click',e=>
{
    target=e.target;
    switch (target.id) {
        case 'divide':
            operatorValue='÷'
            break;
        case 'multiply':
            operatorValue='*'
            break;
        case 'add':
            operatorValue='*'
            break;
        case 'subtract':
            operatorValue='-'
            break;
        default:
            return;
    }
    console.log(operatorValue);
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