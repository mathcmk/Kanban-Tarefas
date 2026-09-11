import { useState } from "react"


function TaskCard({ tarefa, onAvancar, emAtualizacao, onRemover }) {
    
    const estaAtualizando = (tarefa.id === emAtualizacao)

    const [tarefaParaRemover, setTarefaParaRemover] = useState(null)

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
                    onClick={() => 
                        setTarefaParaRemover(tarefa)}
                    className="btn-remover"
                >
                    Remover
                </button>

                {tarefaParaRemover && (
                    <div className="confirmacao-remocao">

                        <h3>Remover Tarefa?</h3>

                        <p>"Tem certeza que deseja excluir a tarefa " {tarefaParaRemover.titulo}?</p>

                        <button>Cancelar</button>

                        <button>Confirmar</button>
                    </div>
                )}

            </div>

        </div>
    )
}

export default TaskCard