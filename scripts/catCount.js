var kitty = document.getElementById("kitty");

let kittyClicks = localStorage.getItem('kitty_clicks') || 0;

function kittyMessage(kittyClicks) {
    alert("You have clicked the cat " + String(kittyClicks) + " times!" );
}

kitty.addEventListener("click", function() {
    kittyClicks++;

    localStorage.setItem('kitty_clicks', kittyClicks);

    kittyMessage(kittyClicks);
})