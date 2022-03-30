console.log ('Here is : ', 'array')




// 1
// Correct the syntax error
 let numbers=[ 1 , 7 , 9 , 45 ]

 let names =["Str", "alex","moh"]

let words= ['the', 'fox', 'over', 'lazy', 'dog'  ]

document.getElementById("array1").innerHTML= numbers.join(" , ")+ " / " +  names .join(" , ")+ " / " +  words.join(" , ");




// 2
// What is the index of "Banana”, Tomato"
let fruits=["Tomato","Banana","Watermelon"]

// console.log("Banana=1"+"/"+ "Tomato=0");


document.getElementById("array2").innerHTML=("Banana=1"+"/"+ "Tomato=0");




// 3
// Create an array represents your:
// 1- Favorite Food (5) 
let foods =["mansaf", "pizza ","shawarma", "Kofta", "Knafeh"]
// 2- Favorite Sport (3) 
let sports =["swimming", "running" , "boxing"]
// 3- Favorite Movie (4)
let movies =[" The Note Book ", "About Time", "Crazy about her", "Atonement"]

document.getElementById("array3").innerHTML= foods.join(" , ")+ " / " + sports.join(" , ")+ " / " +  movies.join(" , ");



// 4
// Create a function called firstOfArray
// that take an array as a parameter
// and return the first element in an array

function firstOfArray(arr) {
    arr= [1 , 4, 5]
   console.log(arr[0]);
   return arr=[0]
  
}

firstOfArray()

function firstOfArray2(array) {
array =["t","u","g","x"]

console.log(array[0]);}

firstOfArray2()

 
document.getElementById("array4").innerHTML=firstOfArray() + " / " + firstOfArray2() ;







// 5
// Create a function called lastOfArray
// that take an array as a parameter
// and return the first element in an array




function lastOfArray(arr) {
    arr= [1 , 4, 5]
   console.log(arr[arr.length - 1]);
   return arr=arr[arr.length - 1]
  
}

lastOfArray()

function lastOfArray2(array) {
array =["t","u","g","x"]

console.log(array[[array.length - 1]]);
return array= array[[array.length - 1]]
}

lastOfArray2()

document.getElementById("array5").innerHTML=lastOfArray() + " / " +lastOfArray2();




// 6
// Using console make this array to be like this one (push, unshift, shift, pop)

let array = [0,5,7,9]
array.shift()
array.shift()
array.shift()
array.unshift(1,3,4,6,8)
array.push(10)
console.log(array);
// => [1,3,4,6,8,9,10]

document.getElementById("array6").innerHTML=array.join(" / ");


// 7
// Using the console try to figure out what the thing that’s (push, unshift, shift, pop) return to you

let array2 = [5,9,-7,3.5]
array2.push(8,6)
array2.unshift(1,10)
array2.shift()
array2.pop()
console.log(array2);

document.getElementById("array7").innerHTML=array2.join(" / ");


// 8
// Create a function called middleOfArray
// that take an array as a parameter
// and return the middle element in an array if it is have an odd elemnets
// and return the two middle elemnt in an array if it is have an even elemnets
// z=[1,4,5]
// y=[4,6,9,7]


function middleOfArray(x) {
    let length = x.length;
    if (length % 2 !== 0) {
      return x[(length - 1) / 2]
    }
    return (x[length / 2 - 1] + " and " + x[length / 2])
  }
  

 document.getElementById("array8").innerHTML=middleOfArray([1,4,5])  + " / " + middleOfArray([4,6,9,7]) ;


// Ex: middleOfArray([1,4,5]) => 4
// Ex: middleOfArray(["t","u","g","x"]) =>"u and g"




// 9
// Using assignment operator (=)
// make the animals array have these animals
// var animals = ['cat', 'ele', 'bird']
// animals; => ['zebra', 'elephant']
// ** hint: animals[0]=something


// var nums= [1,2,3,8,9]
// nums => [5,-22,3.5,44,98,44]




