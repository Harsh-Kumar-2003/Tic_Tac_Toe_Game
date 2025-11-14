export default function GameOver({winner, handleRestart}){
    const isDraw = winner === 'draw';
    return (
        <div className='gameover-box'>
            <h1>Game Over !</h1>
            {isDraw ? <h2>It's a Draw!</h2> : <h2>{winner} Wins!</h2>}
            <button onClick={handleRestart}>Restart Game</button>
        </div>
    )
}