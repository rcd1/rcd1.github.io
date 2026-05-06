// 
const dropArea = document.getElementById('drop-area');
const fileElem = document.getElementById('fileElem');
const output = document.getElementById('output');
const fileButton = document.querySelector('.file-button');

// Button click handler
fileButton.addEventListener('click', () => {
    fileElem.click();
});

// Drag and drop handlers
dropArea.addEventListener('dragover', e => {
    e.preventDefault();
    dropArea.classList.add('drag-over');
});
dropArea.addEventListener('dragleave', e => {
    dropArea.classList.remove('drag-over');
});
dropArea.addEventListener('drop', e => {
    e.preventDefault();
    dropArea.classList.remove('drag-over');
    handleFiles(e.dataTransfer.files);
});
fileElem.addEventListener('change', e => {
    handleFiles(e.target.files);
});
function handleFiles(files) {
    if (!files.length) return;
    const file = files[0];
    if (!file.type.startsWith('image/')) {
        output.innerHTML = '<p>Please drop an image file.</p>';
        return;
    }
    const reader = new FileReader();
    reader.onload = function (e) {
        const img = new Image();
        img.onload = function () {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            canvas.toBlob(function (blob) {
                const url = URL.createObjectURL(blob);
                // Want the original file name. so find extension with regex 
                // (find string that starts with a dot, and is followed by any characters except a dot 
                // to the '$' end of the string)
                const originalName = file.name.replace(/\.[^/.]+$/, ".webp");
                output.innerHTML = `<a href="${url}" download="${originalName}" class="download-link">Download .webp</a><img src="${url}" alt="Converted WebP image" style="margin-top: 1rem;">`;
            }, 'image/webp');
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}