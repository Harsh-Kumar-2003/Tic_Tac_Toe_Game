import {useState} from 'react';

export default function Player({initialName, symbol, isActive, setPlayerName}){
    const [name, setName] = useState(initialName);
    const [isEditing, setEditing] = useState(false);

    function handleClick(){
        setEditing(isEditing => !isEditing)
    }

    function handleNameChange(event){
        if(event.target.value.length > 10){
            alert("Name cannot be longer than 10 characters");
            return;
        }
        setName(event.target.value);
        setPlayerName(prev => ({...prev, [symbol]: event.target.value}));
    }

    return(
        <div className={isActive?"player player-active":"player"}>
            <span className="player-name">
                {isEditing?<input value={name} onChange={handleNameChange}/>:<span>{name}</span>}
            </span>
            <span>{symbol}</span>
            <button onClick={handleClick}>{isEditing?"Save":"Edit"}</button>
        </div>
    )
}