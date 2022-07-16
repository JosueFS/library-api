# Projeto - Biblioteca

Projeto para estudos da nova biblioteca @neo4j/graphql

### Passos para rodar o servidor:

**Faça um clone do projeto e acesse a pasta**

```bash
$ git clone https://github.com/JosueFS/library-api.git && cd library-api
```

**Variáveis de ambiente**
Crie um arquivo .env e adicione as váriaveis ambiente assim como no arquivo .env.example.

**Siga os passos abaixo:**

```bash
# Instale as dependências
$ npm i

# Start the client
$ npm run dev
```

Agora o servidor deve estar acessível em http://localhost:4001/graphql

## Atualizando os types com codegen

Sempre que houver alguma alteração no diretório src/graphql/\* é necessário atualizar o arquivo index.ts

Para isso basta rodar o comando:

```bash
# Update Graphql Types
$ npm run gen:types
```
