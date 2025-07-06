const faces = ["(●\'◡\'●)", "(●\'◕\'●)", "(●\'◠\'●)", "(●\'◡\'●)", "(●\'◕\'◕)", "(●\'◠\'◠)", "(●\'◡\'◡)", "(●\'◕\'◕)", "(●\'◠\'◠)"];
const face1 = document.getElementById("face1");
let currentIndex = 0;
setInterval(changeFace, 5000);
function changeFace() {
    currentIndex = (currentIndex + 1) % faces.length;
    face1.textContent = faces[currentIndex];

}