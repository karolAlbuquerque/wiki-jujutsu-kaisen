import type { IPersonagem, IStatusFeiticeiro } from '../interfaces'

export interface ICardPersonagemProps {
  personagem: IPersonagem
  aoAlterarStatus: (id: string, novoStatus: IStatusFeiticeiro) => void
}

function classePainelStatus(status: IStatusFeiticeiro): string {
  if (status === 'ativo') return 'jjk-status-ativo'
  if (status === 'ferido') return 'jjk-status-ferido'
  return 'jjk-status-exorcizado'
}

function rotuloStatus(status: IStatusFeiticeiro): string {
  if (status === 'ativo') return 'Chamado ativo'
  if (status === 'ferido') return 'Em observação clínica'
  return 'Espírito exorcizado'
}

/**
 * Card individual com botões que disparam mudança de estado no componente pai.
 */
export function CardPersonagem({ personagem, aoAlterarStatus }: ICardPersonagemProps) {
  const { id, nome, tituloOuApelido, descricaoResumida, tecnicaPrincipal, claOuAfiliacao, imagemUrl, status, contaComoEspecialOuPrimeiroGrau } =
    personagem

  return (
    <article className={`card jjk-card h-100 shadow-sm border-secondary ${classePainelStatus(status)}`}>
      <div className="row g-0">
        <div className="col-md-5">
          <img
            src={imagemUrl}
            className="img-fluid rounded-start jjk-card-img h-100 w-100 object-fit-cover"
            alt={`Ilustração temática de ${nome}`}
            loading="lazy"
          />
        </div>
        <div className="col-md-7 d-flex">
          <div className="card-body d-flex flex-column">
            <div className="d-flex justify-content-between align-items-start gap-2 mb-2">
              <div>
                <h3 className="h5 card-title mb-1">{nome}</h3>
                <p className="card-subtitle text-secondary small mb-0">{tituloOuApelido}</p>
              </div>
              <span className={`badge rounded-pill jjk-status-badge jjk-status-badge--${status}`}>
                {rotuloStatus(status)}
              </span>
            </div>

            <p className="card-text small flex-grow-1">{descricaoResumida}</p>

            <dl className="small mb-3">
              <div className="mb-1">
                <dt className="d-inline fw-semibold me-1">Técnica:</dt>
                <dd className="d-inline text-secondary mb-0">{tecnicaPrincipal}</dd>
              </div>
              <div>
                <dt className="d-inline fw-semibold me-1">Afiliação:</dt>
                <dd className="d-inline text-secondary mb-0">{claOuAfiliacao}</dd>
              </div>
              {contaComoEspecialOuPrimeiroGrau ? (
                <div className="mt-2">
                  <span className="jjk-elite-tag px-2 py-1 rounded-2 small">Grau elite no dossiê Jujutsu</span>
                </div>
              ) : null}
            </dl>

            <div className="mt-auto" role="group" aria-label={`Registrar situação tática de ${nome} no arquivo`}>
              <p className="small text-secondary mb-2">Atualizar dossiê (energia amaldiçoada em leitura simulada):</p>
              <div className="d-flex flex-wrap gap-2">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-success jjk-btn-tatico"
                  onClick={() => aoAlterarStatus(id, 'ativo')}
                >
                  Manter em campo
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-warning jjk-btn-tatico"
                  onClick={() => aoAlterarStatus(id, 'ferido')}
                >
                  Ferido — triagem
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-danger jjk-btn-tatico"
                  onClick={() => aoAlterarStatus(id, 'exorcizado')}
                >
                  Registrar exorcismo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