let animals = ['cat', 'ele', 'bird']
animals[0] = 'zebra';
animals[1] = 'elephant';
animals.length = 2;

let nums = [1, 2, 3, 8, 9];
nums[0] = 5;
nums[1] = -22;
nums[2] = 3.5;
nums[3] = 44;
nums[4] = 98;
nums[5] = 44;

document.getElementById("array9").innerHTML= animals + " / " +  nums;


// 10
// Create a function called indexOfArray
// that accept an array and index
// and return what this array have in this index
//  let nums= Number[1,2,3,8,9]
// function indexOfArray(nums,index){
//     let index=(nums.length)
//     console.log(nums,index);}

//     indexOfArray(nums,2)

// Ex: indexOfArray(nums,3) => 8
// Ex: indexOfArray(nums,1) => 2
// Ex: indexOfArray(nums,4) => 9

// **try more cases by your self
// */

function indexOfArray(array, element) {
    return array[element];
  }

  document.getElementById("array10").innerHTML= indexOfArray(nums,3) + " / " + indexOfArray(nums,1)  + " / " +  indexOfArray(nums,4) ;

// 11
// Create a function called arrayExceptLast
// that accept an array
// and return the entire array except the last elemnt
// ** hint: search abou the function that will cut the array on MDN

let N= [1,2,3,8,9];
function arrayExceptLast9(N) {
    N.pop()
    console.log(N);
    return N
}



document.getElementById("array11").innerHTML= arrayExceptLast9([1,2,3,8,9]).join(" , ") ;
// Ex: arrayExceptLast(nums) =>  [1,2,3,8]

// **try more cases by your self




// 12
// Create a function called addToEnd
// that accept an array and value
// and return the entire array with add this value to the end of this array

let O= [1,2,3,8,9];
function addToEnd(O) {
O.pop()
O.push(55)
console.log(O);
return O}



document.getElementById("array12").innerHTML= addToEnd(O).join(" , ") ;



// Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

// **try more cases by your self



// all the exercises below should solved 2 times: 1- for loop 2- while lopp

// 13
// Create a function called sumArray
// that accept an array
// and return the summation of all elemnt in this array

let NN= [1,2,3,8,9];
function sumArray(NN){
    
    return (NN=0+1+2+3+4+5)
}



document.getElementById("array13").innerHTML= sumArray(NN);
// Ex: sumArray(nums) => 23

// ** solve it one time using for loop and another using while loop
// **try more cases by your self
// */




// 14
// Create a function called minInArray
// that accept an array
// and return the minimum value inside this array
function minInArray(array) {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i];
      }
    }
    return min;
  }
  
  function minInArray2(array) {
    let min = array[0];
    let i = 1;
    while (i < array.length) {
      if (array[i] < min) {
        min = array[i];
      }
      i++;
    }
    return min;
  }

document.getElementById("array14").innerHTML= minInArray(array) +" , "+ minInArray2(array);


//
// Ex: minInArray(nums) => 1

// ** solve it one time using for loop and another using while loop
// **try more cases by your self
// */



// 15
// Create a function called removeFromArray
// that accept an array and elemnt to remove
// and return the array after remove this elemnt from it
let remove= [1,2,3,8,9]
function removeFromArray(remove){
remove.splice(3,1)
console.log(remove);
}

removeFromArray(remove)

document.getElementById("array15").innerHTML=removeFromArray(remove) ;


// var nums= [1,2,3,8,9]
// Ex: minInArray(nums,8) => [1,2,3,9]

// ** solve it one time using for loop and another using while loop
// **try more cases by your self



// 16
// Create a function called oddArray
// that accept an array
// and return an array have only the odd elemnts

let D= [1,2,3,8,9]
function oddArray(D) {
if (D%2!==0) {
    console.log(D);
    return D
}
}

oddArray(D)


// Ex: oddArray(nums) => [1,3,9]

// ** solve it one time using for loop and another using while loop
// **try more cases by your self



/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*





21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

