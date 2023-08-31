// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GameDetails from './GameDetails';
import GameModal from './GameModal'; // Importe o novo componente
import Modal from './Modal';
import './App.css'; // Importe o arquivo de estilos da aplicação
import './index.css'; // Importe o arquivo de estilos da aplicação

import nbaLogo from './pngimg.com - nba_PNG22.png'; // Importe o logo SVG



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
        <img src={nbaLogo} alt="NBA Logo" className="header-logo" />
      </header>
      <div className="game-list">
        {games.map(game => (
          <div
            key={game.id}
            onClick={() => handleGameClick(game)}
            className="game-card"
          >
            <p className="team-names">
              <span className="home-team">{game.home_team.full_name}</span>
              <span className="vs">vs</span>
              <span className="visitor-team">{game.visitor_team.full_name}</span>
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