
        function rolldice() {
        let dicetype = document.getElementById("dice").value;
        let result =  Math.floor(Math.random() * dicetype) + 1;
        document.getElementById("result").innerHTML = "You rolled: " + result; 
        }
