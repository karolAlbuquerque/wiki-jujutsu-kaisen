import type { IPersonagem, IStatusFeiticeiro } from '../interfaces'

export interface ICardPersonagemProps {
  personagem: IPersonagem
  indiceDossie: number
  aoAlterarStatus: (id: string, novoStatus: IStatusFeiticeiro) => void
}

function classePainelStatus(status: IStatusFeiticeiro): string {
  if (status === 'ativo') return 'jjk-status-ativo'
  if (status === 'ferido') return 'jjk-status-ferido'
  return 'jjk-status-exorcizado'
}

function rotuloStatus(status: IStatusFeiticeiro): string {
  if (status === 'ativo') return 'Em missão'
  if (status === 'ferido') return 'Observação tática'
  return 'Registro selado'
}

/**
 * Card individual com botões que disparam mudança de estado no componente pai.
 */
export function CardPersonagem({ personagem, indiceDossie, aoAlterarStatus }: ICardPersonagemProps) {
  const { id, nome, tituloOuApelido, descricaoResumida, tecnicaPrincipal, claOuAfiliacao, imagemUrl, status, contaComoEspecialOuPrimeiroGrau } =
    personagem

  const registroFormatado = String(indiceDossie).padStart(3, '0')

  return (
    <article
      className={`card jjk-card jjk-dossie h-100 shadow-sm border-secondary ${classePainelStatus(status)}`}
    >
      <div className="jjk-dossie-ribbon" aria-hidden="true" />
      <div className="jjk-dossie-header border-bottom border-secondary-subtle px-3 py-2 d-flex justify-content-between align-items-center flex-wrap gap-2">
        <span className="jjk-dossie-codigo small text-uppercase">
          Registro #{registroFormatado} — Dossiê de campo
        </span>
        {contaComoEspecialOuPrimeiroGrau ? <span className="jjk-dossie-selo small">Ameaça classificada</span> : null}
      </div>
      <div className="row g-0">
        <div className="col-md-5">
          <img
            src={imagemUrl}
            className="img-fluid jjk-card-img h-100 w-100 object-fit-cover jjk-dossie-img"
            alt={`Registro visual de ${nome} (dossiê acadêmico)`}
            loading="lazy"
          />
        </div>
        <div className="col-md-7 d-flex">
          <div className="card-body d-flex flex-column">
            <div className="d-flex justify-content-between align-items-start gap-2 mb-2">
              <div>
                <h3 className="h5 card-title mb-1 jjk-dossie-nome">{nome}</h3>
                <p className="card-subtitle text-secondary small mb-0">{tituloOuApelido}</p>
              </div>
              <span className={`badge rounded-pill jjk-status-badge jjk-status-badge--${status}`}>
                {rotuloStatus(status)}
              </span>
            </div>

            <p className="card-text small flex-grow-1 jjk-dossie-nota">{descricaoResumida}</p>

            <dl className="small mb-3 jjk-dossie-meta">
              <div className="mb-1">
                <dt className="d-inline fw-semibold me-1">Técnica amaldiçoada:</dt>
                <dd className="d-inline text-secondary mb-0">{tecnicaPrincipal}</dd>
              </div>
              <div>
                <dt className="d-inline fw-semibold me-1">Afiliação / clã:</dt>
                <dd className="d-inline text-secondary mb-0">{claOuAfiliacao}</dd>
              </div>
              {contaComoEspecialOuPrimeiroGrau ? (
                <div className="mt-2">
                  <span className="jjk-elite-tag px-2 py-1 rounded-2 small">Grau especial — 1º grau / ameaça catalogada</span>
                </div>
              ) : null}
            </dl>

            <div className="mt-auto" role="group" aria-label={`Atualizar estado do registro de ${nome}`}>
              <p className="small text-secondary mb-2 jjk-dossie-acoes-titulo">
                Comandos de situação tática (atualizam o painel de energia):
              </p>
              <div className="d-flex flex-wrap gap-2">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-success jjk-btn-tatico"
                  onClick={() => aoAlterarStatus(id, 'ativo')}
                >
                  Enviar em missão
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-warning jjk-btn-tatico"
                  onClick={() => aoAlterarStatus(id, 'ferido')}
                >
                  Relatório de observação
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-danger jjk-btn-tatico"
                  onClick={() => aoAlterarStatus(id, 'exorcizado')}
                >
                  Selar registro
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
