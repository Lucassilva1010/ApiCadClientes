# API

Esta é uma API simples construída com Node.js e Express para demonstrar operações básicas de CRUD (Create, Read, Update, Delete) em um "banco de dados" simulado.

Claro, vou explicar cada termo e sua utilização no código da API.

### Arquivo `index.js`

- **Express**: É um framework para Node.js que simplifica a criação de aplicativos web e APIs. No código, `express` é importado para criar e configurar o servidor.

- **morgan**: É um middleware de logging para o Express. Ele registra as solicitações HTTP no console, fornecendo informações sobre as requisições feitas à aplicação.

- **cors**: É um pacote que lida com políticas de mesmo site, permitindo ou bloqueando requisições de diferentes origens. No contexto da API, `cors` é utilizado para garantir que a API possa ser acessada de diferentes domínios ou origens.

- **body-parser**: É um middleware que ajuda a analisar o corpo das requisições. No código, ele é utilizado para interpretar os dados recebidos no corpo das requisições, permitindo o uso de `req.body` para acessar esses dados.

- **app.use()**: É uma função do Express que aplica middlewares à aplicação. No código, os middlewares (`morgan`, `body-parser`, `express.json()`, `cors`) são definidos e utilizados pelo Express para processar requisições antes de chegarem às rotas.

- **app.listen()**: Inicia o servidor na porta especificada (`21262` neste caso) e define uma função de callback para ser executada quando o servidor estiver ativo. Essa função simplesmente imprime uma mensagem no console informando que o servidor foi iniciado.

### Arquivo `routes.js`

- **express.Router()**: É um recurso do Express que permite a criação de instâncias de roteadores. Os roteadores permitem a definição de rotas e manipulação de requisições HTTP para essas rotas.

- **GET, POST, DELETE**: São métodos HTTP utilizados para realizar operações específicas nos recursos. No código, são utilizados para definir diferentes tipos de rotas que respondem a diferentes tipos de requisições.

- **req e res**: São objetos usados no Express para representar a requisição (req) recebida pelo servidor e a resposta (res) que será enviada de volta ao cliente.

- **db**: É um array utilizado para simular um banco de dados na aplicação. Ele armazena alguns dados fictícios que são utilizados para demonstrar as operações CRUD.

- **routes.get()**, **routes.post()**, **routes.delete()**: São métodos para definir diferentes tipos de rotas no roteador (`routes`). Cada um deles especifica uma rota, o tipo de requisição que ela espera e a função a ser executada quando essa rota é acessada.


## Contribuição

Sinta-se à vontade para contribuir com melhorias, correções de bugs ou novos recursos. Para contribuir, siga estas etapas:

1. Faça um fork do projeto.
2. Crie uma branch para a sua contribuição (`git checkout -b feature/nova-feature`).
3. Faça commit das suas alterações (`git commit -am 'Adicionando uma nova feature'`).
4. Faça push para a branch (`git push origin feature/nova-feature`).
5. Abra um pull request.

