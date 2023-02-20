import React, { useState } from 'react';
import './App.css';
import * as books from './books';

function App() {
  const [isHighlighted, setIsHighlighted] = useState(0);
  const lines = books.ethics.match(/.{1,150}/g);
  console.log(lines)

  const highlighted = {
    backgroundColor: '#DFDFDF',
    color: '#292929',
  }

  return (
    <div>
      <div className="App" onClick={() => setIsHighlighted(isHighlighted + 1)}>
        <div style={{ width: '70%', padding: '20px 0 0 20px', textAlign: 'left', whiteSpace: 'pre-wrap', fontSize: '24px' }}>
          {lines?.map((line: string, index: number) => <div style={index === isHighlighted ? highlighted : { backgroundColor: 'transparent'}}>{line}<br /></div>)}
        </div>
      </div>
    </div>
  );
}

export default App;
