import { useState } from "react"

function TaskCard({ tarefa, onAvancar, emAtualizacao, onRemover }) {


    const [tarefaParaRemover, setTarefaParaRemover] = useState(null)
    const [erroRemocao, setErroRemocao] = useState('' )
    const [estaRemovendo, setEstaRemovendo] = useState(false)


    const estaAtualizando = (tarefa.id === emAtualizacao)


    function cancelarRemocao() {
        setTarefaParaRemover(null)
        setErroRemocao('')
    }

    function iniciarRemocao(tarefaSelecionada) {
        setErroRemocao('')
        setTarefaParaRemover(tarefaSelecionada)
    }

    async function confirmarRemocao() {

        setEstaRemovendo(true)

        try {
            await onRemover(tarefaParaRemover)
            setTarefaParaRemover(null)

        } catch (error) {

            console.error(error)
            setErroRemocao(`Não foi possivel fazer a remoção da tarefa ${tarefaParaRemover.titulo}, aguarde um momento e tente novamente!`)

        } finally {
            setEstaRemovendo(false)
        }
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

                            {erroRemocao && (
                                <p className='erro-remocao-modal'>
                                    {erroRemocao}
                                </p>
                            )}

                            <div className="acoes-modal">
                                <button
                                    className="botao-cancelar-overlay"
                                    onClick={cancelarRemocao}
                                    disabled={estaRemovendo}>
                                    Cancelar
                                </button>

                                <button
                                    className="botao-confirmar-overlay"
                                    onClick={confirmarRemocao}
                                    disabled={estaRemovendo} >

                                    {estaRemovendo ? 'Removendo...' : 'Confirmar'}
                                </button>

                            </div>
                        </div>
                    </div>
                )}


            </div>

        </div>
    )
}

export default TaskCard