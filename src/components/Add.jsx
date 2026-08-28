import {useState} from 'react';

function Add({ onAdicionar, onVoltar }) {
	const [filme, setFilme] = useState({
		nome: '',
		data: '',
		genero: '',
		produtor: '',
		duracao: ''
	});

	function atualizarCampo(event) {
		const {name, value} = event.target;
		setFilme((filmeAtual) => ({...filmeAtual, [name]: value}));
	}

	function cadastrarFilme(event) {
		event.preventDefault();
		onAdicionar(filme);
	}

	return (
		<main className="pagina-adicionar">
			<h2>Cadastrar filme</h2>
			<form onSubmit={cadastrarFilme}>
				<label>
					Nome
					<input name="nome" value={filme.nome} onChange={atualizarCampo} required />
				</label>
				<label>
					Data
					<input type="date" name="data" value={filme.data} onChange={atualizarCampo} required />
				</label>
				<label>
					Genero
					<input name="genero" value={filme.genero} onChange={atualizarCampo} required />
				</label>
				<label>
					Produtor
					<input name="produtor" value={filme.produtor} onChange={atualizarCampo} required />
				</label>
				<label>
					Duracao (minutos)
					<input type="number" name="duracao" min="1" value={filme.duracao} onChange={atualizarCampo} required />
				</label>
				<div>
					<button type="button" onClick={onVoltar}>Voltar</button>
					<button type="submit">Cadastrar filme</button>
				</div>
			</form>
		</main>
	);
}

export default Add;