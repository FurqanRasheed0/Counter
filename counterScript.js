let displayingNumber = 0
let counter = document.getElementById("counter");
let saveInput = document.getElementById("saveInput");
let countercolor = document.getElementById("title");


const increm = () =>{
    displayingNumber += 1
    counter.innerHTML = displayingNumber;
    if(displayingNumber > 0){
    counter.style.color = "green";
}else if(displayingNumber == 0){
    counter.style.color = "black";
}else if(displayingNumber < 0){
    counter.style.color = "red";
}

}
const decrem = () =>{
    displayingNumber -= 1
    counter.innerHTML = displayingNumber
    if(displayingNumber > 0){
        counter.style.color = "green";
    }else if(displayingNumber == 0){
        counter.style.color = "black";
    }else if(displayingNumber < 0){
        counter.style.color = "red";
    }
   // counter.style.color = "red";
}
const saving = () =>{
    saveInput.innerHTML += displayingNumber + " | "
    // if(displayingNumber > 0){
    //     saveInput.style.color = "green";
    // }else if(displayingNumber == 0){
    //     saveInput.style.color = "black";
    // }else if(displayingNumber < 0){
    //     saveInput.style.color = "red";
    // }
   
}
const reset = () =>{
    displayingNumber = 0
    counter.innerHTML = displayingNumber
    counter.style.color = "black";
}
//this was just to change color when its in negative and positive 
//but i got another idea
// if(displayingNumber > 0){
//     counter.style.color = "green";
// }else if(displayingNumber == 0){
//     counter.style.color = "black";
// }
// else{
//     counter.style.color = "red;"
// }