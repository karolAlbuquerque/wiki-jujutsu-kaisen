# Relatorio de entrega

## Analise da atividade

O projeto atende aos principais requisitos da atividade final:

- Front-end em React, Vite e TypeScript.
- Uso de Bootstrap no `index.html`.
- Interface componentizada em `src/components`.
- Interfaces TypeScript em `src/interfaces`.
- Tela de listagem, cadastro, edicao, exclusao e detalhes.
- Dashboard com contadores calculados a partir dos personagens.
- Back-end Java com Servlet, JDBC, DAO e `ConnectionFactory`.
- Modelo de dominio `Personagem`.
- Banco PostgreSQL com tabela `personagens`.
- Script SQL em `database/schema.sql`.
- API retornando JSON para o React.
- Configuracao de CORS no `PersonagemServlet`.
- Docker Compose com front-end, back-end e banco.
- `.gitignore` ignorando `node_modules`, `target`, `dist`, arquivos `.env` e arquivos temporarios.

## O que foi limpo

- Removido o script de Hotjar/Contentsquare do `index.html`.
- Removido o relatorio antigo de Hotjar.
- Removidas imagens de heatmap do `public`.
- Removida a pasta gerada `backend-java/target`.
- Simplificados textos da interface que explicavam tecnologia demais para o usuario final.
- Refeito o `README.md` com foco na entrega da atividade.

## Pontos de atencao antes de entregar

1. Adicionar prints no README.

   Tire prints mostrando:

   - Tela principal com personagens listados.
   - Formulario de cadastro.
   - Personagem editado ou tela de edicao.
   - Registro aparecendo no pgAdmin ou retorno da API.

2. Gravar e publicar o video.

   Depois de publicar, coloque o link na secao `Video explicativo` do README.

3. Publicar o repositorio no GitHub.

   Depois de publicar, coloque o link na secao `Repositorio` do README.

4. Conferir se os containers sobem antes da gravacao.

   ```bash
   docker compose up --build
   ```

5. Demonstrar pelo menos um endpoint no Postman ou Insomnia.

   A atividade pede demonstracao do back-end usando Postman. Use pelo menos:

   ```text
   GET http://localhost:8080/backend-java/api/personagens
   ```

   Se quiser mostrar cadastro:

   ```text
   POST http://localhost:8080/backend-java/api/personagens
   ```

   Body:

   ```json
   {
     "nome": "Nobara Kugisaki",
     "categoria": "Estudante",
     "grau": "Grau 2",
     "tecnica": "Bonecos de palha",
     "descricao": "Feiticeira da turma principal.",
     "imagemUrl": "/Nobara-Kugisaki.webp"
   }
   ```

6. Swagger nao foi implementado.

   A instrucao diz "quando implementado", entao nao e obrigatorio. No video, basta demonstrar os endpoints pelo Postman.

## Passo a passo antes da entrega

1. Entrar na pasta do projeto:

   ```bash
   cd ~/Documentos/wiki-jjk/wiki-jujutsu-kaisen
   ```

2. Subir a aplicacao:

   ```bash
   docker compose up --build
   ```

3. Abrir o front-end:

   ```text
   http://localhost:5173
   ```

4. Testar o CRUD:

   - Cadastrar um personagem.
   - Editar o personagem.
   - Excluir o personagem.
   - Conferir se o dashboard muda.

5. Abrir o pgAdmin e conectar no banco:

   - Host: `localhost`
   - Porta: `5433`
   - Banco: `wiki_jujutsu_kaisen`
   - Usuario: `postgres`
   - Senha: `postgres`

6. Testar a API no Postman:

   ```text
   GET http://localhost:8080/backend-java/api/personagens
   ```

7. Tirar os prints e inserir no README.

8. Gravar o video.

9. Colocar no README:

   - Link do video.
   - Link do GitHub.
   - Prints da aplicacao.

10. Conferir o Git antes de publicar:

   ```bash
   git status
   ```

## Roteiro para o video

Duracao sugerida: 3 a 5 minutos.

### 1. Apresentacao

"Meu nome e Karoline Albuquerque de Assis. O tema escolhido foi uma Wiki de personagens de Jujutsu Kaisen. A aplicacao permite cadastrar, listar, editar, visualizar e excluir personagens."

### 2. Front-end

Mostrar a tela no navegador.

"O front-end foi feito com React, Vite, TypeScript e Bootstrap. A interface foi separada em componentes, como header, dashboard, lista, card, formulario, detalhes e rodape. Os dados principais nao ficam fixos no React; eles sao carregados pela API Java."

Mostrar:

- Dashboard.
- Lista de personagens.
- Formulario.
- Botoes de visualizar, editar e excluir.

### 3. Back-end

Mostrar a pasta `backend-java/src/main/java/br/com/karol/wiki`.

"O back-end foi feito em Java com Servlets e JDBC. A classe `Personagem` representa o modelo. A `ConnectionFactory` cria a conexao com o PostgreSQL. A `PersonagemDAO` concentra as operacoes SQL de listar, buscar, cadastrar, atualizar e excluir. O `PersonagemServlet` recebe as requisicoes HTTP e devolve as respostas em JSON."

### 4. Banco de dados

Mostrar `database/schema.sql`.

"O banco usado foi PostgreSQL. A tabela principal e `personagens`, com id, nome, categoria, grau, tecnica, descricao e imagem. O script tambem insere alguns personagens iniciais para a aplicacao ja abrir com dados."

Opcional: mostrar pgAdmin com a tabela `personagens`.

### 5. CRUD funcionando

No navegador:

- Cadastrar um personagem.
- Mostrar que ele aparece na lista.
- Editar algum campo.
- Excluir o registro.

Fala sugerida:

"Apos cada operacao, o React chama novamente a API e atualiza a interface. O dashboard tambem muda conforme os registros sao alterados."

### 6. API e Postman

Mostrar no Postman:

```text
GET http://localhost:8080/backend-java/api/personagens
```

Fala sugerida:

"Aqui da para ver que o back-end retorna JSON. Esse e o mesmo dado consumido pelo front-end."

### 7. Integracao e CORS

Mostrar `src/services/api.ts` e depois `PersonagemServlet`.

"No React, a comunicacao com a API e feita com `fetch`. Como o React roda em uma porta e o Java em outra, foi necessario configurar CORS no servlet. A configuracao libera as origens locais do front-end, os metodos GET, POST, PUT, DELETE e OPTIONS, e o cabecalho Content-Type."

### 8. Encerramento

"Com isso, a aplicacao integra front-end React, back-end Java e banco PostgreSQL, realizando o CRUD completo dos personagens."
