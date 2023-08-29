// src/GameDetails.js
import React from 'react';
import './GameDetails.css'; // Certifique-se de que o caminho está correto

const GameDetails = ({ game }) => {
  return (
    <div className="game-details">
      <h2>Detalhes do Jogo</h2>
      <p><strong>Equipe da Casa:</strong> {game.home_team.full_name}</p>
      <p><strong>Equipe Visitante:</strong> {game.visitor_team.full_name}</p>
      <p><strong>Data:</strong> {game.date}</p>
      {/* Adicione mais informações do jogo aqui */}
    </div>
  );
};

export default GameDetails;
