import React, { useState } from 'react';
import './App.css';
import * as books from './books';

function App() {
  const [isHighlighted, setIsHighlighted] = useState(6000);
  const lines = books.politics.match(/.{1,150}/g);
  console.log(isHighlighted)

  const highlighted = {
    backgroundColor: '#FFDF00',
    color: 'black',
  }

  const handleKeyDown = (event: any) => {
    console.log(event.key);

    if (event.key === 'z') {
      setIsHighlighted(isHighlighted - 1);
    }

    if (event.key === 'x') {
      setIsHighlighted(isHighlighted + 1);
    }
  }


  return (
    <div>
      <div tabIndex={0} className="App" onKeyDown={(e) => handleKeyDown(e)}>
        <div style={{ width: '65%', padding: '20px 0 0 20px', textAlign: 'left', whiteSpace: 'pre-wrap', fontSize: '24px' }}>
          {lines?.map((line: string, index: number) => <div key={index} style={index === isHighlighted ? highlighted : { backgroundColor: 'transparent'}}>{line}<br /></div>)}
        </div>
      </div>
    </div>
  );
}

export default App;
