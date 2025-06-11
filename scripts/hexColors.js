function randColors(x,y) {
    var hex = "0123456789abcdef";
    var colorCode = "#";
    for (let index = 0; index < 6; index++) {
     colorCode += hex[Math.floor(Math.random()*16)];
    }
    x.style.backgroundColor = colorCode;
    y.innerHTML = colorCode;
}

function copyCode(x) {
    var textToCopy = document.getElementById(x);
    // Get the text inside the th element
    navigator.clipboard.writeText(textToCopy.innerText);
}


