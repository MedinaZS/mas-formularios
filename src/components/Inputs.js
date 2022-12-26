import React from 'react'

//Desestructuracion de propiedades
const Inputs = ({titulo, tipo, value ,setValue}) => {

    return (
        <div className='inputGroup'>
            <span>{titulo} </span>
            <input type={tipo} value={value} onChange={element => setValue(element.target.value)} />            
        </div>
    )
}

export default Inputs