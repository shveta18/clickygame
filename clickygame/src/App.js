import React, { Component } from "react";
// import react, components and the json file 
import ImageCards from "./components/ImageCards";
import Title from "./components/Title";
import images from "./images.json";
import Wrapper from "./components/Wrapper";
import Score from "./components/ScoreCard";



// shuffleImage = id => {
//   // when any image is clicked, the images are shuffled at random
//   // create a randomized ID
// let randomizedID = Math.floor(Math.random() * 14) + 1 ; 
// // assign this randomized id as the key for the array 
// // }

// create scorecard values 


const App = () => (
  <Wrapper>
    <Title>Tudor Court</Title>
    <Score>Your score is {}</Score>
    {images.map(images => (
      <ImageCards
        randomizedID={images.id}
        key={images.id}
        name={images.name}
        image={images.image}

      />
    ))}
  </Wrapper>

)
// Map over this.state.friends and render a FriendCard component for each friend object


// render the component to display the new images per the shuffle

export default App;
