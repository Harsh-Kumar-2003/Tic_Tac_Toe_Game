import { useState, useEffect } from 'react';
import Player from './components/Player.js';
import Board from './components/Board.js';
import Log from './components/Log.js';
import GameOver from './components/GameOver.js';
import { WINNING_COMBINATIONS } from './winning_combinations.js';

const initialBoard=[null, null, null, null, null, null, null, null, null];

function App() {
  const [logs, setLogs] = useState(['X']);
  const [board, setboard] = useState(initialBoard);
  const [winner, setWinner] = useState(null);
  const [playerName, setPlayerName] = useState({'X': "Player 1", 'O': "Player 2"});
  const activePlayerSymbol = logs[0];

  function handleChoice(event){
    const index = Number(event.target.value);
    if (winner) return;
    setboard(prev => {
        if (prev[index]) return prev;
        const temp = [...prev];
        temp[index] = activePlayerSymbol;
        return temp;
    });
    setLogs(prev => (prev[0] === 'X' ? ['O', ...prev] : ['X', ...prev]));
  }

  useEffect(() => {
    let win = null;
    for(let comb of WINNING_COMBINATIONS){
      const first = board[comb[0]];
      const second = board[comb[1]];
      const third = board[comb[2]];
      if(first === second && second === third){
        win = first;
        break;
      }
    }
    if (win !== winner) {
      setWinner(playerName[win]);
    }
    if(logs.length === 10 && !win){
      setWinner('draw');
    }
  }, [board, winner, logs, playerName]);

  function handleRestart(){
    setboard(initialBoard);
    setWinner(null);
    setLogs(['X']);
  }

  return (
    <main className='game-container'>
      <Player initialName="Player 1" symbol='X' isActive={activePlayerSymbol === 'X'} setPlayerName={setPlayerName}/>
      <Player initialName="Player 2" symbol='O' isActive={activePlayerSymbol === 'O'} setPlayerName={setPlayerName}/>
      {winner && <GameOver winner={winner} handleRestart={handleRestart}/>}
      <Board handleChoice={handleChoice} board={board}/>
      <Log logs = {logs} playerName={playerName}/>
    </main>
  );
}

export default App;