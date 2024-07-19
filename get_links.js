let images = document.querySelectorAll('img');
let imagesArray = [];
let imagesJSON;
for (let i = 0; i < images.length; i++) {
    imagesArray.push(images[i].src)
}
let newImagesArray = imagesArray.slice(0, imagesArray.length - 3);
imagesJSON = JSON.stringify(newImagesArray);

const blob = new Blob([JSON.stringify(imagesJSON)], { type: 'application/json' });

// Criar URL temporário para o Blob
const blobUrl = URL.createObjectURL(blob);

// Criar um link para download
const link = document.createElement('a');
link.href = blobUrl;
link.download = 'data.json'; // Nome do arquivo que será baixado

// Simular o clique no link para iniciar o download
link.click();

// Limpar o URL temporário após o download
URL.revokeObjectURL(blobUrl);