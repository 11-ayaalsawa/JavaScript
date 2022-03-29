"use strict";

// /*
// Instructions: 
//  - You should solve all these questions using .map() function 
// */


//  * Exercise 1: 
//  * 
//  * Make an array of numbers that are doubles of the first array
//  *
//  * Test Case: 
//  *
//  * console.log(doubleNumbers([2, 5, 100]));
//  * 
//  * Result:
//  * [4, 10, 200]
// */
// function doubleNumbers(arr){
//     // your code here

//   }



let Numbers;
 function doubleNumbers(array) { 
 Numbers =array.map(function(v,index){ 
  return v*2;  
   });

     }
     
     doubleNumbers([2, 5, 100]);
      console.log(Numbers); 

  document.getElementById("T1").innerHTML=Numbers.join(" ,  ");
//   /*
//    * Exercise 2 : 
//    * 
//    * Take an array of numbers and make them strings
//    *
//    * Test Case: 
//    *
//    * console.log(stringItUp([2, 5, 100]));
//    * 
//    * Result:
//    * ["2", "5", "100"]
//   */
  
//   function stringItUp(arr){
//     // your code here
  
  
//   }

     let stringnumber;
      function stringItUp(array){ 
        stringnumber=array.map(function(v,index){
          return v.toString(); 
         
         })
     
      } 
         stringItUp([2, 5, 100]);
          console.log(stringnumber); 
  
          document.getElementById("T2").innerHTML=stringnumber.join(" ,  ");
//   /*
//    * Exercise 3:  
//    * 
//    * Capitalize each of an array of names
//    *
//    * Test Case: 
//    *
//    * console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
//    * 
//    * Result:
//    *  ["John", "Jacob", "Jingleheimer", "Schmidt"]
//   */
  
//   function capitalizeNames(arr){
//     // your code here
    
//   }

 let Capital;
 function capitalizeNames(array){
    Capital=array.map(function(v,index){
         return v.toUpperCase();
     })
  }
     capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]);
    console.log(Capital);

    document.getElementById("T3").innerHTML=Capital.join(" ,  ");
     //    * 
 
    
//
//    * Exercise 4:  
//    * 
//    * Make an array of strings of the names
//    *
//    * Test Case: 
//    *
//    * console.log(namesOnly([
//    *   {
//    *       name: "Angelina Jolie",
//    *       age: 80
//    *   },
//    *   {
//    *       name: "Eric Jones",
//    *       age: 2
//    *   },
//    *   {
//    *       name: "Paris Hilton",
//    *       age: 5
//    *   },
//    *   {
//    *       name: "Kayne West",
//    *       age: 16
//    *   },
//    *   {
//    *       name: "Bob Ziroll",
//    *       age: 100
//    *   }
//    *   ])); 
//    * 
//    * Result:
//    *  ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
//   */
  
//   function namesOnly(arr){
//     // your code here
//   }

let names;
 function namesOnly(array){ 
    names=array.map(function(v,index){  
  return v.name; 
    })
 }  
 
 namesOnly([ 
  {  
     name: "Angelina Jolie",   
             age: 80  

                }, 

    { 
        name: "Eric Jones",     
              age: 2  

              },  

     {         
       name: "Paris Hilton",  
                age: 5 

               }, 

       {          
       name: "Kayne West",    
               age: 16   
                }, 

        {           
        name: "Bob Ziroll",
        age: 100,
        }
 ]);

 console.log(names);

 document.getElementById("T4").innerHTML=names.join(" ,  ");

//   /*
//    * Exercise 5:  
//    * 
//    * Make an array of strings of the names saying whether or not they can go to The Matrix
//    *
//    * Test Case: 
//    *
//    * console.log(makeStrings([
//    *    {
//    *       name: "Angelina Jolie",
//    *       age: 80
//    *   },
//    *   {
//    *       name: "Eric Jones",
//    *       age: 2
//    *   },
//    *   {
//    *       name: "Paris Hilton",
//    *       age: 5
//    *   },
//    *   {
//    *       name: "Kayne West",
//    *       age: 16
//    *   },
//    *   {
//    *       name: "Bob Ziroll",
//    *       age: 100
//    *   }
//    * ]));  
//    * 
//    * Result:
//    * 
//    * ["Angelina Jolie can go to The Matrix", 
//    * "Eric Jones is under age!!", 
//    * "Paris Hilton is under age!!", 
//    * "Kayne West is under age!!", 
//    * "Bob Ziroll can go to The Matrix"]
//    *  ["John", "Jacob", "Jingleheimer", "Schmidt"]
//    */
  
