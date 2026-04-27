export interface IHeaderJujutsuProps {
  tituloPrincipal: string
  subtitulo: string
}

/**
 * Cabeçalho da wiki — arquivo escolar temático (tag header obrigatória).
 */
export function HeaderJujutsu({ tituloPrincipal, subtitulo }: IHeaderJujutsuProps) {
  return (
    <header className="jjk-header border-bottom border-secondary shadow-sm mb-4 position-relative overflow-hidden">
      <div className="jjk-header-aura" aria-hidden="true" />
      <div className="container-fluid px-3 px-lg-4 py-4 position-relative">
        <div className="jjk-header-seal-row mb-3">
          <span className="jjk-header-archive-badge text-uppercase small">Tokyo Jujutsu High Archives</span>
          <span className="jjk-header-classification small">Classificação especial — uso acadêmico</span>
        </div>
        <div className="d-flex flex-column flex-lg-row align-items-lg-start justify-content-lg-between gap-3">
          <div className="flex-grow-1">
            <h1 className="h2 mb-2 jjk-title text-uppercase tracking-tight">{tituloPrincipal}</h1>
            <p className="mb-0 text-secondary jjk-subtitle">{subtitulo}</p>
          </div>
          <div className="d-flex flex-column align-items-lg-end gap-2 flex-shrink-0">
            <span className="jjk-badge-orbit px-3 py-2 rounded-pill small text-center">
              Painel de arquivo · React · Vite · TypeScript · Bootstrap (CDN)
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
