
function rolldice() {
        let dicetype = document.getElementById("dice").value;
        let result =  Math.floor(Math.random() * dicetype) + 1;
        document.getElementById("result").innerHTML = "You rolled: " + result; 
}

//Create the roll dice function by passing an argument, in order to reutilize the same function multiple times
function argRolldice(dicetype) {
        let result =  Math.floor(Math.random() * dicetype) + 1;
        document.getElementById("result").innerHTML = "You rolled: " + result;
}    

//      argRolldice(6) 
if(document.getElementById("result").innerHTML == "You rolled: 8") {
        throw new Error('Test failed');

}
        