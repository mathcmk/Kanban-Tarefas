function Header({ aoAbrirFormulario }) {
    return (
        <header className="cabecalho">
            <div>
                <p>Meu quadro diário</p>
                <h1>Kanban de tarefas</h1>
            </div>

            <button
                type="button"
                onClick={aoAbrirFormulario}
            >
                Nova tarefa
            </button>
        </header>
    )
}

export default Header