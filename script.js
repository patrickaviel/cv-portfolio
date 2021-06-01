$(function() {
    //create a variable to monitor the input checkbox
    const colorSwitch = document.getElementById("input-color-switch");
    const cards = document.querySelectorAll(".project-card");

    //when the input is clicked verify the state of the checkbox
    colorSwitch.addEventListener("click", checkMode);

    //1. see which state the checkbox is in
    //2. if it is checked enable the dark mode by adding the class
    //3. if it is not checked remove dark mode by removing the class
    function checkMode() {
    console.log("checking...");
    if (colorSwitch.checked) {
        console.log("dark on");
        darkModeOn();
    } else {
        console.log("dark off");
        darkModeOff();
    }
    }

    function darkModeOn() {
        document.body.classList.add("night-mode");
        for(let i=0;i<cards.length;i++){
            cards[i].classList.add("night-mode-card");
        }
        
    }

    function darkModeOff() {
        document.body.classList.remove("night-mode");
        for(let i=0;i<cards.length;i++){
            cards[i].classList.remove("night-mode-card");
        }
    }
});