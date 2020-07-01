import React from "react";


class Score extends React.Component {
    state = {
        currentScore: 0,
        gameScore: 0
    };


// create a function to register click on image
userClicks = () => {
    this.setState({ currentScore: this.state.currentScore + 1 } );
}
// amend function to store which ID was clicked
// amend function to verify if ID not clicked, increment score by 1 and gamescore by 1
// if ID was already clicked, change currentscore to 0, retain gameScore to highest value
// if homepage was clicked set the score back to 0
render() {
    return (
        <div>

            <h2 className="score">Score: {this.state.currentScore}</h2>
            <h2 className="gameScore">GameScore: {this.state.gameScore}</h2>
        </div>
    );
}
}

export default Score;