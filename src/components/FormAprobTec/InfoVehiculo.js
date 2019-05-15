import React, {Component} from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import InfoRepuestos from './InfoRepuestos';
import InfoTaller from './InfoTaller';
import db from '../../lib/firestore';

const InfoVehiculo = () => {
  const { error, loading, value } = useCollection(
    db.collection('compras'),
  );

  return (
    <div className=" datos-vehiculo">
      {error && <strong>Error: {error}</strong>}
      {loading && <span>Collection: Loading...</span>}
      {value && (
        <span>{value.docs.map(doc => (
          <div className="box-left">
            <h3 className="subtitle">Datos de vehiculo:</h3>
            <br></br>
            <div className="info">
              <span className="font-weight-bold">
                Marca:</span>
              <span>{(doc.data().marca)}</span>
              <div className="info">
                <span className="font-weight-bold">Modelo: </span><span>{(doc.data().modelo)}</span>
              </div>
              <div className="info"><span className="font-weight-bold">N° de motor:{(doc.data().motor)} </span>
                <span>QEG56333</span>
              </div>
              
            </div>
            <div className="box-r">
              <div className="info"><span className="font-weight-bold"> Año: </span>
                <span>{(doc.data().anio)}</span>
              </div>
              <div className="info">
                <span className="font-weight-bold">VIN: </span>
                <span>no se sabe</span>
              </div>

              <p>Descargar imágenes</p>
              <button className="btn btn-red" type="button"> <img className="download" src="https://i.ibb.co/kJ3CGnF/download.png"></img></button>
            </div>
          </div>
        ))}
         
        </span>


      )}
    </div>
  );
}
export default InfoVehiculo;