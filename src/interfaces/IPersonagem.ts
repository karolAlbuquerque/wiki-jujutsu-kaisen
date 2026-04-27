import type { IStatusFeiticeiro } from './IStatusFeiticeiro'

/**
 * Personagem catalogado na wiki interativa.
 */
export interface IPersonagem {
  id: string
  nome: string
  tituloOuApelido: string
  descricaoResumida: string
  tecnicaPrincipal: string
  claOuAfiliacao: string
  imagemUrl: string
  status: IStatusFeiticeiro
  /** Inclui feiticeiros de 1º grau e semi-1 / especiais conforme o universo da obra. */
  contaComoEspecialOuPrimeiroGrau: boolean
}
