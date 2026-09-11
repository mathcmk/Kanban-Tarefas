import TaskCard from './TaskCard'

function KanbanColumn({ titulo, tarefas, onAvancar, emAtualizacao, onRemover }) {
  return (
    <article className="coluna">
      <h2>{titulo}</h2>

      <div className="lista-tarefas">
        {tarefas.map((tarefa) => (
          <TaskCard
            key={tarefa.id}
            tarefa={tarefa}
            onAvancar={onAvancar}
            emAtualizacao={emAtualizacao}
            onRemover={onRemover}
          />
        ))}
      </div>
    </article>
  )
}

export default KanbanColumn