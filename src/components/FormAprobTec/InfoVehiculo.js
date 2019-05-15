import React from 'react';
import InfoRepuestos from './InfoRepuestos';
import InfoTaller from './InfoTaller';
import { useCollection } from 'react-firebase-hooks/firestore';
import db from '../../lib/firestore';


const InfoVehiculo = () => {
  const { error, loading, value } = useCollection(
    db.collection('modelo_auto'),
  );
  return(<div>
  {/* {error && <strong>Error: {error}</strong>}
  {loading && <span>Collection: Loading...</span>}
  {value && (
    <span>
         {value.docs.map(doc => ( 
            <div className=" card datos-vehiculo">
            <div className="box-left">
            <h4>DATOS DE VEHÍCULO:</h4>
            <br></br>
            <div className="info"><span className ="font-weight-bold">Marca: </span>
            <span><span >
            {doc.data().marca}</span></span>
            </div>
            <div className="info">
              <span className="font-weight-bold">Modelo: </span><span>aqui</span>
            </div>
            <div className="info"><span className="font-weight-bold">N° de motor: </span>
              <span>aqui</span>
            </div>
            </div>
              <div className="box-r">
                <div className="info"><span className="font-weight-bold"> Año: </span>
                    <span>aqui</span>
                </div>
                <div className="info">
                  <span className="font-weight-bold">VIN: </span>
                  <span>aqui</span>
                </div>
                <div className="info"><span className="font-weight-bold">Sede: </span><span>aqui</span>
                </div>
                <p>Descargar imágenes</p>
                <button className="btn btn-red" type="button"> <img className="download" src="https://i.ibb.co/kJ3CGnF/download.png"></img></button>
                </div>
                <InfoTaller />
                <InfoRepuestos />
            </div> */}
    
     }
</div>)}
export default InfoVehiculo;