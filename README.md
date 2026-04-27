# Wiki Jujutsu Kaisen

Painel web acadêmico (**Atividade 06**) que simula um **arquivo vivo** da obra *Jujutsu Kaisen*: inventário de feiticeiros com situação tática atualizável e métricas derivadas em tempo real — experimento didático para **React**, **TypeScript**, **Bootstrap via CDN** e semântica HTML5.

---

## Objetivo da aplicação

Demonstrar uma SPA funcional onde:

1. dados mockados representam um **registro da wiki** de personagens importantes da obra;
2. o estado React guarda esse inventário e permite alternar entre situações **ativo**, **ferido** e **exorcizado/neutralizado** sem backend;
3. um **painel numérico** reapresenta contagens assim que algum card muda — provando comunicação pai → filhos → estado consolidado.

---

## Tema escolhido e justificativa

**Wiki temática / inventário Jujutsu Kaisen.** O tema permite nomenclatura coerente (`CardPersonagem`, feiticeiros, energia amaldiçoada, clãs, arcos narrativos) sem fugir das exigências da disciplina **Desenvolvimento de Software Web**. Conteúdo textual é fictício ou inspirado na obra **Gege Akutami**, apenas para fins educacionais.

---

## Tecnologias utilizadas

| Ferramenta | Função neste projeto |
|------------|----------------------|
| **React** | Biblioteca UI com componentização e estado local (`useState`). |
| **Vite** | Bundler e servidor de desenvolvimento rápidos (`npm run dev`). |
| **TypeScript** | Interfaces para dados de domínio (`IPersonagem`, etc.) e props dos componentes. |
| **Bootstrap via CDN** | Grade de 12 colunas e utilitários (`index.html`, sem pacote npm `bootstrap`). |
| **CSS externo** (`src/styles/jujutsu-wiki.css`) | Identidade visual escura/roxa/vermelha sobre o tema Bootstrap — não substitui o uso da grade. |

---

## Como executar no seu computador

Pré-requisitos: **Node.js** (LTS) e **npm**.

```bash
cd wiki-jujutsu-kaisen
npm install
npm run dev
```

Abra no navegador o endereço indicado pelo terminal (geralmente `http://localhost:5173`).

Build de produção (executa também verificação TypeScript via `tsc -b`):

```bash
npm run build
npm run preview
```

Lint:

```bash
npm run lint
```

---

## Justificativa da arquitetura

Pastas segregadas (**`components`**, **`data`**, **`interfaces`**, **`pages`**, **`styles`**, **`utils`**) mantêm papéis claros:

- dados mock ficam isolados (`src/data`);
- tipos ficam declarados uma vez (`src/interfaces`);
- cada parte da UI é um componente testável isoladamente;
- **`PaginaWikiJujutsu`** é o único lugar onde existe estado mutável dos personagens — todos os outros recebem dados via props ou métricas já calculadas — alinhando-se ao padrão recomendado em materiais sobre React.

---

## Divisão dos componentes

| Componente | Responsabilidade |
|------------|------------------|
| `PaginaWikiJujutsu` | Estado (`useState`), deriva métricas com `useMemo`, distribui callbacks. |
| `HeaderJujutsu` | `<header>` com marca da wiki e selo tecnológico. |
| `DashboardJujutsu` | `<section>` com contagens derivadas dos personagens no estado. |
| `SidebarJujutsu` | `<aside>` com texto de apoio temático (mock estático). |
| `ListaPersonagens` | `<section>` da grade responsiva que monta cards. |
| `CardPersonagem` | Representa um feiticeiro; botões atualizam situação via callback. |
| `FooterJujutsu` | `<footer>` + `<address>` acadêmico obrigatório. |

---

## Interfaces TypeScript

Contratos como **`IPersonagem`** descrevem forma dos objetos mockados (`nome`, `status`, etc.). Interfaces `I*Props` garantem que cada componente receba apenas as props esperadas — erro em tempo de compilação antes de rodar no navegador (`npm run build` falha se tipos divergirem).

---

## useState neste projeto

