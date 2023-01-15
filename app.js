let count = 0;
let value = document.getElementById("value");
let decrease = document.getElementById("btn decrease");
let reset = document.getElementById("btn reset");
let increase = document.getElementById("btn increase");
function decrease1(){
    count-= 1;
    value.innerHTML = count;
    if(value.innerHTML < 0){
        value.style.color = "red"
    }else{value.style.color = "green"}
}
function reset1(){
    count = 0;
    value.innerHTML = count;
    value.style.color = "#102A42"
}
function increase1(){
    count += 1;
    value.innerHTML = count;
    if(value.innerHTML < 0){
        value.style.color = "red"
    }else{value.style.color = "green"}
}

