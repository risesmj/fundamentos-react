import React from "react";
import './Card.css';

export default props => {

    const estilo = {
        backgroundColor: props.color || '#FF0000',
        borderColor: props.color || '#FF0000'
    }

    return (
        <div className="Card" style={estilo}>
            <div className="Title">{props.titulo}</div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    )
}