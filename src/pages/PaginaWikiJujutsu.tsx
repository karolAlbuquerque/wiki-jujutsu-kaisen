import { useEffect, useMemo, useState } from 'react'
import type { Personagem, PersonagemFormData } from '../interfaces'
import { tecnicasDestaque } from '../data/tecnicasDestaque'
import { clasDestaque } from '../data/clasDestaque'
import { episodiosDestaque } from '../data/episodiosDestaque'
import { calcularMetricasDashboard } from '../utils/calcularMetricasDashboard'
import {
  atualizarPersonagem,
  buscarPersonagemPorId,
  criarPersonagem,
  excluirPersonagem,
  listarPersonagens,
} from '../services/api'
import { HeaderJujutsu } from '../components/HeaderJujutsu'
import { DashboardJujutsu } from '../components/DashboardJujutsu'
import { SidebarJujutsu } from '../components/SidebarJujutsu'
import { ListaPersonagens } from '../components/ListaPersonagens'
import { FooterJujutsu } from '../components/FooterJujutsu'
import { FormularioPersonagem } from '../components/FormularioPersonagem'
import { DetalhesPersonagem } from '../components/DetalhesPersonagem'

export function PaginaWikiJujutsu() {
  const [personagens, setPersonagens] = useState<Personagem[]>([])
  const [personagemSelecionado, setPersonagemSelecionado] = useState<Personagem | null>(null)
  const [personagemEmEdicao, setPersonagemEmEdicao] = useState<Personagem | null>(null)
  const [carregando, setCarregando] = useState(true)
  const [salvando, setSalvando] = useState(false)
  const [mensagem, setMensagem] = useState<{ tipo: 'success' | 'danger'; texto: string } | null>(null)

  const metricas = useMemo(() => calcularMetricasDashboard(personagens), [personagens])

  useEffect(() => {
    void carregarPersonagens()
  }, [])

  async function carregarPersonagens() {
    setCarregando(true)
    try {
      const dados = await listarPersonagens()
      setPersonagens(dados)
      if (dados.length > 0) {
        setPersonagemSelecionado((atual) => atual ?? dados[0])
      } else {
        setPersonagemSelecionado(null)
      }
    } catch (error) {
      setMensagem({
        tipo: 'danger',
        texto: error instanceof Error ? error.message : 'Nao foi possivel carregar os personagens.',
      })
    } finally {
      setCarregando(false)
    }
  }

  async function handleSubmit(payload: PersonagemFormData) {
    setSalvando(true)
    try {
      if (personagemEmEdicao) {
        await atualizarPersonagem(personagemEmEdicao.id, payload)
        setMensagem({ tipo: 'success', texto: 'Personagem atualizado com sucesso.' })
      } else {
        await criarPersonagem(payload)
        setMensagem({ tipo: 'success', texto: 'Personagem cadastrado com sucesso.' })
      }

      setPersonagemEmEdicao(null)
      await carregarPersonagens()
    } catch (error) {
      setMensagem({
        tipo: 'danger',
        texto: error instanceof Error ? error.message : 'Nao foi possivel salvar o personagem.',
      })
    } finally {
      setSalvando(false)
    }
  }

  async function handleVisualizar(personagem: Personagem) {
    try {
      const personagemCompleto = await buscarPersonagemPorId(personagem.id)
      setPersonagemSelecionado(personagemCompleto)
    } catch (error) {
      setMensagem({
        tipo: 'danger',
        texto: error instanceof Error ? error.message : 'Nao foi possivel carregar os detalhes.',
      })
    }
  }

  function handleEditar(personagem: Personagem) {
    setPersonagemEmEdicao(personagem)
    setPersonagemSelecionado(personagem)
  }

  async function handleExcluir(personagem: Personagem) {
    const confirmou = window.confirm(`Deseja realmente excluir ${personagem.nome}?`)
    if (!confirmou) {
      return
    }

    try {
      await excluirPersonagem(personagem.id)
      setMensagem({ tipo: 'success', texto: 'Personagem excluido com sucesso.' })
      if (personagemSelecionado?.id === personagem.id) {
        setPersonagemSelecionado(null)
      }
      if (personagemEmEdicao?.id === personagem.id) {
        setPersonagemEmEdicao(null)
      }
      await carregarPersonagens()
    } catch (error) {
      setMensagem({
        tipo: 'danger',
        texto: error instanceof Error ? error.message : 'Nao foi possivel excluir o personagem.',
      })
    }
  }

  function limparFormulario() {
    setPersonagemEmEdicao(null)
  }

  return (
    <div className="jjk-app min-vh-100 d-flex flex-column">
      <HeaderJujutsu
        tituloPrincipal="Wiki Jujutsu Kaisen"
        subtitulo="Catalogo de personagens, tecnicas e classificacoes do universo Jujutsu."
      />

      <main className="flex-grow-1">
        <DashboardJujutsu metricas={metricas} />

        <div className="container-fluid px-3 px-lg-4 pb-5">
          {mensagem ? (
            <div className={`alert alert-${mensagem.tipo} border-0 shadow-sm`} role="alert">
              {mensagem.texto}
            </div>
          ) : null}

          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-3">
              <SidebarJujutsu tecnicas={tecnicasDestaque} clas={clasDestaque} episodios={episodiosDestaque} />
            </div>
            <div className="col-12 col-lg-6">
              {carregando ? (
                <div className="alert alert-dark border-secondary-subtle">Carregando personagens da API...</div>
              ) : (
                <ListaPersonagens
                  personagens={personagens}
                  onVisualizar={handleVisualizar}
                  onEditar={handleEditar}
                  onExcluir={handleExcluir}
                />
              )}
            </div>
            <div className="col-12 col-lg-3 d-flex flex-column gap-4">
              <FormularioPersonagem
                personagemEmEdicao={personagemEmEdicao}
                salvando={salvando}
                onSubmit={handleSubmit}
                onCancel={limparFormulario}
              />
              <DetalhesPersonagem personagem={personagemSelecionado} />
            </div>
          </div>
        </div>
      </main>

      <FooterJujutsu textoInstitucional="Wiki de personagens de Jujutsu Kaisen." />
    </div>
  )
}
