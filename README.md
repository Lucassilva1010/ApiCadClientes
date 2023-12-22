# API

Esta é uma API simples construída com Node.js e Express para demonstrar operações básicas de CRUD (Create, Read, Update, Delete) em um "banco de dados" simulado.

## Instalação

Certifique-se de ter o Node.js instalado.

1. Clone este repositório:

   ```bash
   git clone https://github.com/seuusuario/sua-api.git
   ```

2. Instale as dependências:

   ```bash
   cd sua-api
   npm install
   ```

## Executando a API

Para iniciar o servidor:

```bash
npm start
```

A API estará acessível em `http://localhost:21262`.

## Rotas

### Listar todos os registros

- **URL:** `/`
- **Método:** `GET`
- **Descrição:** Retorna todos os registros do "banco de dados" simulado.

### Adicionar um novo registro

- **URL:** `/add`
- **Método:** `POST`
- **Descrição:** Adiciona um novo registro ao "banco de dados".
- **Corpo da Requisição:** Deve conter dados no formato JSON representando o novo registro a ser adicionado.

### Remover um registro

- **URL:** `/:id`
- **Método:** `DELETE`
- **Descrição:** Remove um registro do "banco de dados" com base no ID fornecido na URL.

## Exemplos de Uso

### Listar todos os registros

```bash
curl http://localhost:21262/
```

### Adicionar um novo registro

```bash
curl -X POST -H "Content-Type: application/json" -d '{"Nome":"NovoNome", "Idade":"25"}' http://localhost:21262/add
```

### Remover um registro

```bash
curl -X DELETE http://localhost:21262/1
```

## Contribuição

Sinta-se à vontade para contribuir com melhorias, correções de bugs ou novos recursos. Para contribuir, siga estas etapas:

1. Faça um fork do projeto.
2. Crie uma branch para a sua contribuição (`git checkout -b feature/nova-feature`).
3. Faça commit das suas alterações (`git commit -am 'Adicionando uma nova feature'`).
4. Faça push para a branch (`git push origin feature/nova-feature`).
5. Abra um pull request.

