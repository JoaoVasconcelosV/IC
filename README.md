## :wrench: Tecnologias

- [VueJs](https://vuejs.org/)
- [NodeJs](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/pt-br)

## :rocket: Como iniciar

- **Pré Requisitos**: É necessário ter **Git**, **NodeJs**, um gerenciador de pacote(**NPM** ou **Yarn**) e o **MongoDB**

- **Clone o repositório**:

```
    $ git clone https://github.com/JoaoVasconcelosV/IC.git
```

- **Rode a aplicação**:

```sh
  # Server
  $ cd server-ic
  $ yarn install # Instalando as dependências do projeto.
  $ yarn src/copy.js # Colocando os dados do csv no MongoDB.
  $ yarn dev # Iniciando o server.

  # Application web
  $ cd desafio-ic
  $ yarn # Instalando as dependências.
  $ yarn serve # Iniciando a aplicação web.
```
