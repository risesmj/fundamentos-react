import React from "react";

export default props => {

    //Operador spread ...props = passa todos os atributos diretamente

    return (
        <div>
            {React.Children.map(props.children, (e, k) => {
                return React.cloneElement(e, { ...props, key: k })
            })}

        </div >
    )
}