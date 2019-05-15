import React from 'react';
const InfoFormTaller = () => {
 return (
    <div>
        <div className="container-flex">
        <div className="row">
        <div className="col-12">
        <p>Información del  vehiculo</p>
        </div>
        <div className="col-3">
         <p>Placa :</p>
         <p>Marca :</p>
         <p>Modelo :</p>
         <p>Año :</p>
        </div>
        <div className="col-3">
         <p>N° Motor :</p>
         <p>KM:</p>
        </div>
        <div className="col-3">
          <p>Imagen :</p>
        </div>
        </div>
        <div className="row">
         <div className="col-12"><p>Información del Taller</p></div>
         <div className="col-3">
         <p>Nombre del taller :</p>
         <p>teléfono :</p>

         </div>
        </div>
       </div>
    </div>
 )
}
export default InfoFormTaller;