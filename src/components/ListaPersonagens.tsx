import type { IPersonagem, IStatusFeiticeiro } from '../interfaces'
import { CardPersonagem } from './CardPersonagem'

export interface IListaPersonagensProps {
  personagens: IPersonagem[]
  aoAlterarStatus: (id: string, novoStatus: IStatusFeiticeiro) => void
}

/**
 * Grade responsiva de cards (Bootstrap row/col).
 */
export function ListaPersonagens({ personagens, aoAlterarStatus }: IListaPersonagensProps) {
  return (
    <section
      className="jjk-dossie-lista"
      aria-label="Dossiês da escola Jujutsu — inventário de personagens"
    >
      <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-between gap-2 mb-3">
        <div>
          <h2 className="h5 text-uppercase jjk-section-title mb-1">Dossiês da escola Jujutsu</h2>
          <p className="text-secondary small mb-0 jjk-dossie-lista-lead">
            Consulte os registros abaixo e altere o <strong>estado do dossiê</strong> para atualizar o{' '}
            <strong>painel de energia amaldiçoada</strong> em tempo real. Cada ficha corresponde a um feiticeiro
            catalogado nos arquivos secretos do colégio.
          </p>
        </div>
      </div>

      <div className="row g-4">
        {personagens.map((p, index) => (
          <div key={p.id} className="col-12">
            <CardPersonagem personagem={p} indiceDossie={index + 1} aoAlterarStatus={aoAlterarStatus} />
          </div>
        ))}
      </div>
    </section>
  )
}
