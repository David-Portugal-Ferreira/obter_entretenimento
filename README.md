**Antes de Utilizar**

    É nessecário ter o node e express baixados.
    É necessário iniciar o servidor proxy no diretório da aplicação.
        node proxy-server.js


**Modo de utilização:**

    Vai ao site "MangaSee" e escolhe o capítulo que queres.

    Abre a consola e cola o código de get_links.js.

    Coloca o ficheiro baixado na pasta da aplicação.

    Abre o ficheiro index.html

    Insere o nome e capítulo e clica em download.

    Quando todas as imagens tiverem sido baixadas, elimina o data.json da pasta da aplicação.

**Aviso**

    Caso o ficheiro 'data.json' não seja apagado após o donwload estar concluido, todas as proximas tentavivas de baixar outro capitulo resultaram no capitulo anterior ser baixado novamente.