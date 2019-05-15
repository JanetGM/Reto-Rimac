import React  from 'react';

const InfoTec=()=>(
<div>
  <div className="card p-10">
    <div className="card-body">
    <div className="item-1">
    <img className='tecnico-ico' src="https://i.ibb.co/MBHWsfq/tecnico.png" alt="Smiley face"></img>
      <h2>Técnico especialista</h2>
    </div>
      <img className='casos-icon' src="https://i.ibb.co/VqsFFnr/casos.png" alt="Smiley face" />
      <h2 className="h3">Mis Casos</h2>
    </div>
  </div>
    <div className="card m-3">
      <div className="box-left">
        <div className="info"><span className ="font-weight-bold">Nombre: </span><br></br>
        <span><span >
        jhonatan gonzales</span></span>
        </div>
        <div className="info">
          <span className="font-weight-bold">Placa: <br></br>
        </span><span>AGK123</span>
        </div>
        <div className="info"><span className="font-weight-bold">Fecha de registro: </span> <br></br>
          <span>20/02/2019 05:05 PM</span>
        </div>
        </div>
        <div className="box-right">
          <div className="info"><span className="font-weight-bold">Presupuesto elaborado: </span><br></br>
            <span>20/02/2019 05:07 PM</span>
          </div>
          <div className="info">
            <span className="font-weight-bold">Taller: </span><br></br>
            <span>SIN TALLER</span>
          </div>
          <div className="info"><span className="font-weight-bold">Sede: <br></br> 
            </span><span>SIN SEDE</span>
          </div>
        </div>
        <div className="estado">
          <img className="ajustes-icon" src="https://i.ibb.co/gPbPWqD/ajustar-presupuesto.png" alt="Smiley face"/>
          <div className="ajustes-text"><span>Presupuesto por Ajustar</span>
          </div>
        </div>
    </div>
</div>
)

export default InfoTec;