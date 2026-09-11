function TaskCard({ tarefa, onAvancar, emAtualizacao, onRemover }) {
    const estaAtualizando = (tarefa.id === emAtualizacao)

    return (
        <div className="tarefa">
            <h3>{tarefa.titulo}</h3>
            <p>{tarefa.horario}</p>

            <div className="acoes-tarefas">

                <button
                    onClick={() => onAvancar(tarefa)}
                    className="btn-avancar"
                    disabled={estaAtualizando}>

                    {estaAtualizando ? 'Atualizando...' : 'Avançar'}
                </button>

                <button
                    onClick={() => onRemover(tarefa)}
                    className="btn-remover"
                >
                    Remover
                </button>

            </div>

        </div>
    )
}

export default TaskCard