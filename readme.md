# Web Scraping de Letras de Música
Este é um aplicativo web que usa Node.js, Express, dotenv e Puppeteer para raspar letras de música de um site específico e apresentá-las em uma página web.
## Instalação
Para instalar e executar este aplicativo, siga estas etapas:

1. Clone este repositório:
```sh 
git clone https://github.com/ronaldo3030/api-lyrics-scraper.git
```
2. Entre na pasta do repositório:
```sh 
cd api-lyrics-scraper
```
3. Instale as dependências do projeto:
```sh 
npm install
```
4. Crie um arquivo .env na raiz do projeto com a URL do site que você usará para raspar as letras e a porta em que o servidor será executado. Siga este exemplo:
```sh
LYRICS_URL=https://www.letras.mus.br
PORT=3000
```
5. Execute o servidor:
```sh
npm start
```
6. Acesse a aplicação em seu navegador, na url http://localhost:3000
## Utilização
Para utilizar a aplicação, siga estas etapas:
1. Acesse a página inicial em seu navegador.
2. Digite o nome da música que deseja obter a letra e clique em "Buscar".
3. Se a música for encontrada, a letra será exibida na página.
## Estrutura do projeto
* `app.js`: arquivo principal que configura e inicia o servidor Express.
* `controllers/lyricsController.js`: arquivo que contém a lógica para obter a letra da música solicitada.
* `public/`: pasta contendo os arquivos estáticos (CSS, imagens, etc).
* `views/`: pasta contendo os arquivos de visualização (HTML).
* `routes/lyrics.js`: arquivo que contém as rotas para acessar a letra da música.
## Licença
Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE.md para mais detalhes.