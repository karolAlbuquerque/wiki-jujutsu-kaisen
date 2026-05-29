import type { Personagem, PersonagemFormData } from '../interfaces'

const API_BASE_URL =
  import.meta.env.VITE_API_URL?.replace(/\/$/, '') ?? 'http://localhost:8080/backend-java/api'

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(init?.headers ?? {}),
    },
    ...init,
  })

  if (!response.ok) {
    let message = 'Falha ao comunicar com o servidor.'
    try {
      const errorPayload = (await response.json()) as { erro?: string }
      if (errorPayload.erro) {
        message = errorPayload.erro
      }
    } catch {
      // Mantem a mensagem padrao.
    }
    throw new Error(message)
  }

  if (response.status === 204) {
    return undefined as T
  }

  return (await response.json()) as T
}

export function listarPersonagens() {
  return request<Personagem[]>('/personagens')
}

export function buscarPersonagemPorId(id: number) {
  return request<Personagem>(`/personagens/${id}`)
}

export function criarPersonagem(payload: PersonagemFormData) {
  return request<Personagem>('/personagens', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

export function atualizarPersonagem(id: number, payload: PersonagemFormData) {
  return request<Personagem>(`/personagens/${id}`, {
    method: 'PUT',
    body: JSON.stringify(payload),
  })
}

export function excluirPersonagem(id: number) {
  return request<{ mensagem: string }>(`/personagens/${id}`, {
    method: 'DELETE',
  })
}
