import React from 'react'
import Button from '../components/Button'
import Display from '../components/Display'
import './Calculator.css'

function Calculator() {
    return (
        <div className='main'>

            <h1>Projeto Calculadora</h1>

            <div>
                <Display />
            </div>

            <div className='calculator'>
                <Button tecla='7' />
                <Button tecla='8' />
                <Button tecla='9' />
                <Button tecla='*' operation={true} />
                <Button tecla='4' />
                <Button tecla='5' />
                <Button tecla='6' />
                <Button tecla='/' operation={true} />
                <Button tecla='1' />
                <Button tecla='2' />
                <Button tecla='3' />
                <Button tecla='-' operation={true} />
                <Button tecla='.' />
                <Button tecla='0' />
                <Button tecla='Clear' />
                <Button tecla='+' operation={true} />
                <Button tecla='=' double={true} />
                <Button tecla='CA' double={true} />
            </div>

        </div>
    )

}

export default Calculator