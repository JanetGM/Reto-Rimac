import React, {Component} from 'react';


class InfoVehiculo extends Component {
    render() {
        return (
          <div className="datos-vehiculo">
            <div className="box-left">
              <h3 className="subtitle">Datos del vehículo:</h3>
              <br></br>
              <div className="info"><span className="font-weight-bold">Marca: </span>
                <span><span >
                  aqui</span></span>
              </div>
              <div className="info">
                <span className="font-weight-bold">Modelo: </span><span>aqui</span>
              </div>
              <div className="info"><span className="font-weight-bold">N° de motor: </span>
                <span>aqui</span>
              </div>
            </div>
            <div className="box-r">
              <div className="info"><span className="font-weight-bold"> Año: </span>
                <span>aqui</span>
              </div>
              <div className="info">
                <span className="font-weight-bold">VIN: </span>
                <span>aqui</span>
              </div>
              <div className="info"><span className="font-weight-bold">Sede: </span><span>aqui</span>
              </div>
              <p>Descargar imágenes</p>
              <button className="btn btn-red" type="button"> <img className="download" src="https://i.ibb.co/kJ3CGnF/download.png"></img></button>
            </div>
            
          </div>
        )
    }
}
export default InfoVehiculo