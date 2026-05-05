# Trabalho Final de N1 - Analise de Interface com Hotjar

**Projeto analisado:** Wiki Jujutsu Kaisen  
**Disciplina:** Desenvolvimento de Software Web / Trabalho Final de N1  
**Professor:** Fernando  
**Aluna:** Karoline Albuquerque de Assis  
**Data:** 24 de abril de 2026  
**Link do sistema publicado:** https://admirable-praline-a7e6cb.netlify.app  
**Ferramenta utilizada:** Hotjar / Contentsquare

## 1. Objetivo da Analise

O objetivo deste trabalho foi analisar o comportamento real de usuarios na aplicacao Wiki Jujutsu Kaisen, desenvolvida em React, TypeScript e Bootstrap. A coleta foi feita com o Hotjar para observar cliques, rolagem da pagina e pontos de maior ou menor atencao dentro da interface.

## 2. Integracao com Hotjar

A aplicacao foi publicada online pelo Netlify e recebeu a tag oficial do Hotjar no arquivo `index.html`:

```html
<script src="https://t.contentsquare.net/uxa/83abf4446bf0a.js"></script>
```



## 3. Testes Realizados

Foram realizados testes com pelo menos 3 usuarios diferentes. Cada usuario recebeu a orientacao de navegar pelo sistema, clicar nos botoes de status dos personagens, explorar a barra lateral e rolar a pagina ate o final.

| Usuario | Perfil resumido | Acoes observadas |
| --- | --- | --- |
| Karol Albuquerque | Usuária com conhecimento em desenvolvimento | Navegou por toda a interface, interagiu com os botões principais e explorou os cards |
| Estefane Albuquerque | Usuária comum | Focou nos cards centrais, clicou nos botões de ação e pouco utilizou a sidebar |
| Marly Albuquerue | Usuária com baixa familiaridade tecnológica | Demonstrou mais dificuldade, clicando em imagens e explorando menos a parte inferior da página |

## 4. Prints dos Mapas de Calor



### Mapa de Cliques

public\Page On The Fly - May 5, 2026 - Karol Albuquerque-ClickMap-2026-05-05.png

### Mapa de Rolagem

public\Page On The Fly - May 5, 2026 - Karol Albuquerque-ScrollMap-2026-05-05.png

## 5. Analise dos Dados Coletados

A partir do mapa de cliques, foi possível observar que a maior concentração de interações ocorreu nos botões de ação presentes nos cards dos personagens, como “Enviar em missão”, “Relatório de observação” e “Selar registro”. Isso indica que os usuários compreenderam parcialmente quais eram os elementos interativos principais do sistema.

No entanto, também foram identificados diversos cliques em áreas não interativas, especialmente nas imagens dos personagens. Esse comportamento sugere que os usuários interpretam visualmente essas imagens como elementos clicáveis, o que evidencia um problema de affordance na interface.

Além disso, a barra lateral apresentou baixa taxa de interação, indicando que essa área não está chamando atenção suficiente ou não está sendo percebida como relevante durante a navegação.

Com base no mapa de rolagem, foi possível observar que a maior parte dos usuários visualizou apenas a região superior e intermediária da página. A partir da metade inferior, há uma queda significativa de visualização, especialmente nos últimos registros (cards finais), que aparecem em áreas com menor destaque.

Isso demonstra que conteúdos posicionados abaixo da dobra (parte inferior da página) têm menor probabilidade de serem visualizados, reduzindo sua efetividade dentro da interface.

## 6. Problemas Identificados

- Usuários clicando nas imagens dos personagens, mesmo não sendo elementos interativos;
- Baixa interação com a barra lateral (menu de classificação);
- Concentração de cliques apenas nos primeiros cards da página;
- Redução significativa da visualização nos últimos registros (baixo alcance no scroll);
- Falta de clareza visual sobre quais elementos são clicáveis;
- Hierarquia visual que favorece apenas o topo da página, prejudicando o restante do conteúdo.

## 7. Melhorias Propostas

As melhorias abaixo foram definidas com base nos dados observados nos mapas de calor (cliques e rolagem), buscando corrigir problemas reais de usabilidade identificados na interface.

| Problema observado | Evidência no Hotjar | Melhoria proposta |
|---|---|---|
| Cliques em imagens não clicáveis | Múltiplos pontos de clique concentrados nas imagens dos personagens | Tornar as imagens clicáveis (exibir detalhes do personagem) ou remover aparência de interatividade |
| Baixa interação com a sidebar | Poucos ou nenhum clique registrado na barra lateral esquerda | Destacar a sidebar com cores mais chamativas, ícones ou microinterações |
| Concentração de cliques no topo da página | Heatmap mostra maior atividade apenas nos primeiros cards | Redistribuir o conteúdo importante ao longo da página |
| Baixa visualização do final da página | Scroll map indica queda significativa de atenção na parte inferior | Reduzir o tamanho da página ou reposicionar conteúdos importantes para cima |
| Botões com pouca interação | Alguns botões apresentam menos cliques do que o esperado | Aumentar contraste, tamanho e destaque visual dos botões |
| Falta de hierarquia visual clara | Cliques concentrados apenas nas áreas mais chamativas | Melhorar organização visual com uso de espaçamento, cores e agrupamento de elementos |

## 8. Conclusao

A análise realizada com o Hotjar (integrado à plataforma Contentsquare) permitiu compreender o comportamento real dos usuários durante a navegação no sistema. Os mapas de calor evidenciaram que, embora os usuários consigam interagir com os principais botões, ainda existem problemas relacionados à clareza dos elementos interativos e à organização do conteúdo.

Os dados mostraram que elementos visuais como imagens geram expectativa de interação, mesmo quando não são clicáveis, e que conteúdos localizados na parte inferior da página tendem a ser ignorados. Além disso, a baixa interação com a barra lateral indica a necessidade de melhorias na hierarquia visual e na atratividade desses componentes.

Com base nessas observações, foram propostas melhorias objetivas que visam tornar a interface mais intuitiva, eficiente e alinhada com o comportamento real dos usuários, reforçando a importância de decisões baseadas em dados no design de interfaces.