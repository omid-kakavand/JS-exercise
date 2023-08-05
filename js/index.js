

function calculator() {
    const firstNum = +prompt(`Enter number please `)
    const operator = prompt(`Enter your operator`)
    const secondNum = +prompt(`Enter secondry number please`)
    if (!isNaN(firstNum + secondNum)) {
        if (operator == '+') {
            console.log(firstNum + secondNum)
            return (firstNum + secondNum);
        }
        if (operator == '-') {
            console.log(firstNum - secondNum)
            return firstNum - secondNum;
        }
        if (operator == '*') {
            console.log(firstNum * secondNum)
            return firstNum * secondNum
        }
        if (operator == '/') {
            console.log(firstNum / secondNum)
            return firstNum / secondNum;
        }
    } else {
        console.log("Error: Enter ONLY Number! ")
    }
}
console.log(calculator())