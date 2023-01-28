import React, { useState } from 'react';
import './App.css';
import * as books from './books';

function App() {
  const [isHighlighted, setIsHighlighted] = useState(0);
  const lines = books.politics.match(/.{1,150}/g);
  console.log(lines)

  const highlighted = {
    backgroundColor: '#FFDF00',
    color: 'black',
  }

  return (
    <div>
      <div className="App" onClick={() => setIsHighlighted(isHighlighted + 1)}>
        <div style={{ width: '55%', padding: '20px 0 0 20px', textAlign: 'left', whiteSpace: 'pre-wrap', fontSize: '24px' }}>
          {lines?.map((line: string, index: number) => <div style={index === isHighlighted ? highlighted : { backgroundColor: 'transparent'}}>{line}<br /></div>)}
        </div>
      </div>
    </div>
  );
}

export default App;
