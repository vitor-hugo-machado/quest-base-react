import React from 'react';

function ButtonChangeStyle({ onClick }) {
  console.log(onClick)
  return (
    <button onClick={onClick}>
      Trocar estilo
    </button>
    
  );
}

export default ButtonChangeStyle;