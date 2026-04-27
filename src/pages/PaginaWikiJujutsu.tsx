import { useMemo, useState } from 'react'
import type { IStatusFeiticeiro } from '../interfaces'
import { personagensIniciais } from '../data/personagensIniciais'
import { tecnicasDestaque } from '../data/tecnicasDestaque'
import { clasDestaque } from '../data/clasDestaque'
import { episodiosDestaque } from '../data/episodiosDestaque'
import { calcularMetricasDashboard } from '../utils/calcularMetricasDashboard'
import { HeaderJujutsu } from '../components/HeaderJujutsu'
import { DashboardJujutsu } from '../components/DashboardJujutsu'
import { SidebarJujutsu } from '../components/SidebarJujutsu'
import { ListaPersonagens } from '../components/ListaPersonagens'
import { FooterJujutsu } from '../components/FooterJujutsu'

/**
 * Página principal: concentra o estado dos personagens e repassa callbacks via props.
 */
export function PaginaWikiJujutsu() {
  const [personagens, setPersonagens] = useState(personagensIniciais)

  const metricas = useMemo(() => calcularMetricasDashboard(personagens), [personagens])

  function aoAlterarStatusPersonagem(id: string, novoStatus: IStatusFeiticeiro): void {
    setPersonagens((anterior) =>
      anterior.map((p) => (p.id === id ? { ...p, status: novoStatus } : p)),
    )
  }

  return (
    <div className="jjk-app min-vh-100 d-flex flex-column">
      <HeaderJujutsu
        tituloPrincipal="Arquivo Jujutsu"
        subtitulo="Registros de feiticeiros, maldições e técnicas amaldiçoadas — painel simulado dos arquivos secretos do Colégio Jujutsu de Tóquio (dados mockados, sem backend)."
      />

      <main className="flex-grow-1">
        <DashboardJujutsu metricas={metricas} />

        <div className="container-fluid px-3 px-lg-4 pb-5">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-3">
              <SidebarJujutsu
                tecnicas={tecnicasDestaque}
                clas={clasDestaque}
                episodios={episodiosDestaque}
              />
            </div>
            <div className="col-12 col-lg-9">
              <ListaPersonagens
                personagens={personagens}
                aoAlterarStatus={aoAlterarStatusPersonagem}
              />
            </div>
          </div>
        </div>
      </main>

      <FooterJujutsu textoInstitucional="Front-end acadêmico com estado local React — simula relatórios de campo e inventário de energia amaldiçoada sem servidor." />
    </div>
  )
}
