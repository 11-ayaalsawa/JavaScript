"use strict";

let regform=document.getElementById("divForm")
let Firstname =document.getElementById("fName")
let lastname=document.getElementById("lName")
let dateB=document.getElementById("date")
let Emaill=document.getElementById("email")
let Emailconf=document.getElementById("emailCon")
let passwo=document.getElementById("pass")
let passwoconf=document.getElementById("passCon")

let arr=[];


function getinfo(firstName, lastName,datebb,emailll,emailconf,passwordd,passwordcon) {
    this.fName=firstName;
    this.lName=lastName;
    this.date=datebb;
    this.email=emailll;
    this.emailCon=emailconf;
    this.pass=passwordd;
    this.passCon=passwordcon;
    this.fullname=checkinfo(this.fName,this.lName);
    console.log( this.fullname);
    this.correctdate=checkdate(this.date);
    console.log(this.correctdate);
    arr.push(this);
   
   
}

function checkinfo(fName,lName){
    let xxx = /[a-zA-Z\s]+$/;
    if ((xxx.test(fName)) && (xxx.test(lName)))
        return fName+lName;

    else
      return  `Error: the name is not correct`;

  

}

function checkdate(date){
    let dat= /(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

    if(dat.test(date)){
    return date;}

    else {
        return `Error: the date is not correct`
    }


}

function checkemail(email,emailCon){
    let em=/(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if ((em.test(email))&&(em.test(emailCon)))
    return email+emailCon;

    else
    return `Error: the email is not correct`}




regform.addEventListener("submit", handlesubmit)

function handlesubmit (e){
    e.preventDefault();

    let firstName=e.target.firstName.value;
    let lastName=e.target.lastName.value;
    let passwordd=e.target.passwordd.value;
    let passwordcon=e.target.passwordcon.value;
    let datebb=e.target.datebb.value;
    let emailll=e.target.emailll.value;
    let emailconf=e.target.emailconf.value;

    new getinfo(firstName,lastName,passwordd,passwordcon,datebb, emailll,emailconf);
    console.log("hi");
}
handlesubmit ();


function render(){
    regform.map(function (v,index))
}