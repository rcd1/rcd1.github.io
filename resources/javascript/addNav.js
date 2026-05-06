addNavigationToPage();
addFaviconToPage();

function addNavigationToPage() {
    const nav = document.getElementById("nav");
    if (!nav) {
        return;
    }

    nav.innerHTML =
        '<a href="/index.html">Home</a>' +
        '<a href="/pages/projects/projects.html">Projects</a>' +
        '<a href="/pages/art/art.html">Art</a>' +
        '<a href="/pages/misc/misc.html">Miscellaneous</a>';
}

function addFaviconToPage() {
    const link = document.createElement("link");
    link.rel = "icon";
    link.href = "/resources/images/cow.gif";
    link.type = "image/gif";
    document.head.appendChild(link);
}
