import React from 'react';
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
      {error && (
      <strong>
Error:
        {' '}
        {error}
      </strong>
      )}
      {loading && <span>Collection: Loading...</span>}
      {value && (
      <span>
        {value.docs.map(doc => (
          <div className="box-left">
            <h4>Datos de Vehículo:</h4>
            <br />
            <div className="info">
              <span className="font-weight-bold">
                Marca:
              </span>
              <span>{(doc.data().marca)}</span>
              <div className="info">
                <span className="font-weight-bold">Modelo: </span>
                <span>{(doc.data().modelo)}</span>
              </div>
              <div className="info">
                <span className="font-weight-bold">
                N° de motor:
                  {(doc.data().motor)}
                  {' '}
                </span>
              </div>
            </div>
            <div className="box-r">
              <div className="info">
                <span className="font-weight-bold"> Año: </span>
                <span>{(doc.data().anio)}</span>
              </div>

              <p>Descargar imágenes</p>
              <button className="btn btn-red" type="button">
                {' '}
                <img className="download" src="https://i.ibb.co/kJ3CGnF/download.png" />
              </button>
              <InfoTaller
                planchado={doc.data().planchado}
                pintura={doc.data().pintura}
                cantidadPlanchado={doc.data().cantidadPlanchado}
                cantidadPintura={doc.data().cantidadPintura}
              />
              <InfoRepuestos
                repuesto={doc.data().repuesto}
                cantidadRepuesto={doc.data().cantidadRepuesto}
              />
            </div>
          </div>
        ))}
      </span>
      )}
    </div>
  );
};
export default InfoVehiculo;
