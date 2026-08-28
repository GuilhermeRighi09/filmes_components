function Header({ onAdicionar }) {
    return (
        <header className="cabecalho">
            <h1>Catálogo de Filmes</h1>
            <button className="botao-adicionar" onClick={onAdicionar}>
                Adicionar Filme
            </button>
        </header>
    );
}

export default Header;