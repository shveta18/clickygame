import React, { Component } from "react";
// import react, components and the json file 
import ImageCards from "./components/ImageCards";
import Title from "./components/Title";
import images from "./images.json";
import Wrapper from "./components/Wrapper";


// class App extends Component {
//   // Setting this.state.friends to the friends json array
//   state = {
//     images
//   };

  // shuffleImage = id => {
  //   // when any image is clicked, the images are shuffled at random
  // }


  const App = () => (
    <Wrapper>
        <Title>Tudor Court</Title>
        {images.map(images => (
          <ImageCards

            id = {images.id}
            key={images.id}
            name = {images.name}
            image={images.image}
           
          />
        ))}
      </Wrapper>

  )
   // Map over this.state.friends and render a FriendCard component for each friend object
  

  // render the component to display the new images per the shuffle

export default App;
