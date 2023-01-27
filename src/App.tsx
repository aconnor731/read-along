import React, { useState } from 'react';
import './App.css';
import {books, sophist} from './books';
import Draggable from 'react-draggable';

// const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
// const formatted = books.replace('EUCLIDES :', '\nEUCLIDES:');

function splitLines(text: string) {
  const lineLength = 150;
  const lineArr = [];

  let i = 0;
  let line = '';
  while (i < text.length) {
    line.concat(text[i]);

    if (i % lineLength == 0) {
      lineArr.push(line);
      line = '';
    }
  }

  return lineArr;
}

function App() {
  const [isHighlighted, setIsHighlighted] = useState(0);
  const lines = sophist.match(/.{1,150}/g);
  console.log(lines)

  const highlighted = {
    backgroundColor: '#FFDF00',
    color: 'black',
    width: '80%'
  }

  const handleSpaceBarPress = (event: React.KeyboardEvent) => {
    // if (event.code === 'Space') {
    //   setIsHighlighted(isHighlighted + 1);
    // }
    setIsHighlighted(isHighlighted + 1);
  }

  return (
    <div className="App" onClick={() => setIsHighlighted(isHighlighted + 1)}>
      <div style={{ width: '70%', padding: '20px 0 0 20px', textAlign: 'left', whiteSpace: 'pre-wrap', fontSize: '24px' }}>
        
      {/* <div draggable style={{ backgroundColor: 'yellow', opacity: '0.5', height: '40px' }}> */}
        {/* <p>{books}</p> */}
        {lines?.map((line: string, index: number) => <div style={index === isHighlighted ? highlighted : { backgroundColor: 'transparent'}}>{line}<br /></div>)}
      </div>
    </div>
  );
}

export default App;
