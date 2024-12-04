import React, { useRef, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Card from './components/card/card';
import ButtonChangeStyle from './components/button-change-style/button-change-style';
import ButtonLabel from './components/button-display-label/button-display-label';

function App() {
  const [initColor, ChangeColor] = useState('orange');
  const [initText, setText] = useState('lowercase');
  const text = useRef();

  const setStyle = () => {
    if (text.current.style.color === 'orange') {
      ChangeColor('red');
      setText('uppercase')
    } else {
      ChangeColor('orange');
      setText('lowercase')
    }
  }
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Quest base React</h1>
      <div className="card">

        <Card refProp={text} textTransform={initText} color={initColor} />

        <ButtonChangeStyle onClick={setStyle} />

        <br /><br />

        <ButtonLabel label='baixar CV' />
      </div>
    </>
  )
}

export default App
