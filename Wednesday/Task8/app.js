"use strict";

let sss= document.getElementById("sel").value;


function myflag() {
    

if (sss=="jordan"){
    
    document.getElementById("image").src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_JhRpHh6DZbhBfcocCqbIqMyyH2-vCKxySw&usqp=CAU";
    console.log(sss);
}

else if (sss == "turkey") {
    document.getElementById("image").src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/800px-Flag_of_Turkey.svg.png";

}

else if (sss == "france") {
    document.getElementById("image").src="https://www.osculati.com/SupplyImages/WF-0058/EN_Bandiera_francia_B.jpg";

}

}

