import './Button.css'



function Button(props) {
    return (
        <button className={`
        button
        ${props.operation ? 'operation' : ''}
        ${props.double ? 'double' : ''}
        ${props.triple ? 'triple' : ''}
        `}>
            {props.tecla}
        </button>
    )
}

export default Button