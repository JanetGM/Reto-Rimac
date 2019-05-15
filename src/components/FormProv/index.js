import React,{useState,useEffect} from 'react';
import InfoFormTaller from './InfoFormTaller';
import Pedido from './Pedido';
import db from '../../lib/firestore';


const Index = () =>{
    const [info,setInfo] = useState([]);
    const [precio, setPrecio] = useState(0);
    console.log(info);
    const updateState = (state) =>{
     setInfo({...info,...state})
    }

    const saveInFirebase = () => {
    db.collection('proveedor').add(
        {...info, precio});
    } 
 return (
    <form>
     <InfoFormTaller info={info} updateState={updateState}  />
     <Pedido info={info} updateState={updateState} inputValue={data => setPrecio(data)} />
     <button  className="btn btn-primary" type="button" onClick={saveInFirebase}>Enviar</button>
    </form>
   
 )
}
export default Index;