function init() {
        let status = document.getElementById("flightStatus");
        let background = document.getElementById("shuttleBackground");
        let shutttleHeight = document.getElementById("spaceShuttleHeight");
        let takeOffButton = document.getElementById("takeOff");
        let land = document.getElementById("landing");
        let abort = document.getElementById("missionAbort");
        let rockett = document.getElementById("rocket")
        
        rockett.style.bottom =0;
        rockett.style.left =0;
        rockett.style.position = "absolute";

        takeOffButton.addEventListener("click", function ()    {
        let response = window.confirm("Are you sure the shuttle is ready for takeoff?");
            if(response) { 
            status.innerHTML = "Shuttle in flight";
            background.style.backgroundColor = "blue";
            shutttleHeight.innerHTML = "10000";
            
            }
        })

        landing.addEventListener("click", function() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        status.innerHTML = "The shuttle has landed.";
        background.style.backgroundColor = "green";
        shutttleHeight.innerHTML = "0";

        })

        abort.addEventListener("click", function () {
        let abortResponse = window.confirm("Confirm that you want to abort the mission.")
        if(abortResponse) {
        status.innerHTML = "Mission aborted.";
        background.style.backgroundColor = "red";
        shutttleHeight.innerHTML = "0";

        }
        })

        let upp = document.getElementById("up");
        let downn = document.getElementById("down");
        let rightt = document.getElementById("right");
        let leftt = document.getElementById("left");
        

        upp.addEventListener("click", function() {
        rockett.style.position = "absolute"
        rockett.style.bottom = parseInt(rockett.style.bottom) + 10 + "px";
        shutttleHeight.innerHTML = parseInt(shutttleHeight.innerHTML) + 10000;
})

        downn.addEventListener("click", function() {
        rockett.style.position = "absolute"
        rockett.style.top= parseInt(rockett.style.top) - 10 + "px";
        shutttleHeight.innerHTML = parseInt(shutttleHeight.innerHTML) - 10000;
}) 

        leftt.addEventListener("click", function() {
        rockett.style.position = "absolute"
        rockett.style.right= parseInt(rockett.style.right) - 10 + "px";

        })

        rightt.addEventListener("click", function() {
        rockett.style.position = "absolute"
        rockett.style.left= parseInt(rockett.style.left) + 10 + "px";
    
            })

}

    window.addEventListener("load", init);
   





