# Wiki Jujutsu Kaisen

Projeto desenvolvido para a **Atividade 06 - React, TypeScript e Bootstrap**, da disciplina ministrada pelo **Prof. Fernando**.

## Tema

A aplicacao e uma wiki interativa com tema **Jujutsu Kaisen**, organizada como um arquivo de registros de personagens, tecnicas, clas e episodios. O dominio foi escolhido para permitir nomes de componentes, interfaces, variaveis e dados coerentes com o tema, como `IPersonagem`, `CardPersonagem`, `DashboardJujutsu` e `IStatusFeiticeiro`.

## Tecnologias

- React com Vite
- TypeScript
- Bootstrap via CDN
- CSS externo em `src/styles/jujutsu-wiki.css`

## Como Executar

```bash
npm install
npm run dev
```

Para gerar a versao de producao:

```bash
npm run build
```

## Justificativa da Arquitetura

O projeto foi dividido em pastas para separar responsabilidades e facilitar a correcao:

- `src/components`: componentes reutilizaveis da interface, como cabecalho, dashboard, sidebar, lista, cards e rodape.
- `src/pages`: pagina principal da aplicacao, onde fica a composicao da tela e o estado dos personagens.
- `src/data`: dados mockados usados pela aplicacao.
- `src/interfaces`: contratos TypeScript usados para tipar dados, props e estados.
- `src/styles`: personalizacoes visuais externas ao Bootstrap.
- `src/utils`: funcoes auxiliares, como o calculo das metricas do dashboard.

A divisao foi feita para manter o estado principal centralizado em `PaginaWikiJujutsu`, enquanto os componentes filhos recebem dados e callbacks por props. Assim, os cards de personagens alteram o status visual de cada item e o dashboard atualiza seus contadores imediatamente a partir do mesmo estado.

## Requisitos Atendidos

- Componentizacao da interface em partes menores e reutilizaveis.
- Uso de TypeScript com interfaces para dados, props e metricas.
- Dashboard com contadores dinamicos.
- Interacao nos cards para alterar status de personagens.
- Layout responsivo com Bootstrap Grid, usando `col-12` no celular e divisao assimetrica `col-lg-3` / `col-lg-9` no desktop.
- Bootstrap carregado via CDN em `index.html`.
- CSS externo para cores, fontes e acabamento visual.
- Uso semantico de `header`, `main`, `section`, `aside` e `address`.
- Rodape com identificacao academica, data da entrega e mencao ao Prof. Fernando.

## Trabalho Final de N1 - Hotjar

Este mesmo projeto tambem sera utilizado para o **Trabalho Final de N1 - Analise de Interface com Hotjar**. A aplicacao esta preparada para coleta de dados reais de uso, com a tag do Hotjar inserida no `index.html`.

Evidencias esperadas na entrega:

- link do sistema publicado no Netlify;
- prints dos mapas de calor do Hotjar;
- analise de pelo menos 3 usuarios diferentes;
- problemas de usabilidade identificados a partir dos dados;
- melhorias propostas com justificativa baseada nos mapas de clique e rolagem.

O relatorio da analise esta em `RELATORIO_HOTJAR.md`.

## Estrutura Principal

```text
src/
  components/
  data/
  interfaces/
  pages/
  styles/
  utils/
```

## Observacao Para Correcao

O repositorio contem apenas os arquivos necessarios para executar, avaliar e compilar a aplicacao. A pasta `node_modules` e os arquivos de build local, como `dist`, estao ignorados pelo `.gitignore`.
