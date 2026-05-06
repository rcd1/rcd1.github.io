/**
 * Generate a random hex color and update the display and code elements
 * @param {HTMLElement} boxElement - The box to update with new color
 * @param {HTMLElement} codeElement - The code element to update with new color code
 */
function randColors(boxElement, codeElement) {
    const hex = "0123456789abcdef";
    let colorCode = "#";
    
    for (let i = 0; i < 6; i++) {
        colorCode += hex[Math.floor(Math.random() * 16)];
    }
    
    boxElement.style.backgroundColor = colorCode;
    codeElement.innerText = colorCode;
}

/**
 * Copy a color code to the clipboard
 * @param {string} elementId - The ID of the element containing the code to copy
 */
function copyCode(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        navigator.clipboard.writeText(element.innerText).catch(err => {
            console.error('Failed to copy:', err);
        });
    }
}


