
import React from 'react';
import data from '../data/data.json';
import './MatchCard.scss';

const MatchCard = () => {
  const { match_result, player_of_the_match } = data;

  return (
    <div className="match-card">
      <div className="result">
        <span className="result-status">RESULT</span>
        <span className="result-title">{`${match_result.winner} won by ${match_result.win_by}`}</span>
        <span className="pom">Player of the Match: {player_of_the_match}</span>
      </div>
     
    </div>
  );
};

export default MatchCard;
