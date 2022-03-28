"use strict";

let o = prompt("Enter Operation");
let num1 = prompt("Enter first number:");
let num2 = prompt("Enter second number:");

let N1 =Number(num1);
let N2 =Number(num2);

if (o=="+") {
    console.log(N1+N2);
    o=(N1+N2)
}
else if (o=="-"){
    console.log(N1-N2);
    o =(N1-N2)

}
else if (o=="*") {
    console.log(N1*N2);
    o =(N1*N2)

}
else if (o=="/") {
    console.log(N1/N2);
    o =(N1/N2)
}
{document.getElementById("num").innerHTML = o ;}