function generateImage() {
    var text = document.getElementById('textInput').value;
    var canvas = document.getElementById('imageCanvas');
    var ctx = canvas.getContext('2d');
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Set text properties
    ctx.font = '30px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Add text to canvas
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);
}
