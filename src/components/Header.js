import React from "react";

const Header = () => {
    const titulo = "Header2";
    const a = 5;
    const b = 6;

    return (
        <div>
            <h2>{titulo}</h2>
            <p>{a + b}</p>
        </div>
    )
}

export default Header;