import type { IMetricasDashboard, Personagem } from '../interfaces'

export function calcularMetricasDashboard(personagens: Personagem[]): IMetricasDashboard {
  const categorias = new Set(personagens.map((personagem) => personagem.categoria))

  return {
    totalPersonagens: personagens.length,
    totalCategorias: categorias.size,
    grauEspecial: personagens.filter((personagem) => personagem.grau === 'Grau Especial').length,
    maldicoes: personagens.filter((personagem) => personagem.categoria === 'Maldicao').length,
    feiticeiros: personagens.filter((personagem) => personagem.categoria === 'Feiticeiro').length,
  }
}
