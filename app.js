function getnumber(num){
    var result = document.getElementById("mainscreen");
    mainscreen.value += num;
}

function getclear(){
    var result = document.getElementById("mainscreen");
    mainscreen.value = ""
}

function getequal(){
    var result = document.getElementById("mainscreen");
    mainscreen.value = eval(mainscreen.value)
}