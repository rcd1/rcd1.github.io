addNavigationToPage();
addFaviconToPage();
// Adds a navigation bar to the page
function addNavigationToPage() {
    let nav = document.getElementById("nav");
    nav.innerHTML = "<td><a href=\"\\index.html\" target=\"_parent\">Home</a></td> " +
    "<td><a href=\"\\pages\\projects\\projects.html\" target=\"_parent\">Projects</a></td>" +
    "<td><a href=\"\\pages\\art\\art.html\" target=\"_parent\">Art</a></td>" +
    "<td><a href=\"\\pages\\misc\\misc.html\" target=\"_parent\">Miscellaneous</a></td>";
}

function addFaviconToPage() {
    let link = document.createElement("link");
    link.rel = "icon";
    link.href = "resources/images/cow.gif"; // Path to your favicon
    link.type = "image/gif"; // Specify the type of the favicon
    document.head.appendChild(link);
}