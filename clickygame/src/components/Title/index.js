import React from "react";
import "./style.css";

function Title(props) {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <h1 className="title">{props.children}</h1>;
</nav>
        </div>

    )
}

export default Title;
