import React from "react";

function ButtonLabel({ label }) {
  const handleClick = () => {
    alert(`A label desse botão é ${label}`);
  };

  return (
    <button onClick={handleClick}>
      {label}
    </button>
  );
}

export default ButtonLabel;