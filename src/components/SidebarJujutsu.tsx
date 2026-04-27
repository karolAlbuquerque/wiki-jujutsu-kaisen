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
    <aside className="jjk-aside jjk-aside-archive p-3 p-lg-4 rounded-3 h-100" aria-label="Classificação Jujutsu — arquivo lateral">
      <h2 className="h6 text-uppercase jjk-aside-title mb-2">Classificação Jujutsu</h2>
      <p className="small text-secondary jjk-aside-intro mb-3">
        Extratos internos do arquivo escolar: domínios familiares, técnicas registradas e missões narrativas para
        contextualizar os dossiês ao lado.
      </p>

      <section className="mb-4 jjk-aside-block" aria-labelledby="tecnicas-amaldicoadas-heading">
        <h3 id="tecnicas-amaldicoadas-heading" className="h6 text-warning">
          Técnicas amaldiçoadas — índice rápido
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

      <section className="mb-4 jjk-aside-block" aria-labelledby="clas-heading">
        <h3 id="clas-heading" className="h6 text-warning">
          Linhagem — clãs em arquivo
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

      <section aria-labelledby="episodios-heading" className="jjk-aside-block">
        <h3 id="episodios-heading" className="h6 text-warning">
          Missões em arquivo — arcos
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
