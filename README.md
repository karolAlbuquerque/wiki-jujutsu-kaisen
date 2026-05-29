# Wiki Jujutsu Kaisen

Aplicacao web completa para a atividade final da disciplina, mantendo o tema da Atividade 06 e evoluindo a interface para um catalogo CRUD de personagens de Jujutsu Kaisen.

## Integrantes

- Karoline Albuquerque de Assis

## Tema

- Wiki Jujutsu Kaisen

## Descricao

A aplicacao funciona como uma wiki de personagens de Jujutsu Kaisen. O front-end foi mantido em React + Vite + TypeScript com Bootstrap e visual anime da atividade anterior. O back-end foi criado em Java com Servlets + JDBC, retornando JSON para integracao real com PostgreSQL.

## Tecnologias utilizadas

- React
- Vite
- TypeScript
- Bootstrap
- Java 17
- JSP/Servlets
- JDBC
- Maven
- PostgreSQL

## Estrutura do projeto

- `src/`: front-end React.
- `src/components/`: cabecalho, dashboard, cards, formulario, detalhes e rodape.
- `src/services/api.ts`: integracao HTTP com o back-end.
- `backend-java/`: aplicacao Java com entidade, DAO, servlet e configuracao JDBC.
- `database/schema.sql`: criacao da base, tabela `personagens` e inserts de exemplo.

## Arquitetura

- O React consome a API REST em `http://localhost:8080/backend-java/api`.
- `PaginaWikiJujutsu` centraliza o carregamento da lista, o estado de edicao e a atualizacao da interface apos cada operacao.
- `PersonagemServlet` recebe requisicoes HTTP, aplica CORS, valida entradas e chama `PersonagemDAO`.
- `PersonagemDAO` executa o CRUD via JDBC na tabela `personagens`.

## Banco de dados PostgreSQL

1. Crie o banco:

```bash
psql -U postgres -c "CREATE DATABASE wiki_jujutsu_kaisen;"
```

2. Carregue a tabela e os inserts:

```bash
psql -U postgres -d wiki_jujutsu_kaisen -f database/schema.sql
```

3. Se preferir executar manualmente:

```sql
CREATE DATABASE wiki_jujutsu_kaisen;
\c wiki_jujutsu_kaisen;
```

4. Ajuste as credenciais do back-end por variaveis de ambiente ou propriedades Java:

```bash
DB_URL=jdbc:postgresql://localhost:5432/wiki_jujutsu_kaisen
DB_USER=postgres
DB_PASSWORD=postgres
```

No codigo, esses valores podem ser sobrescritos por `DB_URL`, `DB_USER` e `DB_PASSWORD`.

## Como rodar o back-end

1. Entre na pasta:

```bash
cd backend-java
```

2. Compile o projeto:

```bash
mvn clean package
```

3. Publique o WAR gerado em um servidor Jakarta Servlet compativel, como Tomcat 10:

- arquivo gerado: `backend-java/target/backend-java.war`
- contexto esperado: `http://localhost:8080/backend-java`

4. Configure as credenciais do PostgreSQL antes de subir o servidor, se necessario.

## Como rodar com Docker

Suba toda a aplicacao com:

```bash
docker compose up --build
```

Servicos expostos:

- Front-end: `http://localhost:5173`
- Back-end: `http://localhost:8080/backend-java/api/personagens`
- PostgreSQL: `localhost:5432`

## Porta do front-end ocupada

Se a porta `5173` estiver ocupada, crie um arquivo `.env` na raiz do projeto com:

```bash
FRONTEND_PORT=5174
```

Depois rode:

```bash
docker compose up --build
```

Acesse o front-end em:

```text
http://localhost:5174
```

Comandos uteis:

```bash
docker compose down
docker compose down -v
docker compose logs backend
docker compose logs frontend
docker compose logs db
```

Observacoes:

