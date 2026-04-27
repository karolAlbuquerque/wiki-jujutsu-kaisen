import type { IMetricasDashboard } from '../interfaces'

export interface IDashboardJujutsuProps {
  metricas: IMetricasDashboard
}

/**
 * Contadores dinâmicos derivados do estado dos personagens (useState no pai).
 */
export function DashboardJujutsu({ metricas }: IDashboardJujutsuProps) {
  const {
    totalFeiticeiros,
    feiticeirosAtivos,
    feridos,
    exorcizados,
    especiaisOuPrimeiroGrau,
  } = metricas

  return (
    <section
      className="jjk-dashboard mb-4"
      aria-label="Painel de energia amaldiçoada — leitura em tempo real dos dossiês"
    >
      <div className="container-fluid px-3 px-lg-4">
        <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-between gap-2 mb-3">
          <h2 className="h5 text-uppercase jjk-section-title mb-0 jjk-energia-titulo">Painel de energia amaldiçoada</h2>
          <p className="small text-secondary mb-0 jjk-dashboard-hint">
            Medições derivadas do <strong>estado real</strong> dos dossiês. Cada comando numa ficha reordena estes
            números na hora.
          </p>
        </div>
        <div className="row g-3">
          <div className="col-6 col-md-4 col-xl-2">
            <div className="jjk-stat-card jjk-stat-panel p-3 rounded-3 h-100 position-relative">
              <span className="jjk-stat-nub" aria-hidden="true">
                ◇
              </span>
              <p className="small text-secondary mb-1">Registros catalogados</p>
              <p className="h3 mb-0 jjk-stat-value">{totalFeiticeiros}</p>
            </div>
          </div>
          <div className="col-6 col-md-4 col-xl-2">
            <div className="jjk-stat-card jjk-stat-ativo jjk-stat-panel p-3 rounded-3 h-100 position-relative">
              <span className="jjk-stat-nub" aria-hidden="true">
                ◆
              </span>
              <p className="small text-secondary mb-1">Energia ativa / em missão</p>
              <p className="h3 mb-0 jjk-stat-value">{feiticeirosAtivos}</p>
            </div>
          </div>
          <div className="col-6 col-md-4 col-xl-2">
            <div className="jjk-stat-card jjk-stat-ferido jjk-stat-panel p-3 rounded-3 h-100 position-relative">
              <span className="jjk-stat-nub" aria-hidden="true">
                ◇
              </span>
              <p className="small text-secondary mb-1">Casos em observação</p>
              <p className="h3 mb-0 jjk-stat-value">{feridos}</p>
            </div>
          </div>
          <div className="col-6 col-md-4 col-xl-2">
            <div className="jjk-stat-card jjk-stat-exorcizado jjk-stat-panel p-3 rounded-3 h-100 position-relative">
              <span className="jjk-stat-nub" aria-hidden="true">
                ◇
              </span>
              <p className="small text-secondary mb-1">Registros selados</p>
              <p className="h3 mb-0 jjk-stat-value">{exorcizados}</p>
            </div>
          </div>
          <div className="col-12 col-md-8 col-xl-4">
            <div className="jjk-stat-card jjk-stat-elite jjk-stat-panel p-3 rounded-3 h-100 position-relative">
              <span className="jjk-stat-nub" aria-hidden="true">
                ✦
              </span>
              <p className="small text-secondary mb-1">Ameaças especiais (1º grau / domínio)</p>
              <p className="h3 mb-0 jjk-stat-value">{especiaisOuPrimeiroGrau}</p>
              <p className="small text-muted mb-0 mt-2">
                Contagem fixa da ficha original (classe de risco) — não muda ao alternar missão / observação /
                selo no dossiê.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
