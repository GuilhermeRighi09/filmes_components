function List({ filmes }) {
	return (
		<main className="lista-filmes">
			<h2>Filmes cadastrados</h2>

			{filmes.length === 0 ? (
				<p>Nenhum filme cadastrado.</p>
			) : (
				<ul>
					{filmes.map((filme, index) => (
						<li key={`${filme.nome}-${index}`}>
							<h3>{filme.nome}</h3>
							<p>Data: {filme.data}</p>
							<p>Genero: {filme.genero}</p>
							<p>Produtor: {filme.produtor}</p>
							<p>Duracao: {filme.duracao} minutos</p>
						</li>
					))}
				</ul>
			)}
		</main>
	);
}

export default List;
