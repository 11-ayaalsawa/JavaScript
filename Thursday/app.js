"use strict";


// Task 1
// Create an object represents you
// have your first name, last name, age, dob(date of birth), favorite food (3),favorite movie (5)
let person= {
    firstname : "Aya",
    lastname : "alsawa",
    age : 23,
    dob : "27-9-1998",
    favoritefood :["mansaf", "shawarma", "pizza"],
    favoritemovie :[ "the note book", " me before you ", "crazy about her", "atonement", "about time"]
}
console.log(person);

document.getElementById("task1").innerHTML=" I'm "+person.firstname+" "+person.lastname+" and I'm "+person.age+" years old , My birthday is "+person.dob+ " and these are my favoritefood :"+person.favoritefood.join( ", ") +" and my favorite Movies are:" +person.favoritemovie.join(", ");





var persons = [
    { name: { first: 'John', last: 'Hob' }, age: 35 },
    { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
    { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
    { name: { first: 'Zues', last: 'Odin' }, age: 55 },
    { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
  ];
  

//   Task2
//   Using the varabile persons
//   Create a function called firstName
//   that accept an object
//   and return all the first name of the person insides
  
//   Ex: firstName(persons) => ['John', 'Alex', 'Alice', 'Thor', 'Soso']

function firstName(fname){
  let newarray=[];
  for (let i=0; i< fname.length; i++){
    newarray.push(fname[i].name.first)
  }
  console.log(newarray);
  return newarray;
};



document.getElementById("task2").innerHTML=firstName(persons);



  

//   Task3
//   Using the varabile persons
//   Create a function called averageAge
//   that accept an object
//   and return the average age of those persons
  
//   Ex: averageAge(persons) => 41.2


function averageAge(x){
  let sum=0;
  let Age_count=0;
  // let avg=sum / 5;
  
  for (let i=0; i< x.length; i++){
    sum += x[i].age;
    Age_count++;
  }

 if (Age_count == 0) {
  return 0;
 }
 let avg = sum /Age_count;
 console.log(avg);
 return avg;
}


document.getElementById("task3").innerHTML=averageAge(persons);




  
  
 
  // Task4
  // Using the varabile persons
  // Create a function called olderPerson
  // that accept an object
  // and return the full name of the older person
  
  // Ex: olderPerson(persons) => "Soso Al-Amora"
  
 function olderPerson(y){
  let old=0;
  for (let i=0; i<y.length-1; i++){
    if ((y[i].age) < (y[i+1].age)){
      old=(y[i+1].name.first)+" "+(y[i+1].name.last);
      
    }
  }
 

  console.log(old);
  return old;

 }

 

 document.getElementById("task4").innerHTML=olderPerson(persons);

  
  
 
//   Task 5
//   Using the varabile persons
//   Create a function called longestName
//   that accept an object
//   and return the full name of the person have longest full name
  
// //   Ex: longestName(persons) => "Soso Al-Amora"
function longestName(z){
    let long = 0;

    for (let i=0; i< z.length-1; i++ ){
        if(((z[i].name.first+ z[i].name.last ).length)<((z[i+1].name.first+ z[i+1].name.last ).length)){
          long=(z[i+1].name.first+" "+ z[i+1].name.last );
        }
    }

    console.log(long);
    return long;

}


document.getElementById("task5").innerHTML=longestName(persons);




  
  
  
  /*
  6
  Using the varabile persons
  Create a function called longestName
  that accept an object
  and return the full name of the person have longest full name
  
  Ex: longestName(persons) => "Soso Al-Amora"
  */
  
  //////////////////////////////////////////////////////////////////
  

  // Task7
  // Create a function called repeatWord
  // that accept a string
  // and return an object that represents how many times each word repeat
  // ** no matter it is upper case or lower case
  // ** Search on MDN about something can cut the string to words??
  
  // Ex: repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO")
  // => {
  //   my:1,
  //   name:2,
  //   is:1,
  //   alex:1,
  //   mercer:1,
  //   class:1,
  //   b:1,
  //   baba:1,
  //   mama:1,
  //   hello:3
  // }


let str = "My name is alex mercer class name B baba mama hello Hello HELLO",
    split = str.split(" "),
    obj = {};

for (let i = 0; i < split.length; i++) {
  if (obj[split[i]] === undefined) {
    obj[split[i]] = 1;
  } else {
    obj[split[i]]++;
  }
}
console.log(obj);














  

  // 8
  // Create a function called repeatChar
  // that accept a string
  // and return an object that represents how many times each char repeat
  // ** no matter it is upper case or lower case
  // ** Search on MDN about something can cut the string to char??
  
  // Ex: repeatChar("mamababatetacedo")
  // => { m:2,  a:5, b:2, t2:, e:2, c:1, d:1, o:1}


function repeatChar(char){
  let objectletter=char.split("");
  let letters=[];
  let count=1;

  for (let i=0; i<objectletter.length; i++){
    if (objectletter[i] === objectletter[i+1]){
      count++;

    }
    else{
      let value=`${count}${objectletter[i]}`;
      letters=[...letters,value];
    }

  }
console.log(letters);
return letters;

}



document.getElementById("Task8").innerHTML=repeatChar("mamababatetacedo");

  
 
  // Task9
  // Create a function called selectFromObject
  // that accept an object and an array
  // and return an object have the key that inside the array
  
  // Ex: selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd'])
  // =>  {a: 1, cat: 3}
  let u=({a: 1, cat: 3}, ['a', 'cat', 'd']);
 function selectFromObject(f){
   console.log((Object.values(u)));
   return (Object.values(u));
 }


 document.getElementById("Task9").innerHTML= selectFromObject();

  
  
  
  // Task10
  // Create a function called objectToArray
  // that accept an object
  // and return an array of the keys and values in this object
  
  // Ex: objectToArray({firstName:"Moh",age:24})
  // => ["firstName","Moh","age",24]
  let objt={firstName:"Moh",
  age:24}
  function objectToArray(){
  
    console.log((Object.keys(objt)),(Object.values(objt)));
  }

  
  objectToArray()
 

  // document.getElementById("Task10").innerHTML= ;  
  
  
  /*
  11
  Create a function called arrayToObject
  that accept an array
  and return an object of the keys and values in this object
  
  Ex: arrayToObject(["firstName","Moh","age",24])
  => {firstName:"Moh",age:24}
  */
  
  
  /*
  12
  Create a function called onlyNumber
  that accept an object
  and return a new object that have only the values that is a number
  **hint: search in MDN how to know the type of variable
  
  Ex: onlyNumber({firstName:"Moh",age:24,movies:[1,5,"string"]})
  => {age:24}
  */
  
  
  /*
  13
  Create a function called onlyString
  that accept an object
  and return a new object that have only the values that is a string
  **hint: search in MDN how to know the type of variable
  
  Ex: onlyString({firstName:"Moh",age:24,movies:[1,5,"string"]})
  => {firstName:"Moh"}
  */
  
  
  /*
  14
  Create a function called onlyArray
  that accept an object
  and return a new object that have only the values that is a array
  **hint: search in MDN how to know the type of variable
  
  Ex: onlyArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
  => {movies:[1,5,"string"]}
  */
  
  
  /*
  15
  Create a function called keysArray
  that accept an object
  and return an array have the key inside this object
  
  Ex: keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
  => ['firstName', 'age', 'movies']
  
  */