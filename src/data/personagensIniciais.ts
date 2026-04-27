import type { IPersonagem } from '../interfaces'

/**
 * Dados mockados para a wiki (sem backend).
 * Imagens locais servidas de `/public` (caminhos absolutos na URL do Vite).
 */
export const personagensIniciais: IPersonagem[] = [
  {
    id: 'yuji-itadori',
    nome: 'Yuji Itadori',
    tituloOuApelido: 'Recipiente de Sukuna',
    descricaoResumida:
      'Estudante do 1º ano com corpo sobre-humano. Hospeda os dedos de Ryomen Sukuna após engoli um artefato amaldiçoado.',
    tecnicaPrincipal: 'Manipulação de energia amaldiçoada / Black Flash (em desenvolvimento)',
    claOuAfiliacao: 'Colégio Jujutsu de Tóquio',
    imagemUrl: '/Yuji-Itadori.webp',
    status: 'ativo',
    contaComoEspecialOuPrimeiroGrau: false,
  },
  {
    id: 'megumi-fushiguro',
    nome: 'Megumi Fushiguro',
    tituloOuApelido: 'Usuário das Dez Sombras',
    descricaoResumida:
      'Estudante reservado da Zenin que emprega a Técnica das Dez Sombras, herdada da linhagem Zenin.',
    tecnicaPrincipal: 'Técnica das Dez Sombras',
    claOuAfiliacao: 'Colégio Jujutsu de Tóquio / Zenin',
    imagemUrl: '/Megumi-Fushiguro.webp',
    status: 'ativo',
    contaComoEspecialOuPrimeiroGrau: false,
  },
  {
    id: 'nobara-kugisaki',
    nome: 'Nobara Kugisaki',
    tituloOuApelido: 'Estilista de bonecos de palha',
    descricaoResumida:
      'Feiticeira assertiva que combina martelo, pregos e bonecos de palha para atingir alvos à distância.',
    tecnicaPrincipal: 'Técnica de bonecos de palha',
    claOuAfiliacao: 'Colégio Jujutsu de Tóquio',
    imagemUrl: '/Nobara-Kugisaki.webp',
    status: 'ferido',
    contaComoEspecialOuPrimeiroGrau: false,
  },
  {
    id: 'satoru-gojo',
    nome: 'Satoru Gojo',
    tituloOuApelido: 'O mais forte do mundo',
    descricaoResumida:
      'Feiticeiro de grau especial portador dos Seis Olhos e do Ilimitado — referência de poder na obra.',
    tecnicaPrincipal: 'Ilimitado / Azul / Vermelho / Roxo',
    claOuAfiliacao: 'Colégio Jujutsu de Tóquio',
    imagemUrl: '/Satoru-Gojo.jpg',
    status: 'ativo',
    contaComoEspecialOuPrimeiroGrau: true,
  },
  {
    id: 'maki-zenin',
    nome: 'Maki Zenin',
    tituloOuApelido: 'Caçadora sem energia visível',
    descricaoResumida:
      'Excluída do clã Zenin por nascer sem energia amaldiçoada visível; compensa com domínio de armas amaldiçoadas.',
    tecnicaPrincipal: 'Combate com ferramentas amaldiçoadas',
    claOuAfiliacao: 'Zenin / Colégio Jujutsu de Tóquio',
    imagemUrl: '/Maki-Zenin.webp',
    status: 'ativo',
    contaComoEspecialOuPrimeiroGrau: true,
  },
  {
    id: 'toge-inumaki',
    nome: 'Toge Inumaki',
    tituloOuApelido: 'Fala amaldiçoada',
    descricaoResumida:
      'Herdeiro da Fala Amaldiçoada dos Inumaki; comunica ordens que se tornam realidade para quem as ouve.',
    tecnicaPrincipal: 'Fala amaldiçoada (Onigiri como substitutos lexicais)',
    claOuAfiliacao: 'Colégio Jujutsu de Tóquio',
    imagemUrl: '/Toge-Inumaki.jpg',
    status: 'ativo',
    contaComoEspecialOuPrimeiroGrau: false,
  },
  {
    id: 'yuta-okkotsu',
    nome: 'Yuta Okkotsu',
    tituloOuApelido: 'Feiticeiro especial com Rika',
    descricaoResumida:
      'Portador de Rika Orimoto como espírito vingativo de grau especial; treinado por Gojo.',
    tecnicaPrincipal: 'Copy / vínculo com Rika',
    claOuAfiliacao: 'Colégio Jujutsu de Tóquio',
    imagemUrl: '/Yuta-Okkotsu.jpg',
    status: 'ativo',
    contaComoEspecialOuPrimeiroGrau: true,
  },
  {
    id: 'sukuna',
    nome: 'Ryomen Sukuna',
    tituloOuApelido: 'Rei das Maldições',
    descricaoResumida:
      'Espírito amaldiçoado de grau especial milenar; compartilha o corpo de Yuji após o pacto com os dedos.',
    tecnicaPrincipal: 'Corte / fogo (manifestações variadas)',
    claOuAfiliacao: 'Maldição de grau especial',
    imagemUrl: '/Ryomen-Sukuna.jpg',
    status: 'exorcizado',
    contaComoEspecialOuPrimeiroGrau: true,
  },
]
