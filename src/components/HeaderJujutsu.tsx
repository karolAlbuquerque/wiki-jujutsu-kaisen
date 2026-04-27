export interface IHeaderJujutsuProps {
  tituloPrincipal: string
  subtitulo: string
}

/**
 * Cabeçalho da wiki com identidade visual Jujutsu Kaisen.
 */
export function HeaderJujutsu({ tituloPrincipal, subtitulo }: IHeaderJujutsuProps) {
  return (
    <header className="jjk-header border-bottom border-secondary shadow-sm mb-4">
      <div className="container-fluid px-3 px-lg-4 py-3">
        <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-2">
          <div>
            <h1 className="h3 mb-1 jjk-title text-uppercase tracking-tight">{tituloPrincipal}</h1>
            <p className="mb-0 text-secondary jjk-subtitle">{subtitulo}</p>
          </div>
          <div className="jjk-badge-pill px-3 py-2 rounded-pill small">
            Monitoramento · React · Vite · TS · Bootstrap (CDN)
          </div>
        </div>
      </div>
    </header>
  )
}
