import React from "react";


function Card({ refProp, textTransform, color }) {
    return (
      <p ref={refProp} style={{ textTransform: textTransform, color: color }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur et eum eius dolore maxime pariatur cumque officia
      </p>
    );
  }

  export default Card