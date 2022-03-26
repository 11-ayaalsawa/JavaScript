"use strict";



// Task1
// Write a function named tellFortune that:
// takes 4 arguments: number of children,
// partner's name, geographic location, job title.
// outputs your fortune to the screen like so:
// "You will be a X in Y, and married to Z with N kids."

// Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
// => "You will be a software engineer in Jordan, and married to Alice with 3 kids."

function tellFortune(x,y,z,n){
    return (`You will be a ${x} in ${y}, and married to ${z} with ${n} kids.`)

} 



document.getElementById("p1").innerHTML=tellFortune('software engineer', 'Jordan', 'Alice', 3);



// Task2
// Write a function named calculateDogAge that:
// takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion
// rate of 1 human year to 7 dog years.
// outputs the result to the screen like so:
// "Your doggie is NN years old in dog years!"

// Ex: calculateDogAge(1);
// => "Your doggie is 7 years old in dog years!"

function calculateDogAge(NN){
    let age=NN*7;
    return `Your doggie is ${age} years old in dog years! `

}

document.getElementById("p2").innerHTML=calculateDogAge(1);






// Task3
// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age 100).
// outputs the result to the screen like so:
// "You will need NN to last you until the ripe old age of X"

// Ex: calculateSupply(30, 3);
// => 'You will need 76650 cups of tea to last you until the ripe old age of 100;

function  calculateSupply(NN,x){
  let age=(100-NN);
  let tea=((age*365)*x);

  return `You will need ${tea} cups of tea to last you until the ripe old age of 100.`

}

document.getElementById("p3").innerHTML= calculateSupply(30, 3);


// Task4
// Write a function called greet that:
// takes 1 argument: name.
// and it will return hello + name

// Ex: greet("Adam")
// => "Hello Adam"

function greet(name){
  return `Hello ${name}!`

}

document.getElementById("p4").innerHTML= greet("Aya");




// Task5
// what is the error:
function double(x) {
  return 2 * x;
}


function double(x=7) {
  return 2 * x;
}

function double(s) {
  return 2 * '7';
}

document.getElementById("p5").innerHTML= double();









// Task6
// fix these functions:
function double1(x) {
  return (2 * x) ;
}

function double2 (x){
return 2 * x;
}

function double3 (x) {
  return 2 * x;
}

document.getElementById("p6").innerHTML= double1(1)+" , "+ double2(2)+" , "+ double3(3);



// Task7
// Write a function called cube that:
// accept 1 parameter and calculate the cube of this number

// Ex: cube(4)
// => 64

function cube(c){
   let cub=(c*c*c);
   return cub;

}


document.getElementById("p7").innerHTML=cube(4) ;






// Task8
// Write a function called multiply that:
// accept 2 parameters and calculate the multiply of these 2 numbers

// Ex: multiply(3,4)
// => 12
// Ex: multiply(5,4)
// => 20

function multiply(num1 , num2){
  return num1*num2
}

document.getElementById("p8").innerHTML=multiply(3,4)+" , "+multiply(5,4) ;



// Task9
// Write a function called canIGetADrivingLicense that:
// accept 1 parameter represent the age
// and if the age greater than or equal to 20 return "yes you can"
// otherwise return "please come back after X years to get one"

// Ex: canIGetADrivingLicense(21)
// => "yes you can"

// Ex: canIGetADrivingLicense(17)
// => "please come back after 3 years to get one"

// Ex: canIGetADrivingLicense(20)
// => "yes you can"

function canIGetADrivingLicense(age){
  if (age >= 20){
    return `Yes You Can`
  }

  else {
   return `please come back after 3 years to get one`
  }
  
} 


document.getElementById("p9").innerHTML= canIGetADrivingLicense(21)+" , "+ canIGetADrivingLicense(17);





// Task10
// Write a function called sameLength
// that accepts two strings as arguments,
// and returns true if those strings have the same length, and false otherwise.

// **hint: how we can know string length   Ex: : "tree".length   => 4

// Ex: sameLength("tree","clue")
// => true

// Ex: sameLength("tree","car")
// => false

function sameLength( t, c){
if ((t.length)==(c.length)){
  return (true);
}
else {
  return (false);
}
}

document.getElementById("p10").innerHTML=  sameLength("tree","clue")+" , "+ sameLength("tree","car")  ;





