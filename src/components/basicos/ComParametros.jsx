import React from "react"

export default function ComParametros(props){
    console.log(props)

    const status = props.nota > 7 ? "Aprovado" : "Reprovado"

    return (
        <div>
            <h2>{props.titulo}: {status}</h2>
            <p>
                <strong>{props.aluno} </strong> 
                tem a nota 
                <strong> {props.nota}</strong>
            </p>
        </div>
    )
}