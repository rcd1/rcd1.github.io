function randColors(x,y) {
    var hex = "0123456789ABCDEF";
    var colorCode = "#";
    for (let index = 0; index < 6; index++) {
     colorCode += hex[Math.vloor(Math.random()*16)];
    }
    x.style.backgroundColor = colorCode;
    y.innerHTML = colorCode;
}

function copyCode(x) {
    // var copyText = document.getElementById(x);
    // navigator.clipboard.writeText(copyText.innerText);
    // alert("Copied the text: " + copyText.innerText);
    // Get the text inside the th element
    var textToCopy = document.getElementById(x).innerText;

// Create a temporary textarea element
var textarea = document.createElement("textarea");
textarea.value = textToCopy;

// Append the textarea to the body
document.body.appendChild(textarea);

// Select the text in the textarea
textarea.select();

try {
    // Execute the copy command
    var success = document.execCommand("copy");

    if (success) {
        // Provide feedback to the user
        //alert("Text copied to clipboard: " + textToCopy);
    } else {
        // Handle the case where copy command fails
        alert("Copy to clipboard failed.");
    }
} catch (err) {
    // Handle any exceptions
    console.error('Error copying text to clipboard', err);
}

// Remove the textarea from the DOM
document.body.removeChild(textarea);
}