// Task11
// Write a function called largerNubmer
// that accept two numbers as arguments,
// and return the first larger numbers

// Ex: largerNubmer(5,6)
// => 6

// Ex: largerNubmer(5,3)
// => 5

function largerNubmer(n1, n2){
  if (n1 > n2) {
    return n1;
  }
  else{
    return n2;
  }

} 

document.getElementById("p11").innerHTML= largerNubmer(5,6) +" , "+ largerNubmer(5,3)  ;





// Task12
// Write a function called smallerNubmer
// that accept three numbers as arguments,
// and return the first smaller number

// Ex: smallerNubmer(8,6,7)
// => 6

// Ex: smallerNubmer(5,99,34)
// => 5

// Ex: smallerNubmer(5,99,3)
// => 3

// Ex: smallerNubmer(5,3,3)
// => 3

function smallerNubmer(a,b,c){

  if ((a<b) && (a<c)){
    return a;
  }
  else if ((b<a) && (b<c)) {
    return b;
  }

  else ((c<a) && (c<b)); {
    return c;
  }

}

document.getElementById("p12").innerHTML= smallerNubmer(8,6,7) +" , "+ smallerNubmer(5,99,34)+" , "+ smallerNubmer(5,99,3) +" , "+ smallerNubmer(5,3,3) ;






// Task13
// Write a function called shorterString
// that accept five string as an arguments,
// and return the first shorter string

// Ex: shorterString("air","school","car","by","github")
// => by

// Ex: shorterString("air","tr","car","by","github")
// => tr

// Ex: shorterString("by","tr","car","air","github")
// => by

// Ex: shorterString("air","by","car","school","github")
// => by

// Ex: shorterString("air","tr","by","car","github")
// => by

// Ex: shorterString("air","tr","car","github","by")
// => by

function shorterString(a,b,c,d,e) {
 if (((a.length)<(b.length))&&((a.length)<(c.length)&& ((a.length)<(d.length))&& ((a.length)<(e.length)))) {
   return a;
  
 }
 else if ((b.length)<(a.length)&& ((b.length)<(c.length))&&((b.length)<(d.length))&&((b.length)<(e.length))){
   return b;
 }
 else  if  ((c.length)<(a.length)&& ((c.length)<(b.length))&&((c.length)<(d.length))&&((c.length)<(e.length))){
   return c;
 }
 else if  ((d.length)<(a.length)&& ((d.length)<(b.length))&&((d.length)<(c.length))&&((d.length)<(e.length))) {
   return d;
 }
 else {
   return e;
 }

}
document.getElementById("p13").innerHTML= shorterString("air","school","car","by","github");






// Task14
// Write a function called longerString
// that accept four string as an arguments,
// and return the first longer string

// Ex: longerString("air","school","car","github")
// => school

// Ex: longerString("air","schoo","car","github")
// => github

// try all the cases (change the order of the longestString)

function longerString(a,b,c,d,e) {
  if (((a.length)>(b.length))&&((a.length)>(c.length)&& ((a.length)>(d.length))&& ((a.length)>(e.length)))) {
    return a;
   
  }
  else if ((b.length)>(a.length)&& ((b.length)>(c.length))&&((b.length)>(d.length))&&((b.length)>(e.length))){
    return b;
  }
  else  if  ((c.length)>(a.length)&& ((c.length)>(b.length))&&((c.length)>(d.length))&&((c.length)>(e.length))){
    return c;
  }
  else if  ((d.length)>(a.length)&& ((d.length)>(b.length))&&((d.length)>(c.length))&&((d.length)>(e.length))) {
    return d;
  }
  else {
    return e;
  }
 
 }
 document.getElementById("p14").innerHTML= longerString("air","school","car","by","github");



// Task15
// Write a function called isEven
// that accept 1 argument as a number,
// and return true if this number is even
// and false if this number is odd

// Ex: isEven(1)
// => false
// Ex: isEven(2)
// => true

function isEven(E){
  if (E%2==0){
    return true;
  }
  else {
    return false;
  }

}

document.getElementById("p15").innerHTML= isEven(1)+" , "+  isEven(2);


// Task16
// Write a function called isOdd
// that accept 1 argument as a number,
// and return true if this number is Odd
// and false if this number is Even

// Ex: isOdd(4)
// => false
// Ex: isOdd(5)
// => true



function isOdd(O){
  if (O%2 !==0){
    return true;
  }
  else {
    return false;
  }

}

