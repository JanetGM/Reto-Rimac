import React,{useState,useEffect} from 'react';
import InfoFormTaller from './InfoFormTaller';
import Pedido from './Pedido';
import db from '../../lib/firestore';


const Index = () =>{
    const [info,setInfo] = useState([]);
    const updateState = (state) =>{
     setInfo({...info,...state})
    }
    const saveInFirebase = () => {
    db.collection('compras').add(
        info
      );
    } 
 return (
    <form>
     <InfoFormTaller info={info} updateState={updateState}  />
     <Pedido info={info} updateState={updateState} />
     <button type="button" onClick={saveInFirebase}>Enviar</button>
    </form>
   
 )
}
export default Index;