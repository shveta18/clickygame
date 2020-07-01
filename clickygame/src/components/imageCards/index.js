import React from 'react';
import "./style.css";


function ImageCards(props) {
  return (
    <div>
        <div className="img-container">
          <img className="click-image" alt={props.name} src={props.image} 
          onClick={() => props.shuffleImage(props.id)}
          />
        </div>
      </div>
    
  );
}

export default ImageCards;