document.getElementById("p16").innerHTML= isOdd(4)+" , "+  isOdd(5);




// Task17
// Write a function called positive
// that accept 1 argument as a number,
// and return the positive version of the number passed

// Ex: positive(4)
// => 4
// Ex: positive(-5)
// => 5
function positive(P) {
  if (P>0){
    return P;
  }

  else {
    return (P*-1)
  }
}

document.getElementById("p17").innerHTML=positive(4) +" , "+ positive(-5) ;







// Task18
// Write a function called fullName
// that accept two parameters, firstName and lastName,
// and returns the firstName and lastName concatenated
// together with a space in between.

// Ex: fullName("Adam","McCallen")
// => "Adam McCallen"
// Ex: fullName("Alex", "Mercer")
// => "Alex Mercer"

function fullName(name1 , name2){
  return name1+" "+name2;

} 

document.getElementById("p18").innerHTML= fullName("Adam","McCallen") +" , "+fullName("Alex", "Mercer") ;


// Task19
// Write a function called average
// that takes five numbers as inputs
// and returns the average of those numbers.

// Ex: average(1,2,3,4,5)
// => 3

// Ex: average(5,7,9,3,5)
// => 5.8

function average(A,B,C,D,E){
  let sum=(A+B+C+D+E);
  return sum/5;
}

document.getElementById("p19").innerHTML=  average(1,2,3,4,5) +" , "+ average(5,7,9,3,5) ;



// Task20
// Write a function called randomNumber
// that didnt takes any parameter
// and returns a random number between 0-1
// ** hint: you can seacrh using MDN

// Ex: randomNumber()
// => 0.2278

// Ex: randomNumber()
// => 0.475

function randomNumber(){
  return( Math.random()*1);
}

document.getElementById("p20").innerHTML=  randomNumber() +" , "+  randomNumber() ;




// TASk21
// Write a function called randomBetweenNumbers
// that takes 2 parameters
// and returns a random number between them
// ** hint: you can seacrh using MDN

// Ex: randomBetweenNumbers(1,8)
// => 7.5412

// Ex: randomBetweenNumbers(3,100)
// => 23

function randomBetweenNumbers(A,B){
  return(( Math.random()*B)+A);
}

document.getElementById("p21").innerHTML= randomBetweenNumbers(1,8) +" , "+  randomBetweenNumbers(3,100)  ;



// Task22
// Write a function called scoreInUniversty
// that takes 1 parameters
// and returns the alpabet in the unevirsty
// A => 95-100
// B => 85-94
// C => 70-84
// D=> 50-69
// F=> 0-49

// Ex: scoreInUniversty(96)
// => "A"

// Ex: scoreInUniversty(3)
// => "F"

// Ex: scoreInUniversty(71)
// => "C"

function scoreInUniversty(X){
  if((X>95) && (X<100)){
    return "A";
  }
  else if ((X>85) && (X<94)){
    return "B";
  }
  else if ((X>70) && (X<84)){
    return "C";
  }
  else if ((X>50) && (X<69)){
    return "D";
  }
  else if ((X>0) && (X<49)){
    return "F";
  }

}

document.getElementById("p22").innerHTML= scoreInUniversty(96) +" , "+ scoreInUniversty(3) +" , " + scoreInUniversty(71);



// TASk23
// Write a function called counter
// that will returns a number bigger
// than the one that returnd before
// and start from 0

// Ex: counter()
// => 1

// Ex: counter()
// => 2

// Ex: counter()
// => 3
let count=0;
function counter(){

 
  return count++;
}

document.getElementById("p23").innerHTML=  counter() +" , "+ counter() +" , " + counter();





// TASk24
// Write a function called resetCounter
// that will reset the previuos function
// and return the number before reset and
// a string say that the counter reset

// Ex: counter()
// => 1

// Ex: counter()
// => 2

// Ex: counter()
// => 3

// Ex: resetCounter()
// => 3 and the counter reset now

// Ex: counter()
// => 1

// Ex: counter()
// => 2

// Ex: resetCounter()
// => 2 and the counter reset now

// Ex: counter()
// => 1

function resetCounter(){
  
  let reset=count;
   count=1;
  return reset+"and the counter reset now";}
 

document.getElementById("p24").innerHTML=resetCounter() +" , " + counter()+" , "+resetCounter() +" , " + counter();



