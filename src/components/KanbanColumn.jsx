import TaskCard from './TaskCard'

function KanbanColumn({ titulo, tarefas, onAvancar, emAtualizacao, onRemover, onEditar, onArrastar }) {
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
            onEditar={onEditar}
            onArrastar={onArrastar}
          />
        ))}
      </div>
    </article>
  )
}

export default KanbanColumn