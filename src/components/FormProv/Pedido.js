import React, { useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import db from '../../lib/firestore';
import './styles/Pedido.css';
import Precio from './Precio';

const Pedido = () => {
  const [code, setCode] = useState('');
  const { error, loading, value } = useCollection(
    db.collection('Compras'),
  );
  return (
    <div>
      <div className="row"><h1>Pedido</h1></div>
      <div className="row weigth font-mayor">
        <div className="col-2">DESCRIPCIÓN</div>
        <div className="col-2">CANTIDAD</div>
        <div className="col-2">CÓDIGO</div>
        <div className="col-2">PRECIO</div>
        <div className="col-2">DISPONIBILIDAD</div>
        <div className="col-2">DÍAS</div>
      </div>
      {error && <strong>Error: {error}</strong>}
      {loading && <span>Collection: Loading...</span>}
      {value && (
        <span>
          {value.docs.map(doc => (
            <div className="row" data-testid="item" key={doc.id}>
              <div className="col-2">{doc.data().nombre}</div>
              <div className="col-2">{doc.data().cantidad}</div>
              <div className="col-2">
                <input
                  className="width-input"
                  type="text"
                  value={code}
                  onChange={e => setCode(e.target.value)}
                  placeholder="Ingresar código"
                  name="código"
                  required
                />
              </div>
              <div className="col-2 padding">{code && <Precio code={code} />}</div>
              <div className="col-2">
                <select id="disponibilidad" className="margin">
                  <option disabled selected>STOCK</option>
                  <option value="Water">IMPORTADO</option>
                </select>
              </div>
              <div className="col-2"><input type="text" className="width-input-dias" /></div>
            </div>
          ))}
        </span>
      )}
      <div className="row"><h1>Comentarios</h1></div>
      <div className="row">
        <textarea rows="3" cols="25" id='comentarios' placeholder='Escribe algo...'></textarea>
      </div>
    </div>
  );
};

export default Pedido;
