"use strict";
let div=document.getElementById("mydiv");

function fontfamily() {

    let family =document.getElementById("font_family");
    div.style.fontFamily=family.value;
}

function fontsize() {

    let size=document.getElementById("font_size");
    div.style.fontSize=size.value;
}

function iitalic () {
   
    let it = document.getElementById("italic").checked;
    div.style.fontStyle =(it ? "italic" : "normal");
}

function ibold() {

    let b=document.getElementById("bold").checked;
    div.style.fontWeight= (b ? "bold" : "normal");

}

function iunderline() {
    let under=document.getElementById("underline").checked;
    div.style.textDecoration= ( under ? "underline" : "none");
}


