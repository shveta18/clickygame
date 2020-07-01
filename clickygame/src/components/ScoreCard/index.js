import React from "react";

function Score(props) {
    return (
        <div>
            <h2 className="score">{props.children}</h2>
            <h2 className="tally">{props.children}</h2>
        </div>
    );
}

export default Score;