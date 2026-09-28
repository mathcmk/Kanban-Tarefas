import KanbanColumn from './KanbanColumn'

function KanbanBoard({ tarefas, onAvancar, emAtualizacao, onRemover, onEditar }) {

    const tarefasAFazer = tarefas.filter(
        (tarefa) => tarefa.status === 'a-fazer'
    )

    const tarefasEmAndamento = tarefas.filter(
        (tarefa) => tarefa.status === 'em-andamento'
    )

    const tarefasConcluidas = tarefas.filter(
        (tarefa) => tarefa.status === 'concluida'
    )

  return (
    <section className='quadro'>
        <KanbanColumn
        titulo= "A fazer"
        tarefas={tarefasAFazer}
        onAvancar={onAvancar}
        emAtualizacao={emAtualizacao}
        onRemover={onRemover}
        onEditar={onEditar}
        />

        <KanbanColumn 
        titulo="Em Andamento"
        tarefas={tarefasEmAndamento}
        onAvancar={onAvancar}
        emAtualizacao={emAtualizacao}
        onRemover={onRemover}
        onEditar={onEditar}
        />

        <KanbanColumn 
        titulo="Concluídas"
        tarefas={tarefasConcluidas}
        onAvancar={onAvancar}
        emAtualizacao={emAtualizacao}
        onRemover={onRemover}
        onEditar={onEditar}
        />
    </section>
  )
}

export default KanbanBoard