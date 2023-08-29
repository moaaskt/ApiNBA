// src/GameModal.js
import React from 'react';

const GameModal = ({ game, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Detalhes do Jogo</h2>
        <p><strong>Equipe da Casa:</strong> {game.home_team.full_name}</p>
        <p><strong>Equipe Visitante:</strong> {game.visitor_team.full_name}</p>
        <p><strong>Data:</strong> {game.date}</p>
        {/* Adicione mais informações do jogo aqui */}
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

export default GameModal;
