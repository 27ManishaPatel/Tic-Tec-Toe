
import React, {useState} from 'react';

function Square() {
  const [value, setValue] = useState(null);

  const handleClick = () => {
    setValue('X')
  }
  return (
    <button onClick={handleClick} className="square">{value}</button>
  )
}

export default function Board() {
  return (
    <div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square  />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square  />
        <Square  />
      </div>
    </div>
  );
}