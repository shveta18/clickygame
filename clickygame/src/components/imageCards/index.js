import React from 'react';
import "./style.css";


function ImageCards(props) {
  return (
    <div>
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
      </div>
    
  );
}

export default ImageCards;



