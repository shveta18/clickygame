import React, { Component } from "react";
// import react, components and the json file 
import ImageCards from "./components/ImageCards";
import Title from "./components/Title";
import images from "./images.json";
import Wrapper from "./components/Wrapper";
import Score from "./components/ScoreCard";

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    images
  };

  
  shuffleImage = id => {
    shuffle(images);
    // when any image is clicked, the images are shuffled at random
    // create a randomized ID
 // let randomizedID = Math.floor(Math.random() * 14) + 1 ; 

  // assign this randomized id as the key for the array 

  // newly updated array of images
  console.log(images);
  this.setState({images});
  }

  // create scorecard values 

  render() {
    return (
      <Wrapper>
        <Title>Tudor Court</Title>
        <Score/>
        {this.state.images.map(images => (
          <ImageCards
            shuffleImage={this.shuffleImage}
            key={images.id}
            name={images.name}
            image={images.image}
          />
        ))}
      </Wrapper>
    );
  }
}

  // Map over this.state.friends and render a FriendCard component for each friend object


  // render the component to display the new images per the shuffle

  export default App;
