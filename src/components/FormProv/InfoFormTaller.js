import React,{useEffect} from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import db from '../../lib/firestore';
import './InfoFormTaller.css';
const InfoFormTaller = ({info,updateState}) => {
  const { error, loading, value } = useCollection(
    db.collection('modelo_auto'),
  );
  
  value && !info.infoAuto && updateState({infoAuto:value.docs[0].data()})
  return (
    <div className="container margin-option">
        <div className="card p-10">
    <div className="card-body">
      <div className="item-1">
        <img className="prove-ico" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlAF6xDnNfApwZO9E5TuFY-04Bte7QzBfpgJXjftF8J1nVAXzJQQ" alt="Smiley face" />
        <h2 className="tec-texto">Proveedor de Repuestos</h2>
      </div>
      <img className="mycase-icon" src="https://i.ibb.co/VqsFFnr/casos.png" alt="Smiley face" />
      <h3 className="my-case">Mis Casos</h3>
    </div>
  </div>
    <div className="info-auto">
      {error && <strong>Error: {error}</strong>}
      {loading && <span>Collection: Loading...</span>}
      {value && (
        <span>
          <div><p className="subtitle">Datos del Vehículo</p></div>
          {value.docs.map(doc => (
          <div className="abs-p">
        <div>
           <div className="veh-data" data-testid="item" key={doc.id}>
            <div className="col-5">
            <p><strong>Placa: </strong> {doc.data().placa}</p>
              <p><strong>Marca:</strong> {doc.data().marca}</p>
              <p><strong>Modelo: </strong> {doc.data().modelo}</p>
              <p><strong>Año: </strong> {doc.data().año}</p>
            </div>
            <div className="row-2 col-7">
            <p><strong>N° Motor: </strong> {doc.data().nmotor}</p>
            <p><strong>KM: </strong> {doc.data().km}</p>
            <p><strong>Imagen:</strong></p><img src={doc.data().imagen} className="img mb-5"/>
            </div>
            </div>
            <div className=" row">
            <div><p className="subtitle col-12">Información del Taller</p></div>
              <div className="row-3 col-12">
              <span>
              <p><strong>Nombre del taller:</strong> {doc.data().taller}</p>
              <p><strong>Teléfono: </strong> {doc.data().telf}</p>
              </span>
              </div>
            </div>
            </div>
          </div>  
          ))}
          
        </span>
      
      )}
      </div>
    </div>
  );
};

export default InfoFormTaller;
