import type { IMetricasDashboard, IPersonagem } from '../interfaces'

/**
 * Deriva contadores do dashboard a partir do array em estado.
 */
export function calcularMetricasDashboard(personagens: IPersonagem[]): IMetricasDashboard {
  const totalFeiticeiros = personagens.length
  let feiticeirosAtivos = 0
  let feridos = 0
  let exorcizados = 0
  let especiaisOuPrimeiroGrau = 0

  for (const p of personagens) {
    if (p.status === 'ativo') feiticeirosAtivos += 1
    if (p.status === 'ferido') feridos += 1
    if (p.status === 'exorcizado') exorcizados += 1
    if (p.contaComoEspecialOuPrimeiroGrau) especiaisOuPrimeiroGrau += 1
  }

  return {
    totalFeiticeiros,
    feiticeirosAtivos,
    feridos,
    exorcizados,
    especiaisOuPrimeiroGrau,
  }
}