//   function makeStrings(arr){
//     // your code here
//   }
let Matrix ;
function makeStrings(array){
    Matrix=array.map(function(v,index){
        let x='';
        if(v.age<18){
            x='is under age!!';
        }
        else{
            x='can go to The Matrix';
        }
        return v.name + x;
    })
}
makeStrings([
        {
           name: "Angelina Jolie",
           age: 80
       },
       {
           name: "Eric Jones",
           age: 2
       },
       {
           name: "Paris Hilton",
           age: 5
       },
       {
           name: "Kayne West",
           age: 16
       },
       {
           name: "Bob Ziroll",
           age: 100
       }
     ]); 

     console.log(Matrix);
     document.getElementById("T5").innerHTML=Matrix.join(" ,  ");

//   /*
//    * Exercise 6:  
//    * 
//    * Make an array of the names in h1s, and the ages in h2s
//    *
//    * Test Case: 
//    *
//    * console.log(readyToPutInTheDOM([
//    *   {
//    *       name: "Angelina Jolie",
//    *       age: 80
//    *   },
//    *   {
//    *       name: "Eric Jones",
//    *       age: 2
//    *   },
//    *   {
//    *       name: "Paris Hilton",
//    *       age: 5
//    *   },
//    *   {
//    *       name: "Kayne West",
//    *       age: 16
//    *   },
//    *   {
//    *       name: "Bob Ziroll",
//    *       age: 100
//    *   }
//    * ])); 
//    * 
//    * Result:
//    * 
//    * ["<h1>Angelina Jolie</h1><h2>80</h2>", 
//    * "<h1>Eric Jones</h1><h2>2</h2>", 
//    * "<h1>Paris Hilton</h1><h2>5</h2>", 
//    * "<h1>Kayne West</h1><h2>16</h2>", 
//    * "<h1>Bob Ziroll</h1><h2>100</h2>"]
//    */
  
//   function readyToPutInTheDOM(arr){
//     // your code here
//   }
  
let Angelina;
function readyToPutInTheDOM(array){
    Angelina=array.map(function(v,index){
        return `<h1> ${v.name}</h1><h2>${v.age}</h2>`;
    })
}
readyToPutInTheDOM([
    {
       name: "Angelina Jolie",
       age: 80
   },
   {
       name: "Eric Jones",
       age: 2
   },
   {
       name: "Paris Hilton",
       age: 5
   },
   {
       name: "Kayne West",
       age: 16
   },
   {
       name: "Bob Ziroll",
       age: 100
   }
]);
console.log(Angelina);
document.getElementById("T6").innerHTML=Angelina.join(" ,  ");
  
//   /*
//   * Exercise 7:
//   * Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
//   *
//   * Test Cases:
//   *   Test Case 1:  doubleValues([1,2,3]) 
//   *   Test Case 2:  doubleValues([1,-2,-3])  
//   *
//   * Result:
//   * Test Case 1: [2,4,6] 
//   * Test Case 2: [2,-4,-6]
//   */
  
//   function doubleValues(arr){
//       // your code here
//     }


let  doubled;
function doubleValues(array) {
    doubled =array.map(function(v,index){
        return v*2;
    });
}
doubleValues([1,-2,-3]);
console.log( doubled);
document.getElementById("T7").innerHTML=doubled.join(" ,  ");
    
//     /*
//     * Exercise 8:
//     * Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.
//     *
//     *
//     * Test Cases :
//     *   Test Case 1:  valTimesIndex([1,2,3])  
//     *   Test Case 2:  valTimesIndex([1,-2,-3]) 
//     * 
//     * Result
//     * Test Case 1: [0,2,6]
//     * Test Case 2: [0,-2,-6]
//     */
    
//     function valTimesIndex(arr){
//        // your code here   
      
//     }

let valTimes;
function valTimesIndex(array){
    valTimes=array.map(function(v,index){
        return v*index;
    })
}
valTimesIndex([1,-2,-3]);
console.log(valTimes);
document.getElementById("T8").innerHTML=valTimes.join(" ,  ");
    
//     /*
//     * Exercise 9:
//     * Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value
//     * of that key in each object.
//     * 
//     * Test Case:
//     * extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') 
//     * 
//     * Result:
//     * ['Elie', 'Tim', 'Matt', 'Colt']
//     */
    
//     function extractKey(arr, key){
//        // your code here 
//     }

let keys;
function extractkey (array , key){
    keys=array.map(function(v,index){
        return v[key];
    })
}
extractkey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name');
console.log(keys);
document.getElementById("T9").innerHTML=keys.join(" ,  ");
    
//     /*
//     * Exercise 10:
//     * Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 
//     * 
//     * Examples:
//     * extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
//     */
    
//    function extractFullName(){
//       // your code here 
//    }


let FullName;
function extractFullName(array){
    FullName=array.map(function(v,index){
        return v.first +' '+ v.last;
    })
}
extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]);
console.log(FullName);
document.getElementById("T10").innerHTML=FullName.join(" ,  ");