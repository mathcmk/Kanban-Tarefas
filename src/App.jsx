import './App.css'
import { useEffect, useState } from 'react'

import Header from './components/Header'
import KanbanBoard from './components/KanbanBoard'
import { criarTarefa, listarTarefas, atualizarStatusTarefa, deletarTarefa } from './services/TaskService'
import TaskForm from './components/TaskForm'


function App() {
  const [tarefas, setTarefas] = useState([])
  const [formularioAberto, setFormularioAberto] = useState(false)
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState('')
  const [tarefaAtualizando, setTarefaAtualizando] = useState(null)

  useEffect(() => {
    async function carregarTarefasDoSupa() {
      try {
        const tarefasEncontradas = await listarTarefas()

        setTarefas(tarefasEncontradas)
      } catch (error) {
        console.error(error)

        setErro('Não foi possível carregar as tarefas.')
      } finally {
        setCarregando(false)
      }
    }

    carregarTarefasDoSupa()
  }, [])

  function abrirFormulario() {
    setFormularioAberto(true)
  }

  function fecharFormulario() {
    setFormularioAberto(false)
  }

  function obterProximoStatus(statusAtual) {

    if (statusAtual === 'a-fazer') {
      return 'em-andamento'
    } else if (statusAtual === 'em-andamento') {
      return 'concluida'
    }

    return null
  }

  async function avancarTarefa(tarefa) {

    const proximoStatus = obterProximoStatus(tarefa.status)

    if (proximoStatus == null) {
      return
    }

    setTarefaAtualizando(tarefa.id)

    try {

      const tarefaAtualizada = await atualizarStatusTarefa(
        tarefa.id,
        proximoStatus
      )

      setTarefas((tarefasAtuais) => {
        return tarefasAtuais.map((tarefaAtual) => {

          if (tarefaAtual.id === tarefa.id) {

            return tarefaAtualizada
          }

          return tarefaAtual
        })
      })

    } catch (error) {

      console.error(error)
    } finally {

      setTarefaAtualizando(null)
    }
  }


  async function adicionarTarefa(novaTarefa) {
    try {
      setErro('')

      const tarefaCriada = await criarTarefa(novaTarefa)

      setTarefas((tarefasAtuais) => [
        ...tarefasAtuais,
        tarefaCriada,
      ])

      fecharFormulario()
    } catch (error) {
      console.error(error)

      setErro('Não foi possível cadastrar a tarefa.')
    }
  }

  async function removerTarefa(tarefa) {

    try {

      await deletarTarefa(tarefa.id)

      setTarefas((tarefasAtuais) => {
        return tarefasAtuais.filter((tarefaAtual) => {
          return tarefaAtual.id !== tarefa.id
        })
      })

    } catch (error) {
      console.error(error)
      throw error 
    }
  }


  return (
    <main className="pagina">
      <Header aoAbrirFormulario={abrirFormulario} />

      {formularioAberto && (
        <TaskForm
          aoFechar={fecharFormulario}
          aoAdicionar={adicionarTarefa}
        />
      )}

      {carregando && (
        <p className='mensagem'>Carregando tarefas...</p>
      )}

      {erro && (
        <p className='mensagem mensagem-erro'>
          {erro}
        </p>
      )}

      {!carregando && (
        <KanbanBoard
          tarefas={tarefas}
          onAvancar={avancarTarefa}
          emAtualizacao={tarefaAtualizando}
          onRemover={removerTarefa}
        />
      )}
    </main>
  )
}

export default App