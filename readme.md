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
A rota principal da API é /lyric/:nome-da-musica, onde :nome-da-musica é o nome da música que você deseja obter a letra.
Exemplo de solicitação:
```sh
GET /lyric/Billie-Jean

```
Exemplo de resposta:
```sh
{
  "lyric": "She was more like a beauty queen from a movie scene"
}
```
## Estrutura do projeto
* `index.js`: arquivo principal que configura e inicia o servidor Express.
* `controllers/lyricsController.js`: arquivo que contém a lógica para obter a letra da música solicitada.
* `routes.js`: arquivo que contém as rotas para acessar a letra da música.
