import React from "react"

export default props =>
    <React.Fragment>
        <h2>Número aleatório</h2>
        <p>{parseInt(Math.random() * (props.max - props.min)) + props.min}</p>
    </React.Fragment>

