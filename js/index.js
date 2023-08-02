
/* const firstNum = +prompt(`Enter number please `)
if (isNaN(firstNum)) {
    alert("Error: enter first number only NUMBER!")
} else {
    alert("OK ... thanks ")
}

const operator = prompt(`Enter your operator`)
if (operator != `+` && operator != `-` && operator != `*` && operator != `/`) {
    alert("Error: you enter a mistake operato! ")
} else {
    alert("OK ... thanks ")
}

const secondNum = +prompt(`Enter secondry number please`)
if (isNaN(secondNum)) {
    alert("Error: Enter second number correct!")
} else {
    alert("OK ... thanks ")
}

result = secondNum + operator + firstNum;
console.log(result);
alert(result); */

const firstNum = +prompt(`Enter number please `)
const operator = prompt(`Enter your operator`)
const secondNum = +prompt(`Enter secondry number please`)

switch (operator) {
    case "+":
        console.log(firstNum + secondNum);
        break
    case "-":
        console.log(firstNum-secondNum);
        break;
    case "/":
        console.log(firstNum/secondNum);
        break;
    case "*":
        case "*":
        console.log(firstNum * secondNum);
        break;
    default:
        console.log("inser operator correct ! ");
}

