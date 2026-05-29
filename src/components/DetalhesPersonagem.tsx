import type { Personagem } from '../interfaces'

interface DetalhesPersonagemProps {
  personagem: Personagem | null
}

export function DetalhesPersonagem({ personagem }: DetalhesPersonagemProps) {
  return (
    <section className="jjk-aside jjk-aside-archive p-3 p-lg-4 rounded-3 h-100" aria-label="Detalhes do personagem">
      <h2 className="h6 text-uppercase jjk-aside-title mb-2">Detalhes do registro</h2>
      {!personagem ? (
        <p className="small text-secondary mb-0">
          Selecione um personagem para visualizar os detalhes completos do dossie.
        </p>
      ) : (
        <div className="d-flex flex-column gap-3">
          <img
            src={personagem.imagemUrl || '/favicon.svg'}
            alt={`Imagem de ${personagem.nome}`}
            className="img-fluid rounded-3 border border-secondary-subtle"
          />
          <div>
            <h3 className="h5 mb-1">{personagem.nome}</h3>
            <p className="small text-secondary mb-0">
              {personagem.categoria} · {personagem.grau}
            </p>
          </div>
          <dl className="small mb-0">
            <dt className="fw-semibold">Tecnica</dt>
            <dd className="text-secondary">{personagem.tecnica || 'Nao informada'}</dd>
            <dt className="fw-semibold">Descricao</dt>
            <dd className="text-secondary mb-0">{personagem.descricao || 'Sem descricao cadastrada.'}</dd>
          </dl>
        </div>
      )}
    </section>
  )
}
