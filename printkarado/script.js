// Get elements
const fileInput = document.getElementById('file-input');
const textInput = document.getElementById('text-input');
const addTextBtn = document.getElementById('add-text');
const canvas = document.getElementById('tshirt-canvas');
const downloadBtn = document.getElementById('download-btn');
const ctx = canvas.getContext('2d');

let tshirtImage = new Image();

// Handle image upload
fileInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.onload = function (event) {
    tshirtImage.src = event.target.result;
  };
  
  reader.readAsDataURL(file);
});

// Draw the uploaded image on canvas
tshirtImage.onload = function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous canvas content
  ctx.drawImage(tshirtImage, 0, 0, canvas.width, canvas.height);
};

// Add text to canvas
addTextBtn.addEventListener('click', () => {
  const text = textInput.value;
  if (text.trim() !== '') {
    ctx.font = '30px Arial';
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.fillText(text, canvas.width / 2, canvas.height - 50);
  }
});

// Download the design as an image
downloadBtn.addEventListener('click', () => {
  const imageUrl = canvas.toDataURL('image/png');
  const link = document.createElement('a');
  link.href = imageUrl;
  link.download = 'tshirt-design.png';
  link.click();
});
