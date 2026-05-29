import { useEffect, useState, type FormEvent } from 'react'
import { categoriasPersonagem, grausPersonagem } from '../data/opcoesPersonagem'
import type { Personagem, PersonagemFormData } from '../interfaces'

const formularioInicial: PersonagemFormData = {
  nome: '',
  categoria: 'Feiticeiro',
  grau: 'Nao informado',
  tecnica: '',
  descricao: '',
  imagemUrl: '',
}

interface FormularioPersonagemProps {
  personagemEmEdicao: Personagem | null
  salvando: boolean
  onSubmit: (payload: PersonagemFormData) => Promise<void> | void
  onCancel: () => void
}

export function FormularioPersonagem({
  personagemEmEdicao,
  salvando,
  onSubmit,
  onCancel,
}: FormularioPersonagemProps) {
  const [formData, setFormData] = useState<PersonagemFormData>(formularioInicial)

  useEffect(() => {
    if (!personagemEmEdicao) {
      setFormData(formularioInicial)
      return
    }

    setFormData({
      nome: personagemEmEdicao.nome,
      categoria: personagemEmEdicao.categoria,
      grau: personagemEmEdicao.grau,
      tecnica: personagemEmEdicao.tecnica,
      descricao: personagemEmEdicao.descricao,
      imagemUrl: personagemEmEdicao.imagemUrl,
    })
  }, [personagemEmEdicao])

  function atualizarCampo(campo: keyof PersonagemFormData, valor: string) {
    setFormData((current) => ({ ...current, [campo]: valor }))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    await onSubmit(formData)
    if (!personagemEmEdicao) {
      setFormData(formularioInicial)
    }
  }

  const titulo = personagemEmEdicao ? 'Editar personagem' : 'Cadastrar personagem'

  return (
    <section className="jjk-aside jjk-aside-archive p-3 p-lg-4 rounded-3 h-100" aria-label={titulo}>
      <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
        <div>
          <h2 className="h6 text-uppercase jjk-aside-title mb-1">{titulo}</h2>
          <p className="small text-secondary mb-0">
            Preencha os campos abaixo para manter a wiki conectada ao PostgreSQL.
          </p>
        </div>
        {personagemEmEdicao ? (
          <button type="button" className="btn btn-sm btn-outline-light" onClick={onCancel}>
            Cancelar
          </button>
        ) : null}
      </div>

      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-12">
          <label className="form-label small text-secondary" htmlFor="nome">
            Nome
          </label>
          <input
            id="nome"
            className="form-control"
            value={formData.nome}
            onChange={(event) => atualizarCampo('nome', event.target.value)}
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label small text-secondary" htmlFor="categoria">
            Categoria
          </label>
          <select
            id="categoria"
            className="form-select"
            value={formData.categoria}
            onChange={(event) => atualizarCampo('categoria', event.target.value)}
            required
          >
            {categoriasPersonagem.map((categoria) => (
              <option key={categoria} value={categoria}>
                {categoria}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-6">
          <label className="form-label small text-secondary" htmlFor="grau">
            Grau
          </label>
          <select
            id="grau"
            className="form-select"
            value={formData.grau}
            onChange={(event) => atualizarCampo('grau', event.target.value)}
            required
          >
            {grausPersonagem.map((grau) => (
              <option key={grau} value={grau}>
                {grau}
              </option>
            ))}
          </select>
        </div>

        <div className="col-12">
          <label className="form-label small text-secondary" htmlFor="tecnica">
            Tecnica
          </label>
          <input
            id="tecnica"
            className="form-control"
            value={formData.tecnica}
            onChange={(event) => atualizarCampo('tecnica', event.target.value)}
          />
        </div>

        <div className="col-12">
          <label className="form-label small text-secondary" htmlFor="imagemUrl">
            URL da imagem
          </label>
          <input
            id="imagemUrl"
            className="form-control"
            value={formData.imagemUrl}
            onChange={(event) => atualizarCampo('imagemUrl', event.target.value)}
            placeholder="/Yuji-Itadori.webp"
          />
        </div>

        <div className="col-12">
          <label className="form-label small text-secondary" htmlFor="descricao">
            Descricao
          </label>
          <textarea
            id="descricao"
            className="form-control"
            rows={5}
            value={formData.descricao}
            onChange={(event) => atualizarCampo('descricao', event.target.value)}
          />
        </div>

        <div className="col-12 d-flex gap-2">
          <button type="submit" className="btn btn-danger flex-grow-1" disabled={salvando}>
            {salvando ? 'Salvando...' : personagemEmEdicao ? 'Atualizar personagem' : 'Cadastrar personagem'}
          </button>
          <button type="button" className="btn btn-outline-light" onClick={onCancel} disabled={salvando}>
            Limpar
          </button>
        </div>
      </form>
    </section>
  )
}
