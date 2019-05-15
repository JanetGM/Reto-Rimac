<<<<<<< HEAD
import React from 'react';

const infoVehiculo = ({ marca, modelo, placa, año }) => (
  <div className=" card datos-vehiculo">
    <div className="box-left">
      <h4>DATOS DE VEHÍCULO:</h4>
      <br />
      <div className="info">
        <span className="font-weight-bold">Marca: </span>
        <span>
          <span>
            {marca}
          </span>

        </span>
      </div>
      <div className="info">
        <span className="font-weight-bold">Modelo: </span>
        <span>{modelo}</span>
      </div>
      <div className="info">
        <span className="font-weight-bold">N° de Placa: </span>
        <span>{placa}</span>
      </div>
    </div>
    <div className="box-r">
      <div className="info">
        <span className="font-weight-bold"> Año: </span>
        <span>{año}</span>
      </div>
      <p>Descargar imágenes</p>
      <button className="btn btn-red" type="button">
        {' '}
        <img className="download" src="https://i.ibb.co/kJ3CGnF/download.png" />
      </button>
    </div>
  </div>
);

export default infoVehiculo;
=======
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
            <div className=" card datos-vehiculo">
             {error && <strong>Error: {error}</strong>}
            {loading && <span>Collection: Loading...</span>}
           {value && (
              <span>{value.docs.map(doc => (
                <div className="box-left">
                <h4>DATOS DE VEHÍCULO:</h4>
                <br></br>
                <div className="info">
                <span className ="font-weight-bold">
                Marca:</span>
                <span>{(doc.data().marca)}</span>
                <div className="info">
                <span className="font-weight-bold">Modelo: </span><span>{(doc.data().modelo)}</span>
                </div>
                <div className="info"><span className="font-weight-bold">N° de motor:{(doc.data().motor)} </span>
                <span>aqui</span>
                </div>
                <span><span >
                aqui</span></span>
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
                <InfoTaller />
                <InfoRepuestos />
              </span>
                
            
        )}
        </div> 
    );
}
export default InfoVehiculo;
>>>>>>> 6e60b2f338dfa711d956ad5101f2e7b2f13db4f5
