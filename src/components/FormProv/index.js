import {React,useState} from 'react';
import InfoFormTaller from './InfoFormTaller';
import Pedido from './Pedido';


const Index = () =>{
    const [proveedor,setProveedor]=useState([]);
 return (
 <div>
    <InfoFormTaller proveedor={proveedor} setProveedor={setProveedor}/>
 </div>)
}
export default Index;