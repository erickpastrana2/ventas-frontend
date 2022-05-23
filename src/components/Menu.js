import React from "react";

const Menu = (props) => {
    return (
        <nav>
            <p>{props.titulo}</p>
            <p>{props.subtitulo}</p>
        </nav>
    );
}

export default Menu;