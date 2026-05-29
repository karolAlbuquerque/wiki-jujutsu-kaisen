import type { Personagem } from '../interfaces'

export interface ICardPersonagemProps {
  personagem: Personagem
  indiceDossie: number
  onVisualizar: (personagem: Personagem) => void
  onEditar: (personagem: Personagem) => void
  onExcluir: (personagem: Personagem) => void
}

export function CardPersonagem({
  personagem,
  indiceDossie,
  onVisualizar,
  onEditar,
  onExcluir,
}: ICardPersonagemProps) {
  const { nome, categoria, grau, tecnica, descricao, imagemUrl } = personagem
  const registroFormatado = String(indiceDossie).padStart(3, '0')
  const destaqueEspecial = grau === 'Grau Especial'

  return (
    <article className="card jjk-card jjk-dossie h-100 shadow-sm border-secondary">
      <div className="jjk-dossie-ribbon" aria-hidden="true" />
      <div className="jjk-dossie-header border-bottom border-secondary-subtle px-3 py-2 d-flex justify-content-between align-items-center flex-wrap gap-2">
        <span className="jjk-dossie-codigo small text-uppercase">Registro #{registroFormatado} - Dossie de campo</span>
        {destaqueEspecial ? <span className="jjk-dossie-selo small">Ameaca classificada</span> : null}
      </div>
      <div className="row g-0">
        <div className="col-md-5">
          <img
            src={imagemUrl || '/favicon.svg'}
            className="img-fluid jjk-card-img h-100 w-100 object-fit-cover jjk-dossie-img"
            alt={`Registro visual de ${nome}`}
            loading="lazy"
          />
        </div>
        <div className="col-md-7 d-flex">
          <div className="card-body d-flex flex-column">
            <div className="d-flex justify-content-between align-items-start gap-2 mb-2">
              <div>
                <h3 className="h5 card-title mb-1 jjk-dossie-nome">{nome}</h3>
                <p className="card-subtitle text-secondary small mb-0">
                  {categoria} · {grau}
                </p>
              </div>
              <span className="badge rounded-pill jjk-status-badge jjk-status-badge--ativo">{categoria}</span>
            </div>

            <p className="card-text small flex-grow-1 jjk-dossie-nota">{descricao}</p>

            <dl className="small mb-3 jjk-dossie-meta">
              <div className="mb-1">
                <dt className="d-inline fw-semibold me-1">Tecnica:</dt>
                <dd className="d-inline text-secondary mb-0">{tecnica || 'Nao informada'}</dd>
              </div>
              <div>
                <dt className="d-inline fw-semibold me-1">Imagem:</dt>
                <dd className="d-inline text-secondary mb-0 text-break">{imagemUrl || 'Sem imagem'}</dd>
              </div>
              {destaqueEspecial ? (
                <div className="mt-2">
                  <span className="jjk-elite-tag px-2 py-1 rounded-2 small">Grau especial - ameaca catalogada</span>
                </div>
              ) : null}
            </dl>

            <div className="mt-auto" role="group" aria-label={`Acoes do registro de ${nome}`}>
              <p className="small text-secondary mb-2 jjk-dossie-acoes-titulo">CRUD da wiki conectado ao backend:</p>
              <div className="d-flex flex-wrap gap-2">
                <button type="button" className="btn btn-sm btn-outline-light jjk-btn-tatico" onClick={() => onVisualizar(personagem)}>
                  Ver detalhes
                </button>
                <button type="button" className="btn btn-sm btn-outline-warning jjk-btn-tatico" onClick={() => onEditar(personagem)}>
                  Editar
                </button>
                <button type="button" className="btn btn-sm btn-outline-danger jjk-btn-tatico" onClick={() => onExcluir(personagem)}>
                  Excluir
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
