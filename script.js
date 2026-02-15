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