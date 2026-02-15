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
        case "-":
            ans=subtract(a,b);
        default:
            alert('ERROR IN OPERATE FUNCTION');
            break;
    }
}
const keyPadButtons =
[
    {id:'number_9',text:"9",},
    {id:'number_8',text:"8",},
    {id:'number_7',text:"7",},
    {id:'number_6',text:"6",},
    {id:'number_5',text:"5",},
    {id:'number_4',text:"4",},
    {id:'number_3',text:"3",},
    {id:'number_2',text:"2",},
    {id:'number_1',text:"1",},
    {id:'number_0',text:"0",},
    {id:'clearKey',text:"CE",},
    {id:'equateKey',text:"=",}

]
const keyPadNumbers = document.querySelector(".numbers");
const numArray = keyPadButtons.map(button=>
{
    const element=document.createElement('button');
    element.id=button.id;
    element.textContent=button.text;
    element.classList.add('padButtons');
    keyPadNumbers.appendChild(element);
    return element;
}
);
console.table(numArray);
const operators =
[
    {id:'divide',text:"÷"},
    {id:'multiply',text:"×"},
    {id:'add',text:"+"},
    {id:'subtract',text:"-"},
]
const operatorContainer = document.querySelector(".operators");
const operatorArray = operators.map(currentOperator=>
{
    const element=document.createElement("button");
    element.id=currentOperator.id;
    element.textContent=currentOperator.text;
    element.classList.add('operatorButtons');
    operatorContainer.appendChild(element);
    return element;
}
);
console.table(operatorArray);