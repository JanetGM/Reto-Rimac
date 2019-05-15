import React from 'react';

const infoVehiculo = ({ marca, modelo, placa, año }) => (
  <div className=" card datos-vehiculo">
    <div className="box-left">
      <h4>DATOS DE VEHÍCULO:</h4>
      <br />
      <div className="info">
        <span className="font-weight-bold">Marca: </span>
        <span>
          <span>
            {marca}
          </span>

        </span>
      </div>
      <div className="info">
        <span className="font-weight-bold">Modelo: </span>
        <span>{modelo}</span>
      </div>
      <div className="info">
        <span className="font-weight-bold">N° de Placa: </span>
        <span>{placa}</span>
      </div>
    </div>
    <div className="box-r">
      <div className="info">
        <span className="font-weight-bold"> Año: </span>
        <span>{año}</span>
      </div>
      <p>Descargar imágenes</p>
      <button className="btn btn-red" type="button">
        {' '}
        <img className="download" src="https://i.ibb.co/kJ3CGnF/download.png" />
      </button>
    </div>
  </div>
);

export default infoVehiculo;
