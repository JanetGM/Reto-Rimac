import React, { useState } from 'react';
import Form from './Form';
import db from '../../lib/firestore';

const FormTaller = () => {
  const [dataTaller, setDataTaller] = useState({});

    const sendToDB = () => {
        db.collection('compras').add(dataTaller);
    };

  return (
    <>
      <Form
        values ={data => setDataTaller(data)}
        sendToDB={sendToDB}
      />
    </>
  );
};

export default FormTaller;
