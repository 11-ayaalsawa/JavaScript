"use strict";
let x=document.getElementById("div");
x.style.backgroundColor="blue";
let z=0;
function myfun() {

  let change = ["blue","red","green","blue"];

  x.style.backgroundColor = change[z]; 
   z++;

   if (z ===change.length) z=0; 

   }

    

   
  








   

