import './index.css'
import './App.css'
import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametros from './components/basicos/ComParametros'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'

//JSX
//Para reconhecer variáveis JSX deve-se envolver chaves

//Imports css apenas referencia aquivo
//Imports de lib deve dar um apelido para a biblioteca de código

export default props =>
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">

            <Card
                titulo="Componente com Filho"
                color="orange"
            >
                <Familia sobrenome="Ferreira" >
                    <FamiliaMembro nome="Pedro"></FamiliaMembro>
                    <FamiliaMembro nome="Ana"></FamiliaMembro>
                    <FamiliaMembro nome="Gustavo"></FamiliaMembro>
                </Familia>
            </Card>

            <Card
                titulo="Desafio Aleatório"
                color="pink">
                <Aleatorio
                    min={1.0}
                    max={234.56}
                />
            </Card>

            <Card
                titulo="Aula de Fragmento"
                color="purple"
            >
                <Fragmento />
            </Card>

            <Card
                titulo="Aula de Propriedades (props)"
                color="green">
                <ComParametros
                    titulo="Situação Aluno"
                    aluno="Maria"
                    nota={3} />

            </Card>

            <Card
                titulo="Aula 1"
                color="brown">
                <Primeiro />
            </Card>

        </div>

    </div>