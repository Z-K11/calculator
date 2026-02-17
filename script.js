const global=
{
    stack : [],
    num : "",
    checkIfOperatorAlreadyPressed : false,
    inputForNum2 :false,
    equate : false,

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
    if(stack.length!==3)
    {
        return NaN;
    }
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
    {id:'clear_key',text:"AC",},
    {id:'equate_key',text:"=",}

]
const operators =
[
    {id:'divide',text:"÷"},
    {id:'multiply',text:"×"},
    {id:'add',text:"+"},
    {id:'subtract',text:"-"},
];
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
            let answer=operate(global.stack);
            if(isNaN(answer))
            {
                alert("Syntax Error");
                location.reload();
                return;
            }
            global.stack.push(answer);
            display(global.stack);
}


const keyPadNumbers = document.querySelector(".numbers");
const operatorContainer = document.querySelector(".operators");
const numArray=createButtons(keyPadButtons,keyPadNumbers,'padButtons');
const operatorArray=createButtons(operators,operatorContainer,'operatorButtons');


const number = document.querySelector('#numberPad');

number.addEventListener('click',e =>
{
    target = e.target
   if(target.classList.contains('padButtons'))
   {
    if(target.id==="clear_key")
    {
        console.log("clear");
        global.stack.length=0;
        global.num='';
        display(global.stack);
        global.checkIfOperatorAlreadyPressed=false;
        global.inputForNum2=false;
        return;
    }
    if(target.id==='equate_key')
    {
        console.log("equate");
        if(global.stack.length<3)
        {
            if(global.checkIfOperatorAlreadyPressed)
            {
                alert("Syntax Error");
                location.reload();
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
    let operatorValue;
    let target=e.target;
    if (global.stack.length===0 )
    {
        alert("syntax error");
        location.reload();
    }
    if(target.classList.contains('operatorButtons'))
    {
        if(global.stack.length===3 )
        {
            carryOutOperation();
            global.stack[1]=target.textContent;
            display(global.stack);
            global.num="";
            global.inputForNum2=true;
            return;
        }
        if(global.checkIfOperatorAlreadyPressed)
        {
            alert("Syntax Error");
            location.reload();
        }
        global.checkIfOperatorAlreadyPressed=true;
        operatorValue=target.textContent;
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
    console.log(displayStack);
    displayId.scrollLeft = displayId.scrollWidth;
}
