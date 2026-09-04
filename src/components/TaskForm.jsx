import { useState } from "react"

function TaskForm({ aoFechar, aoAdicionar }) {
    function enviarFormulario (evento) {
        evento.preventDefault()

        if(!titulo.trim() || !horario){
            return
        }

        const novatarefa = {
            id: Date.now(),
            titulo: titulo.trim(),
            horario: horario,
            status: status
        }

        aoAdicionar(novatarefa)
    }

    const [titulo, setTitulo] = useState('')
    const [horario, setHorario] = useState('')
    const [status, setStatus] = useState('a-fazer')

    return (
        <div className="modal-fundo">
            <div className="modal">
                <div className="modal-cabecalho">
                    <h2>Nova tarefa</h2>

                    <button 
                    type="button"
                    className="botao-fechar"
                    onClick={aoFechar}
                    >
                        x
                    </button>
                </div>

                <form onSubmit={enviarFormulario}>
                    <div className="campo">
                        <label htmlFor="titulo">Nome da Tarefa</label>

                        <input 
                        id="titulo"
                        type="text"
                        placeholder="Estudar React..."
                        value={titulo}
                        onChange={(event) => setTitulo(event.target.value)}
                        required
                         />
                    </div>

                    <div className="campo">
                        <label htmlFor="horario">Horário</label>

                        <input 
                        id="horario"
                        type="time"
                        value={horario}
                        onChange={(evento) => setHorario(evento.target.value)}
                         />
                    </div>

                    <div className="campo">
                        <label htmlFor="status">Status inicial</label>

                        <select 
                        id="status"
                        value={status}
                        onChange={(evento) => setStatus(evento.target.value)}
                        >
                            <option value="a-fazer">A fazer</option>
                            <option value="em-andamento">Em andamento</option>
                            <option value="concluida">Concluída</option>
                        </select>
                    </div>

                    <div className="formulario-acoes">
                        <button
                        type="button"
                        className="botao-cancelar"
                        onClick={aoFechar}
                        >
                            Cancelar
                        </button>

                        <button type="submit" className="botao-adicionar">Adicionar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TaskForm