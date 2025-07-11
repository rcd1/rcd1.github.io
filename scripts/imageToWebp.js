// 
const dropArea = document.getElementById('drop-area');
const fileElem = document.getElementById('fileElem');
const output = document.getElementById('output');

dropArea.addEventListener('dragover', e => {
    e.preventDefault();
    dropArea.style.background = '#f2d5ea';
});
dropArea.addEventListener('dragleave', e => {
    dropArea.style.background = '';
});
dropArea.addEventListener('drop', e => {
    e.preventDefault();
    dropArea.style.background = '';
    handleFiles(e.dataTransfer.files);
});
fileElem.addEventListener('change', e => {
    handleFiles(e.target.files);
});
/** Converts image files to WebP format 
 * @param {FileList} files - The list of files dropped or selected.
 * 
*/
function handleFiles(files) {
    if (!files.length) return;
    const file = files[0];
    if (!file.type.startsWith('image/')) {
        output.innerHTML = 'Please drop an image file.';
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
                const originalName = file.name.replace(/\.[^/.]+$/, "") + ".webp";
                output.innerHTML = `<a href=\"${url}\" download=\"${originalName}\">Download .webp</a><br><img src=\"${url}\" style=\"max-width:400px;max-height:400px;\">`;
            }, 'image/webp');
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}