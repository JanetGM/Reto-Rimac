import React from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import db from '../../lib/firestore';
import './styles/Pedido.css';

const Precio = ({code}) => {
  const { error, loading, value } = useCollection(
    db.collection('precios_rimac_kia').where('codigo','==', code),
  );
  return (
    <span className="padding">
      {error && <strong>Error: {error}</strong>}
      {loading && <span>Collection: Loading...</span>}
      {value && value.docs.map(doc => (
        <div className="col-2">{doc.data().precioRimac}</div>
      ))}
    </span>
  );
};

export default Precio;
