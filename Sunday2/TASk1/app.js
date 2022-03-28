let formmob=document.getElementById("mobForm");
let tabledata=document.getElementById("bodyTa");

let device=[];

function mobile(useName,typeNameD) {
    this.useName=useName;
    this.typeNameD=typeNameD;
    this.price= pricemobile(50,500);
    this.cond=condition()

    device.push(this);
    informationprint();
    console.log();

}

function pricemobile(min,max) {

    return Math.ceil(Math.random() * (max - min) + min);
}

function condition() {
    let pric1=mobile.price;
    if(pric1<100){
        return "used";
       }else{
          return "new device";
       }

}

formmob.addEventListener("submit",handelsubmit);
function handelsubmit(event) {
    event.preventDefault();
    let useName=event.target.useName.value;
    console.log(useName);
    let typeNameD=event.target.typeNameD.value;
    console.log(typeNameD);
  
    new mobile(useName,typeNameD)

}
handelsubmit();

function informationprint() {
    let trElement = document.createElement("tr");
    let tdElement4 = document.createElement("td");
    let tdElement1 = document.createElement("td");
    let tdElement2 = document.createElement("td");
    let tdElement3 = document.createElement("td");

    for (let i = 0; i < device.length; i++){
        tabledata.appendChild(trElement);
        trElement.appendChild(tdElement4);
        trElement.appendChild(tdElement1);
        trElement.appendChild(tdElement2);
        trElement.appendChild(tdElement3);
        tdElement4.textContent = device[i].useName;
        tdElement1.textContent = device[i].typeNameD;
        tdElement2.textContent = device[i].price;
        tdElement3.textContent = device[i].cond;

    }
}