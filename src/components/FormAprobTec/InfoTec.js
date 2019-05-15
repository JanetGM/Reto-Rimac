import React from 'react';

const InfoTec = () => (
  <div>
    <div className="card p-10">
      <div className="card-body">
        <div className="block">
          <img className='block' src="https://i.ibb.co/MBHWsfq/tecnico.png" alt="Smiley face"></img>
          <h2  className='block'>Técnico especialista</h2>
        </div>
        <div className="block">
          <img className='block' src="https://i.ibb.co/VqsFFnr/casos.png" alt="Smiley face" />
          <h2 className="block">Mis Casos</h2>
        </div>
      </div>
    </div>
    <div className="card">
      <div className="box-left">
        <div className="info"><span className="font-weight-bold">Nombre: </span><br></br>
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
        <img className="ajustes-icon1" src="https://i.ibb.co/gPbPWqD/ajustar-presupuesto.png" alt="Smiley face" />
        <div className="ajustes-text1"><span>Presupuesto por Ajustar</span>
        </div>
      </div>
    </div>
  </div>
)

export default InfoTec;