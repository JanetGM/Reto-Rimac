import React, { useEffect, useState } from 'react';
import db from '../../lib/firestore';


const Precio = ({ code, inputValue }) => {
  const [data, setData] = useState({});
  useEffect(() => {
    db.collection('precios_rimac_kia').where('codigo', '==', code)
      .get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setData(doc.data());
          inputValue(doc.data().precioRimac);
        });
      });
  }, [code]);

  // console.log(data);
  return (
    <span className="padding">
      {data.precioRimac}
    </span>
  );
};

export default Precio;
