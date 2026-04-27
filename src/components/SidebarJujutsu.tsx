import type { IClã, IEpisodio, ITecnicaAmaldicoada } from '../interfaces'

export interface ISidebarJujutsuProps {
  tecnicas: ITecnicaAmaldicoada[]
  clas: IClã[]
  episodios: IEpisodio[]
}

/**
 * Barra lateral com referências temáticas (dados mockados estáticos).
 */
export function SidebarJujutsu({ tecnicas, clas, episodios }: ISidebarJujutsuProps) {
  return (
    <aside className="jjk-aside p-3 p-lg-4 rounded-3 h-100" aria-label="Briefing do arquivo Jujutsu">
      <h2 className="h6 text-uppercase jjk-aside-title mb-3">Briefing encadeado</h2>
      <p className="small text-secondary jjk-aside-intro mb-3">
        Notas rápidas de domínio, técnicas e arcos para orientar o painel principal.
      </p>

      <section className="mb-4" aria-labelledby="tecnicas-amaldicoadas-heading">
        <h3 id="tecnicas-amaldicoadas-heading" className="h6 text-warning">
          Técnicas amaldiçoadas em destaque
        </h3>
        <ul className="list-unstyled small mb-0 jjk-aside-list">
          {tecnicas.map((t) => (
            <li key={t.nome} className="mb-2">
              <strong className="d-block">{t.nome}</strong>
              <span className="text-secondary">
                {t.tipo} · {t.usuarioNotavel}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-4" aria-labelledby="clas-heading">
        <h3 id="clas-heading" className="h6 text-warning">
          Clãs e linhagem
        </h3>
        <ul className="list-unstyled small mb-0 jjk-aside-list">
          {clas.map((c) => (
            <li key={c.nome} className="mb-2">
              <strong className="d-block">{c.nome}</strong>
              <span className="text-secondary d-block">{c.sedeOuRegiao}</span>
              <span className="text-muted">{c.notaCurta}</span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="episodios-heading">
        <h3 id="episodios-heading" className="h6 text-warning">
          Arcos e missões narrativas
        </h3>
        <ul className="list-unstyled small mb-0 jjk-aside-list">
          {episodios.map((e) => (
            <li key={e.titulo} className="mb-2">
              <strong className="d-block">{e.titulo}</strong>
              <span className="text-secondary d-block">{e.arco}</span>
              <span className="text-muted">{e.codigoExibicao}</span>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  )
}
