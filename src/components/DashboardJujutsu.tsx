import type { IMetricasDashboard } from '../interfaces'

export interface IDashboardJujutsuProps {
  metricas: IMetricasDashboard
}

export function DashboardJujutsu({ metricas }: IDashboardJujutsuProps) {
  const { totalPersonagens, totalCategorias, grauEspecial, maldicoes, feiticeiros } = metricas

  return (
    <section className="jjk-dashboard mb-4" aria-label="Dashboard da wiki">
      <div className="container-fluid px-3 px-lg-4">
        <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-between gap-2 mb-3">
          <h2 className="h5 text-uppercase jjk-section-title mb-0 jjk-energia-titulo">Dashboard da wiki</h2>
          <p className="small text-secondary mb-0 jjk-dashboard-hint">
            Resumo em tempo real do catalogo conectado ao backend Java e ao PostgreSQL.
          </p>
        </div>
        <div className="row g-3">
          <div className="col-6 col-md-4 col-xl-2">
            <div className="jjk-stat-card jjk-stat-panel p-3 rounded-3 h-100 position-relative">
              <span className="jjk-stat-nub" aria-hidden="true">
                *
              </span>
              <p className="small text-secondary mb-1">Total de personagens</p>
              <p className="h3 mb-0 jjk-stat-value">{totalPersonagens}</p>
            </div>
          </div>
          <div className="col-6 col-md-4 col-xl-2">
            <div className="jjk-stat-card jjk-stat-ativo jjk-stat-panel p-3 rounded-3 h-100 position-relative">
              <span className="jjk-stat-nub" aria-hidden="true">
                *
              </span>
              <p className="small text-secondary mb-1">Categorias mapeadas</p>
              <p className="h3 mb-0 jjk-stat-value">{totalCategorias}</p>
            </div>
          </div>
          <div className="col-6 col-md-4 col-xl-2">
            <div className="jjk-stat-card jjk-stat-ferido jjk-stat-panel p-3 rounded-3 h-100 position-relative">
              <span className="jjk-stat-nub" aria-hidden="true">
                *
              </span>
              <p className="small text-secondary mb-1">Grau especial</p>
              <p className="h3 mb-0 jjk-stat-value">{grauEspecial}</p>
            </div>
          </div>
          <div className="col-6 col-md-4 col-xl-2">
            <div className="jjk-stat-card jjk-stat-exorcizado jjk-stat-panel p-3 rounded-3 h-100 position-relative">
              <span className="jjk-stat-nub" aria-hidden="true">
                *
              </span>
              <p className="small text-secondary mb-1">Maldicoes</p>
              <p className="h3 mb-0 jjk-stat-value">{maldicoes}</p>
            </div>
          </div>
          <div className="col-12 col-md-8 col-xl-4">
            <div className="jjk-stat-card jjk-stat-elite jjk-stat-panel p-3 rounded-3 h-100 position-relative">
              <span className="jjk-stat-nub" aria-hidden="true">
                *
              </span>
              <p className="small text-secondary mb-1">Feiticeiros cadastrados</p>
              <p className="h3 mb-0 jjk-stat-value">{feiticeiros}</p>
              <p className="small text-muted mb-0 mt-2">
                O dashboard e recalculado a cada cadastro, edicao ou exclusao.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