- O container `db` cria automaticamente o banco `wiki_jujutsu_kaisen`.
- O arquivo `database/schema.sql` e carregado automaticamente no primeiro start do volume do PostgreSQL.
- Para reinicializar completamente o banco e reexecutar o `schema.sql`, use `docker compose down -v`.
- A porta externa do front-end pode ser configurada com `FRONTEND_PORT`, mantendo `5173` como padrao.
- As credenciais usadas no ambiente local academico sao:
  - usuario: `postgres`
  - senha: `postgres`
- O front-end em Docker usa `VITE_API_URL=http://localhost:8080/backend-java/api`, o que permite que o navegador acesse o back-end publicado na maquina host.

## Como rodar o front-end

1. Na raiz do projeto, instale as dependencias:

```bash
npm install
```

2. Se quiser customizar a URL da API, crie um `.env`:

```bash
VITE_API_URL=http://localhost:8080/backend-java/api
```

3. Rode o projeto:

```bash
npm run dev
```

4. Build de producao:

```bash
npm run build
```

## Endpoints disponiveis

- `GET /api/personagens`
- `GET /api/personagens/{id}`
- `POST /api/personagens`
- `PUT /api/personagens/{id}`
- `DELETE /api/personagens/{id}`

### Exemplo de payload JSON

```json
{
  "nome": "Megumi Fushiguro",
  "categoria": "Estudante",
  "grau": "Grau 1",
  "tecnica": "Tecnica das Dez Sombras",
  "descricao": "Usuario da tecnica herdada do cla Zenin.",
  "imagemUrl": "/Megumi-Fushiguro.webp"
}
```

## CORS

O CORS foi configurado no `PersonagemServlet` para permitir chamadas do front-end em:

- `http://localhost:5173`
- `http://127.0.0.1:5173`
- `http://localhost:5174`
- `http://127.0.0.1:5174`
- `http://localhost`
- `http://127.0.0.1`

Cabecalhos liberados:

- `Access-Control-Allow-Origin`
- `Access-Control-Allow-Methods`
- `Access-Control-Allow-Headers`

## Funcionalidades entregues

- Listagem de personagens vindos do back-end Java.
- Cadastro de personagem.
- Edicao de personagem.
- Exclusao de personagem.
- Visualizacao de detalhes.
- Dashboard com contadores.
- Layout responsivo com Bootstrap.
- Tema Wiki Jujutsu Kaisen preservado.

## Testes manuais recomendados

### Docker

- Acesse `http://localhost:5173`
- Se estiver usando `.env` com `FRONTEND_PORT=5174`, acesse `http://localhost:5174`
- Verifique a listagem inicial de personagens
- Cadastre um novo personagem
- Edite um personagem existente
- Exclua um personagem
- Confirme no navegador e nas rotas que os dados continuam vindo da API Java

### Postman ou Insomnia

- `GET http://localhost:8080/backend-java/api/personagens`
- `GET http://localhost:8080/backend-java/api/personagens/1`
- `POST http://localhost:8080/backend-java/api/personagens`
- `PUT http://localhost:8080/backend-java/api/personagens/1`
- `DELETE http://localhost:8080/backend-java/api/personagens/1`

### curl

```bash
curl http://localhost:8080/backend-java/api/personagens
```

```bash
curl -X POST http://localhost:8080/backend-java/api/personagens ^
  -H "Content-Type: application/json" ^
  -d "{\"nome\":\"Nobara Kugisaki\",\"categoria\":\"Estudante\",\"grau\":\"Grau 2\",\"tecnica\":\"Bonecos de palha\",\"descricao\":\"Feiticeira da turma principal.\",\"imagemUrl\":\"/Nobara-Kugisaki.webp\"}"
```

## Espaco para evidencias

### Prints da aplicacao funcionando

- Inserir prints aqui

### Video explicativo

- Inserir link do video aqui

### Repositorio GitHub

- Inserir link do repositorio final aqui
