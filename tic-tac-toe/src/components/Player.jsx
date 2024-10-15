import { useState } from "react";
//isActive is prop used to knw from the app component which player is active in order to know which symbol to use
export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleEditClick() {
    //when isEditing is ture setIsEditing is false and vice versa

    //////setIsEditing(!isEditing);

    /*
    > this is not the best way to update a state based on pervious state
    why?
    as state updates are not performed instantly but at some point in the future 
    (when react has time for it )
    */
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  //   let btnCaption = 'Edit';
  if (isEditing) {
    /// Value >> to save the name of the player as a value
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );

    // btnCaption = 'Save';
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
