import React from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import firebase from 'firebase';

export default function Pedido() {
    const { error, loading, value } = useCollection(
      firebase.firestore().collection('compras').orderBy('date', 'asc'),
    );
    const deliverOrden = (item, id) => {
      const db = firebase.firestore();
      db.collection('orderDelivered').add(item);
    };
    return (
      <div className="container center margin-option">
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
              // console.log(doc.data().orden[0].count)
              <div className="row margin-option font-menor section" data-testid="item" key={doc.id}>
                <div className="col-2">{doc.data().nombre}</div>
                <div className="col-3 center">{doc.data().orden.map(item => (<div>{item.name}</div>))}</div>
                <div className="col-3 center">{doc.data().orden.map(item => (<div>{item.count}</div>))}</div>
                <div className="col-3 center">
                  <button type="button" className="button muted-button button-delete margin-button-count-substr" onClick={() => deliverOrden(doc.data(), doc.id)}><i className="fas fa-share"></i></button>
                </div>
              </div>
              // <React.Fragment key={doc.id}>
              //   {JSON.stringify(doc.data())},{' '}
              // </React.Fragment>
            ))}
          </span>
        )}
      </div>
    );
  }
  