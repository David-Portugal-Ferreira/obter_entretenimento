**Antes de Utilizar**

    É nessecário ter o node e express baixados.
    É necessário iniciar o servidor proxy no diretório da aplicação.
        node proxy-server.js


**Modo de utilização:**

    full_manga.html descarrega todo o manga numa unica imagem
        caso o manga seja muito grande, pode acabar por baixar mais de uma imagem

    image_by_image.html descarrega imagem a imagem

    Vai ao site "MangaSee" e escolhe o capítulo que queres.

    Abre a consola e cola o código de get_links.js.

    Coloca o ficheiro baixado na pasta da aplicação.

    Abre o ficheiro full_manga.html

    Insere o nome e capítulo e clica em download.

    Quando todas as imagens tiverem sido baixadas, elimina o data.json da pasta da aplicação.

**Aviso**

    Caso o ficheiro 'data.json' não seja apagado após o donwload estar concluido, todas as proximas tentavivas de baixar outro capitulo resultaram no capitulo anterior ser baixado novamente.