const inputName = document.querySelector('#manga-name');
const inputChapter = document.querySelector('#manga-chapter');
let mangaName = 'unnamed';
let mangaChapter = 'unknown';
inputName.addEventListener('change', (e) => {
    mangaName = e.target.value;
});
inputChapter.addEventListener('change', (e) => {
    mangaChapter = e.target.value;
})

const filePath = './data.json';
fetch(filePath)
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao carregar o JSON');
        }
        return response.json();
    })
    .then(jsonData => {
        console.log('JSON carregado com sucesso');
        const json = JSON.parse(jsonData);
        document.getElementById('downloadBtn').addEventListener('click', async () => {
            for (let i = 1; i < json.length; i++) {
                const imageUrl = json[i];
                console.log('Imagen ' + i);
                try {
                    // Fetch da imagem usando o serviço All Origins como proxy CORS
                    const response = await fetch(`http://localhost:3000/proxy?url=${encodeURIComponent(imageUrl)}`);

                    if (!response.ok) {
                        throw new Error('Network response was not ok.');
                    }
                    const blob = await response.blob();
                    // Criar URL temporário para o Blob
                    const blobUrl = URL.createObjectURL(blob);
                    // Criar um link para download
                    const link = document.createElement('a');
                    link.href = blobUrl;
                    link.download = `${mangaName}_${mangaChapter}_${i}.png`; // Nome do arquivo que será baixado (opcional)
                    // Simular o clique no link para iniciar o download
                    link.click();
                    // Limpar o URL temporário após o download
                    URL.revokeObjectURL(blobUrl);

                    await new Promise(resolve => setTimeout(resolve, 500));
                } catch (error) {
                    console.error('Erro ao fazer fetch da imagem:', error);
                }
            }
        });
    })
    .catch(error => {
        console.error('Erro ao carregar o JSON:', error);
    });
