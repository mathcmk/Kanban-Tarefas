import { useState } from "react"

function TaskCard({ tarefa, onAvancar, emAtualizacao, onRemover }) {



    const estaAtualizando = (tarefa.id === emAtualizacao)

    const [tarefaParaRemover, setTarefaParaRemover] = useState(null)

    const [erroRemocao, setErroRemocao] = useState('')


    function cancelarRemocao() {
        setTarefaParaRemover(null)
        setErroRemocao('')
    }

    function iniciarRemocao(tarefa) {
        setErroRemocao('')
        setTarefaParaRemover(tarefa)
    }

    return (
        <div className="tarefa">
            <h3>{tarefa.titulo}</h3>
            <p className="horario-tarefa">{tarefa.horario}</p>

            <div className="acoes-tarefas">

                <button
                    onClick={() => onAvancar(tarefa)}
                    className="btn-avancar"
                    disabled={estaAtualizando}>

                    {estaAtualizando ? 'Atualizando...' : 'Avançar'}
                </button>

                <button
                    onClick={() =>
                        iniciarRemocao(tarefa)}
                    className="btn-remover"
                >
                    Remover
                </button>


                {tarefaParaRemover && (
                    <div className='modal-overlay'>

                        <div className="confirmacao-remocao">

                            <h3>Remover Tarefa?</h3>

                            <p className="menssagem-excluir">Tem certeza que deseja excluir a tarefa  "{tarefaParaRemover.titulo}" ?</p>

                            <div className="acoes-modal">
                                <button className="botao-cancelar-overlay" onClick={cancelarRemocao}>
                                    Cancelar
                                </button>

                                <button className="botao-confirmar-overlay" onClick={async () => {
                                    try {
                                        await onRemover(tarefaParaRemover)
                                        setTarefaParaRemover(null)
                                    } catch (error) {
                                        console.error(error)
                                        setErroRemocao(`Não foi possível remover a tarefa. ${tarefaParaRemover.titulo}`)
                                    }
                                }}
                                >
                                    Confirmar
                                </button>

                                {erroRemocao && (
                                    <p className='mensagem-erro'>
                                        {erroRemocao}
                                    </p>
                                )}

                            </div>
                        </div>
                    </div>
                )}


            </div>

        </div>
    )
}

export default TaskCard