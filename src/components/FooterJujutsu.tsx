export interface IFooterJujutsuProps {
  textoInstitucional: string
}

/**
 * Rodapé com tag address (requisito de semântica HTML5).
 */
export function FooterJujutsu({ textoInstitucional }: IFooterJujutsuProps) {
  return (
    <footer className="jjk-footer jjk-footer-ritual mt-5 border-top border-secondary position-relative">
      <div className="container-fluid px-3 px-lg-4 py-4">
        <p className="small text-secondary mb-3 mb-lg-4 jjk-footer-lead">{textoInstitucional}</p>
        <address className="jjk-address mb-0 not-italic">
          <strong className="jjk-address-name d-inline">Karoline Albuquerque de Assis</strong>
          <span className="jjk-address-sep" aria-hidden="true">
            {' '}
            —{' '}
          </span>
          <time className="jjk-address-date" dateTime="2026-04-24">
            24 de abril de 2026
          </time>
          <span className="jjk-address-sep" aria-hidden="true">
            {' '}
            —{' '}
          </span>
          <span className="jjk-address-course">
            Atividade 06 da disciplina Desenvolvimento de Software Web, Prof. Fernando.
          </span>
        </address>
      </div>
    </footer>
  )
}
