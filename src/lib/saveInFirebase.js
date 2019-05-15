import infoFormTaller from '../components/FormProv/InfoFormTaller';

const addFormTaller = (name,fecha,pedido) => 
firebaseApp.firestore().collection('compra').add({
    name: clientName,
    fecha: firebase.firestore.FieldValue.serverTimestamp(),
    pedido: pedido
  }).catch(error => error);
  
  export default addFormTaller;
