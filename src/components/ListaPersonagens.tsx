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
    <section aria-label="Inventário de feiticeiros no arquivo Jujutsu">
      <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-between gap-2 mb-3">
        <div>
          <h2 className="h5 text-uppercase jjk-section-title mb-1">Arquivo Jujutsu — feiticeiros catalogados</h2>
          <p className="text-secondary small mb-0">
            Ajuste a <strong>situação tática</strong> de cada registro: <strong>Ativo em campo</strong>,{' '}
            <strong>ferido em recuperação</strong> ou <strong>exorcizado / neutralizado</strong>. O painel de
            energia acima acompanha o inventário em tempo real.
          </p>
        </div>
      </div>

      <div className="row g-4">
        {personagens.map((p) => (
          <div key={p.id} className="col-12">
            <CardPersonagem personagem={p} aoAlterarStatus={aoAlterarStatus} />
          </div>
        ))}
      </div>
    </section>
  )
}
