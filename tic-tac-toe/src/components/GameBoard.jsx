/// why did we commented the state ? as we are going to lift up the state to the app component because the information is needed by two components
/// Log component and GameBoard component but with a little more info in the Log comp.

// //onSelectSquare prop is passed to use the handleSelectSquare function that we built in the app component

// export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
//   //now the button reacts when clicked
//   const [gameBoard, setGameBoard] = useState(initialGameBoard);
//   function handleSelectSquare(rowIndex, colIndex) {
//     //when the update is based on a prev state we pass a function to the update function
//     setGameBoard((prevGameBoard) => {
//       // cloning copying the game board arrays to a new array
//       //here we did a deep cloning as we copied every layer of the array as we have nested array
//       const updatedBoard = [
//         ...prevGameBoard.map((innerArray) => [...innerArray]),
//       ];
//       updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
//       return updatedBoard;
//     });
//     onSelectSquare();
//  }

export default function GameBoard({ onSelectSquare, board }) {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        // the map function will be called to each item inside the big array which are also arrays #2-D array
        <li key={rowIndex}>
          <ol>
            {row.map(
              (
                playerSymbol,
                colIndex // here in the second map function will be called to each item inside the small arrays "rows" to make a button
              ) => (
                <li key={colIndex}>
                  {/* if you want to pass arguments to a functions we so it this way */}
                  <button
                    onClick={() => onSelectSquare(rowIndex, colIndex)}
                    disabled={playerSymbol !== null}
                  >
                    {playerSymbol}
                  </button>
                </li>
              )
            )}
          </ol>
        </li>
      ))}
    </ol>
  );
}
