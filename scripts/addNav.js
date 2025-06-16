addNavigationToPage();
// Adds a navigation bar to the page
function addNavigationToPage() {
    let nav = document.getElementById("nav");
    nav.innerHTML = "<td><a href=\"index.html\" target=\"_parent\">Home</a></td> " +
    "<td><a href=\"projects.html\" target=\"_parent\">Projects</a></td>" +
    "<td><a>Art</a></td>" +
    "<td><a href=\"misc.html\" target=\"_parent\">Miscellaneous</a></td>";
}