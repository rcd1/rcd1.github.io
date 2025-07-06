var kitty = document.getElementById("kitty");
var mody = document.getElementById("mody");
const kittyImage = 'ᓚᘏᗢ';

let kittyClicks = localStorage.getItem('kitty_clicks') || 0;
let storedKittyImage = localStorage.getItem('kitty_image');
kitty.innerHTML = storedKittyImage !== null ? storedKittyImage : kittyImage;

function kittyMessage(kittyClicks) {
    var message = "";
    switch (true) {
        case (kittyClicks == 5):
            kitty.innerHTML = "ᓚᘏᗢ&#703;&#695;&#688;&#696;&#702;";
            message = "The cat is confused, why are you clicking it?";
            break;
        case (kittyClicks == 10):
            kitty.innerHTML = "ᓚᘏᗢ";
            message = "The cat seems okay with it, keep going!";
            break;
        case (kittyClicks == 20):
            kitty.style.color = "#6c4dbb";
            message = "Waow, the cat is starting to like it!";
            break;
        case (kittyClicks == 30):
            kitty.innerHTML = "cat";
            message = "The cat had to take a break, you can have this in the meantime.";
            break;
        case (kittyClicks > 40):
            message = "Seems the cat won't be back, maybe Ryan will add a new one soon?";
            break;
        default:
            message = "You've clicked the cat " + kittyClicks + " times!";
    }

    alert(message)

}

kitty.addEventListener("click", function () {
    kittyClicks++;
    kittyMessage(kittyClicks);
    localStorage.setItem('kitty_clicks', kittyClicks);
    localStorage.setItem('kitty_image', kitty.innerHTML);
})
mody.addEventListener("click", function () {
    kittyClicks = 0;
    kitty.innerHTML = kittyImage;
    kitty.style.color = "#f2dfd5";
    localStorage.setItem('kitty_clicks', kittyClicks);
    localStorage.setItem('kitty_image', kitty.textContent);
    alert("Kitty clicks have been reset!");
});
