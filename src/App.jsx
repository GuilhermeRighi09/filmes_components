import {useEffect, useState} from 'react';
import Header from './components/Header';
import List from './components/List';
import Add from './components/Add';
import './App.css';

function App() {
  const [pagina, setPagina] = useState('lista');
  const [filmes, setFilmes] = useState(() => {
    const filmesSalvos = localStorage.getItem('filmes');
    return filmesSalvos ? JSON.parse(filmesSalvos) : [];
  });

  useEffect(() => {
    localStorage.setItem('filmes', JSON.stringify(filmes));
  }, [filmes]);

  function adicionarFilme(filme) {
    setFilmes((filmesAtuais) => [...filmesAtuais, filme]);
    setPagina('lista');
  }

  return (
    <>
      {pagina === 'lista' ? (
        <>
          <Header onAdicionar={() => setPagina('adicionar')} />
          <List filmes={filmes} />
        </>
      ) : (
        <Add onAdicionar={adicionarFilme} onVoltar={() => setPagina('lista')} />
      )}
    </>
  );
}

export default App;
