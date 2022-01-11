let total = 0;
inputNumber = 0;
while (inputNumber != -1) {
    inputNumber = Number(prompt("Enter a number"));
    alert("inputNumber: " + inputNumber);
    total += inputNumber;
}
alert("total is: " + total);