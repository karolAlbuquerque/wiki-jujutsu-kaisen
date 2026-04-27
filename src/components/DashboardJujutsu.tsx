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
      aria-label="Painel de monitoramento da energia amaldiçoada na Wiki Jujutsu Kaisen"
    >
      <div className="container-fluid px-3 px-lg-4">
        <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-between gap-2 mb-3">
          <h2 className="h5 text-uppercase jjk-section-title mb-0">Painel de energia — arquivo vivo</h2>
          <p className="small text-secondary mb-0 jjk-dashboard-hint">
            Contagens derivadas do inventário de feiticeiros (alterações nos cards refletem aqui na hora).
          </p>
        </div>
        <div className="row g-3">
          <div className="col-6 col-md-4 col-xl-2">
            <div className="jjk-stat-card p-3 rounded-3 h-100">
              <p className="small text-secondary mb-1">Feiticeiros no arquivo</p>
              <p className="h3 mb-0 jjk-stat-value">{totalFeiticeiros}</p>
            </div>
          </div>
          <div className="col-6 col-md-4 col-xl-2">
            <div className="jjk-stat-card jjk-stat-ativo p-3 rounded-3 h-100">
              <p className="small text-secondary mb-1">Em campo</p>
              <p className="h3 mb-0 jjk-stat-value">{feiticeirosAtivos}</p>
            </div>
          </div>
          <div className="col-6 col-md-4 col-xl-2">
            <div className="jjk-stat-card jjk-stat-ferido p-3 rounded-3 h-100">
              <p className="small text-secondary mb-1">Em recuperação</p>
              <p className="h3 mb-0 jjk-stat-value">{feridos}</p>
            </div>
          </div>
          <div className="col-6 col-md-4 col-xl-2">
            <div className="jjk-stat-card jjk-stat-exorcizado p-3 rounded-3 h-100">
              <p className="small text-secondary mb-1">Neutralizados</p>
              <p className="h3 mb-0 jjk-stat-value">{exorcizados}</p>
            </div>
          </div>
          <div className="col-12 col-md-8 col-xl-4">
            <div className="jjk-stat-card jjk-stat-elite p-3 rounded-3 h-100">
              <p className="small text-secondary mb-1">Selo de elite (1º grau / especial)</p>
              <p className="h3 mb-0 jjk-stat-value">{especiaisOuPrimeiroGrau}</p>
              <p className="small text-muted mb-0 mt-2">
                Linha de sangue e graduação no roster — não muda ao alternar situação tática no card.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
