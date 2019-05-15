import React from 'react';
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
          <div className="block">
            <img className="block" src="https://i.ibb.co/MBHWsfq/tecnico.png" alt="Smiley face" />
            <h2>Técnico especialista</h2>
          </div>
          <img className="block" src="https://i.ibb.co/VqsFFnr/casos.png" alt="Smiley face" />
          <h3 className="block">Mis Casos</h3>
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

export default InfoTec;