`PaginaWikiJujutsu` inicializa um array `personagens`. Ao clicar nos botões do card, uma função substitui apenas o objeto cujo `id` coincide — criando novo array imutável — de modo que React re-renderize lista, métricas e badges coerentes.

---

## Dashboard com contagens dinâmicas

`calcularMetricasDashboard(personagens)` percorre o estado atual e devolve **`IMetricasDashboard`**. Enquanto `personagens` mudar, **`useMemo`** invalia o resultado e **`DashboardJujutsu`** mostra números atualizados sem duplicar lógica dentro do JSX.

---

## Interação que altera aparência dos registros

Cada **`CardPersonagem`** aplica classes CSS diferentes conforme `status` (**ativo**, **ferido**, **exorcizado**): borda/sombra temática no cartão **e** cores distintas no badge — feedback visual instantâneo ligado ao mesmo estado que alimenta o dashboard.

---

## Responsividade com Bootstrap Grid

Layout principal usa **`col-12`** em telas estreitas (sidebar e arquivo empilham) e **`col-lg-3`** + **`col-lg-9`** em desktop (**12 colunas** preservadas). Cards internos repetem subdivisões (`col-md-5`, `col-md-7`). O arquivo **`jujutsu-wiki.css`** apenas complementa cores/e sombras — não substitui o sistema de grades.

---

## Semântica HTML5 utilizada

| Tag | Uso neste projeto |
|-----|-------------------|
| **`header`** | Topo da marca (`HeaderJujutsu`). |
| **`main`** | Agrupa dashboard + grid principal (`PaginaWikiJujutsu`). |
| **`section`** | Blocos temáticos (painel numérico, arquivo de cards, subdivisões na lateral). |
| **`aside`** | Sidebar com briefing textual (`SidebarJujutsu`). |
| **`address`** | Identificação acadêmica da autora (`FooterJujutsu`). |

---

## Identificação acadêmica

Rodapé atualizado para entrega (**nome**, **data**, disciplina **Desenvolvimento de Software Web**, menção ao **Prof. Fernando**, Atividade 06).

---

## Entrega via GitHub

Este README parte do cenário **local**. Para entregar segundo as orientações da disciplina:

1. criar um repositório público **GitHub** com nome adequado (por exemplo `wiki-jujutsu-kaisen`);
2. inicializar Git na pasta do projeto ou clonar vazio e copiar os arquivos (exceto **node_modules** através do `.gitignore`);
3. enviar commits descrevendo alterações ao longo do desenvolvimento;
4. publicar o link do repositório na plataforma da atividade e **garantir acesso público ou compartilhamento** conforme solicitado pelo professor.

> O ambiente onde o projeto foi desenvolvido **pode ainda não** conter `.git`; o aluno deve executar os comandos localmente quando for publicar.

**Sugestão de primeira carga** (substitua `URL_DO_REPOSITORIO`):

```bash
git init
git add .
git commit -m "feat: criar wiki jujutsu kaisen com react typescript e bootstrap"
git branch -M main
git remote add origin URL_DO_REPOSITORIO
git push -u origin main
```

---

## Roteiro sugerido — vídeo explicativo (~2 minutos)

1. **0:00–0:20** — Mostrar `npm run dev`, tela completa (header, painel, sidebar, cards, rodapé). Citar tema e que é atividade web.  
2. **0:20–0:50** — Clicar em botões de situação tática em um card: badge muda cor, borda do card acompanha, números do painel superior mudam. Explicar `useState` em uma frase.  
3. **0:50–1:20** — Reduzir largura da janela ou abrir DevTools responsivo: colunas empilham. Mencionar Bootstrap CDN e grade 12.  
4. **1:20–1:50** — Abrir IDE em `src/interfaces` e `PaginaWikiJujutsu` — “aqui estão os tipos e o estado”. Apontar `FooterJujutsu` e tag `address`.  
5. **1:50–2:00** — README, `npm run build` e despedida com link do GitHub quando publicado.

---

## Créditos de conteúdo

*Jujutsu Kaisen* — Gege Akutami. Imagens geradas por **placehold.co** para evitar dependência de ativos locais ou restrições de uso.
