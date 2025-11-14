export default function Board({handleChoice, board}){
    return(
        <div className="grid-container">
            <div className="game">
                {board.map((symbol, index) =>  <button className="box" value={index} onClick={handleChoice} disabled={symbol !== null}>{symbol}</button>)}
            </div>
        </div>
    )
}