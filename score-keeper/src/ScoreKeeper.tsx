// @ts-types="react"
import { useState } from "react";

function ScoreKeeper(
  { numPlayers = 4, target = 10 }: { numPlayers: number; target: number },
) {
  const [scorePlayers, setScorePlayers] = useState(
    new Array(numPlayers).fill(0),
  );

  const resetScore = () => {
    setScorePlayers(new Array(numPlayers).fill(0));
  };

  const updateScore = (id: number) => {
    const newScores = scorePlayers.map((c, i) => {
      if (id === i) {
        return c + 1;
      } else {
        return c;
      }
    });

    setScorePlayers(newScores);
  };

  const scoreReached = () => scorePlayers.every((score) => score !== target);

  return (
    <div>
      <ul>
        {scorePlayers.map((scoreP, i) => (
          <div key={i} style={{ display: "inline" }}>
            <li>
              Player {i} : {scoreP}

              <button
                type="button"
                onClick={() =>
                  updateScore(i)}
                disabled={!scoreReached()}
              >
                +1
              </button>
            </li>
            {scoreP == target && (
              <h3 style={{ color: "greenyellow" }}>YOU WIN</h3>
            )}
          </div>
        ))}
      </ul>
      <button type="reset" onClick={resetScore}>
        Reset Score
      </button>
    </div>
  );
}

export default ScoreKeeper;
