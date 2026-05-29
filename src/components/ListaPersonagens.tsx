import type { Personagem } from '../interfaces'
import { CardPersonagem } from './CardPersonagem'

export interface IListaPersonagensProps {
  personagens: Personagem[]
  onVisualizar: (personagem: Personagem) => void
  onEditar: (personagem: Personagem) => void
  onExcluir: (personagem: Personagem) => void
}

export function ListaPersonagens({
  personagens,
  onVisualizar,
  onEditar,
  onExcluir,
}: IListaPersonagensProps) {
  return (
    <section className="jjk-dossie-lista" aria-label="Dossies da escola Jujutsu">
      <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-between gap-2 mb-3">
        <div>
          <h2 className="h5 text-uppercase jjk-section-title mb-1">Dossies da escola Jujutsu</h2>
          <p className="text-secondary small mb-0 jjk-dossie-lista-lead">
            Consulte os registros abaixo, abra os detalhes e use editar ou excluir para manter a wiki sincronizada
            com a API Java.
          </p>
        </div>
      </div>

      <div className="row g-4">
        {personagens.length === 0 ? (
          <div className="col-12">
            <div className="alert alert-dark border-secondary-subtle mb-0">
              Nenhum personagem cadastrado no banco. Use o formulario ao lado para inserir o primeiro registro.
            </div>
          </div>
        ) : null}

        {personagens.map((personagem, index) => (
          <div key={personagem.id} className="col-12">
            <CardPersonagem
              personagem={personagem}
              indiceDossie={index + 1}
              onVisualizar={onVisualizar}
              onEditar={onEditar}
              onExcluir={onExcluir}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
