import React from 'react'

const Buscador = ({buscador,setbuscador}) => {
  return (
    <div className='label'>
        <div>
          <label><h2><strong>Buscar Sismo</strong></h2></label>
        </div>
        <div>
          <input 
          type="text" 
          placeholder='Busca tu Sismo'
          value={buscador} 
          onChange={(e) => {setbuscador(e.target.value)
          }}>
        </input>
        </div>
      </div>
  )
}

export default Buscador