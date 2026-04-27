/**
 * Referência rápida de técnica amaldiçoada (uso em filtros e aside).
 */
export interface ITecnicaAmaldicoada {
  nome: string
  tipo: 'ofensiva' | 'suporte' | 'invocação' | 'restrita'
  usuarioNotavel: string
}
