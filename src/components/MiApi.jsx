import React, { useEffect, useState } from 'react'
import axios from "axios"
import Buscador from './Buscador';



const urlApi ="https://api.gael.cloud/general/public/sismos"


const MiApi = () => {
  const [sismos, setSismos] = useState([]);
  const [buscador, setbuscador] = useState("");



  const traerSismos = async () => {
    const {data} = await axios(urlApi)
    const dataOrdenada = data.sort((a,b)=> (a.RefGeografica.localeCompare(b.RefGeografica)));
    setSismos(dataOrdenada);
    

  }

 useEffect(() => {
   traerSismos();
   }, []);
  

  // const filtrar = () => {
  // const sismoFiltrado = sismos.filter(sismo=>{
  //     return sismo.RefGeografica.toLowerCase().includes(buscador.toLowerCase());
  //   })
  //   console.log(sismoFiltrado);
  // }
 


  return (
    <div>
      <Buscador buscador={buscador} setbuscador={setbuscador}/>
      {/* <div>
        <table className="table table-bordered">
        <thead>
                <tr>
                    <th>RefGeografica</th>
                    <th>Magnitud</th>
                    <th>Profundidad</th>
                    <th>Fecha</th>
                </tr>
        </thead>
        
        </table>







      {sismos.filter((sismo)=> {
      return (
        sismo.RefGeografica.toLowerCase().includes(buscador.toLowerCase()) ||                 
        sismo.Magnitud.toLowerCase().includes(buscador.toLowerCase()) ||
        sismo.Profundidad.toLowerCase().includes(buscador.toLowerCase())
        );
    })
    .map((sismo) => (
        <h5 key={sismo.Fecha}>{sismo.RefGeografica} Magnitud:{sismo.Magnitud}</h5>
        
        ))}
       </div> */}
       <div className='contenedorTabla'>
       <table className="tabla">
        <thead>
                <tr>
                    <th>RefGeografica</th>
                    <th>Magnitud</th>
                    <th>Profundidad</th>
                    <th>Fecha</th>
                </tr>
        </thead>
        <tbody>
        {sismos.filter((sismo)=> {
      return (
        sismo.RefGeografica.toLowerCase().includes(buscador.toLowerCase()) ||                 
        sismo.Magnitud.toLowerCase().includes(buscador.toLowerCase()) ||
        sismo.Profundidad.toLowerCase().includes(buscador.toLowerCase())
        );
    })
    .map((sismo,Fecha) => (
        <tr key={Fecha}>
            <td>{sismo.RefGeografica}</td>
            <td>{sismo.Magnitud}</td>
            <td>{sismo.Profundidad}</td>
            <td>{sismo.Fecha}</td>


        </tr>
        // <h5 key={sismo.Fecha}>{sismo.RefGeografica} Magnitud:{sismo.Magnitud}</h5>
        
        ))}



        </tbody>
    </table>

       </div>
    </div>
    
  )
}

export default MiApi