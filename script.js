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
const keyPadNumbers = document.querySelector("#numbers");
numArray=[];
for (let i =12;i>0;i--)
{
    numArray[12-i]=document.createElement("div");
    if(i>2)
        numArray[12-i].setAttribute("id",`number_${i-3}`);
    if(i<=2)
    numArray[12-i].setAttribute("id",`specialKey_${i}`);
}