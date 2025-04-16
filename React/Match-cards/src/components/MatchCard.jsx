import React from "react";
import data from "../data/data.json";
import "./MatchCard.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const MatchCard = () => {
  const { match_result, teams, player_of_the_match } = data;

  return (
    <div className="container mt-4">
      <div className="match-card">
        <div className="result">
          <span className=" result-title">RESULT</span>
          <span className="result-text">{`${match_result.winner} won by ${match_result.win_by}`}</span>
          <span className="pom">
            Player of the Match: {player_of_the_match}
          </span>
        </div>

        <div className="teams">
          {teams.map((teams, id) => (
            <div key={id} className="teams-item ">
              <div className="team-body d-flex align-items-center">
                <img
                  src={teams.img}
                  alt={teams.abbreviation}
                  className="team-img me-2"
                />
                <strong className="team-name">{teams.abbreviation}</strong>

                <span className="trophy ms-1">
                  {teams.win === "Y" ? "🏆" : ""}
                </span>
                <div className="team-score ms-3">
                  <span>
                    {teams.score} ({teams.overs} ov)
                  </span>
                </div>
              </div>
              <div></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MatchCard;
