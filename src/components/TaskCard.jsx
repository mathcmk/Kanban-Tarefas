function TaskCard({ tarefa, onAvancar, emAtualizacao }) {
     const estaAtualizando = (tarefa.id === emAtualizacao)
    
    return(
        <div className="tarefa">
            <h3>{tarefa.titulo}</h3>
            <p>{tarefa.horario}</p>
            <button 
                onClick={() => onAvancar(tarefa)} 
                className="btn-avancar" 
                disabled={estaAtualizando}>

                {estaAtualizando ? 'Atualizando...': 'Avançar'}
            </button>
        </div>
    )
}

export default TaskCard