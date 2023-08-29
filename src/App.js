// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GameDetails from './GameDetails';
import GameModal from './GameModal'; // Importe o novo componente
import Modal from './Modal';
import './App.css'; // Importe o arquivo de estilos da aplicação



function App() {
  const [games, setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar a abertura do modal


  useEffect(() => {
    const apiKey = '73dc6d1c61msh53705cc3c2fce43p1ef7bcjsn673ea37c5bcf';
    const apiUrl = 'https://free-nba.p.rapidapi.com/games';

    axios.get(apiUrl, {
      headers: {
        'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
        'X-RapidAPI-Key': apiKey
      }
    })
    .then(response => {
      setGames(response.data.data);
    })
    .catch(error => {
      console.error('Erro ao buscar jogos:', error);
    });
  }, []);

  const handleGameClick = (game) => {
    setSelectedGame(game);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <header className="header">
        <h1 className="title">Jogos da NBA</h1>
      </header>
      <div className="game-list">
        {games.map(game => (
          <div
            key={game.id}
            onClick={() => handleGameClick(game)}
            className="game-card"
          >
            <p className="team-names">
              {game.home_team.full_name} vs {game.visitor_team.full_name}
            </p>
            <p className="game-date">{game.date}</p>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <GameModal game={selectedGame} onClose={handleCloseModal}>
          <GameDetails game={selectedGame} />
        </GameModal>
      )}
    </div>
  );
}

export default App;