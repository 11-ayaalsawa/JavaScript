"use strict";

let x=prompt("Enter a number");
let y=prompt("Enter a number");
let z=prompt("Enter a number");

if (x%3==0 ||y%3==0 || z%3==0) {
    console.log("Fizz");
    x=("Fizz")
}
else if (x%5==0 ||y%5==0 || z%5==0) {
    console.log("Buzz");
    x=("Buzz")
}
else if ((x%3==0 && x%5==0) || (y%3==0 && y%5==0)  || (z%3==0 && z%5==0 )) {
    console.log( "Fizz Buzz");
    x=(" Fizz Buzz")
}
{document.getElementById("Buzz").innerHTML = x ;}