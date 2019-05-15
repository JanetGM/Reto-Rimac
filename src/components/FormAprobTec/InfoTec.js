import React from 'react';
<<<<<<< HEAD

const InfoTec = () => (
  <div>
    <div className="card p-10">
      <div className="card-body">
        <div className="item-1">
          <img className="tecnico-ico" src="https://i.ibb.co/MBHWsfq/tecnico.png" alt="Smiley face" />
          <h2>Técnico especialista</h2>
        </div>
        <img className="casos-icon" src="https://i.ibb.co/VqsFFnr/casos.png" alt="Smiley face" />
        <h3>Mis Casos</h3>
      </div>
    </div>
    <div className="card m-3">
      <div className="box-left">
        <div className="info">
          <span className="font-weight-bold">Nombre: </span>
          <br />
          <span>
            <span>
        jhonatan gonzales

            </span>

          </span>
        </div>
        <div className="info">
          <span className="font-weight-bold">
Placa:
            {' '}
            <br />
          </span>
          <span>AGK123</span>
        </div>
        <div className="info">
          <span className="font-weight-bold">Fecha de registro: </span>
          {' '}
          <br />
          <span>20/02/2019 05:05 PM</span>
        </div>
      </div>
      <div className="box-right">
        <div className="info">
          <span className="font-weight-bold">Presupuesto elaborado: </span>
          <br />
          <span>20/02/2019 05:07 PM</span>
        </div>
        <div className="info">
          <span className="font-weight-bold">Taller: </span>
          <br />
          <span>SIN TALLER</span>
        </div>
        <div className="info">
          <span className="font-weight-bold">
Sede:
            {' '}
            <br />
          </span>
          <span>SIN SEDE</span>
        </div>
      </div>
      <div className="estado">
        <img className="ajustes-icon" src="https://i.ibb.co/gPbPWqD/ajustar-presupuesto.png" alt="Smiley face" />
        <div className="ajustes-text">
          <span>Presupuesto por Ajustar</span>
        </div>
      </div>
    </div>
  </div>
);
=======
import { useCollection } from 'react-firebase-hooks/firestore';
import db from '../../lib/firestore';

const InfoTec = () => {
  const { error, loading, value } = useCollection(
    db.collection('compras'),
  );
  return (
    <div>
      <div className="card p-10">
        <div className="card-body">
          <div className="item-1">
            <img className="tecnico-ico" src="https://i.ibb.co/MBHWsfq/tecnico.png" alt="Smiley face" />
            <h2>Técnico especialista</h2>
          </div>
          <img className="casos-icon" src="https://i.ibb.co/VqsFFnr/casos.png" alt="Smiley face" />
          <h3>Mis Casos</h3>
        </div>
      </div>
      <div className="card m-3">
        <div className="box-left">
          {error && <strong>Error: {error}</strong>}
          {loading && <span>Collection: Loading...</span>}
          {value && (
          <span>
            {value.docs.map(doc => (
              <div className="row" key={doc.id}>
                <div className="col-4">
                  <div className="row">
                    <span>
                      Nombre:
                      {doc.data().firstname}
                      {doc.data().lastname}
                    </span>
                  </div>
                  <div className="row">
                    <span>
                      Placa:
                      {doc.data().placa}
                    </span>
                  </div>
                </div>
                <div className="col-4">
                  <div className="row">
                    <span>
                    Fecha:
                      {doc.data().fecha}
                    </span>
                  </div>
                  <div className="row">
                    <span>
                      Taller:
                      {doc.data().nametaller}
                    </span>
                  </div>
                </div>
                <div className="col-4">
                  <img className="ajustes-icon" src="https://i.ibb.co/gPbPWqD/ajustar-presupuesto.png" alt="Smiley face" />
                  <div className="ajustes-text">
                    <span>Presupuesto por Ajustar</span>
                  </div>
                </div>
              </div>
            ))}
          </span>
          )}
        </div>
      </div>
    </div>
  );
};
>>>>>>> 6e60b2f338dfa711d956ad5101f2e7b2f13db4f5

export default InfoTec;
