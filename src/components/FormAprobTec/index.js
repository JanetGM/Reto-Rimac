import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bs-stepper/dist/css/bs-stepper.min.css';
import Stepper from 'bs-stepper';
import './index.css';
import InfoTec from './InfoTec';
import InfoVehiculo from './InfoVehiculo';
import ResumenAprob from './ResumenAprob';
import InfoRepuestos from './InfoRepuestos';
import InfoTaller from './InfoTaller';

class App extends Component {
    constructor() {
      super();
      this.state = {

      };
    }
  
    componentDidMount() {
      this.stepper = new Stepper(document.querySelector('#stepper1'), {
        linear: false,
        animation: true
      })
    }
    
    onSubmit(e) {
      e.preventDefault()
    }
    
    render() {
      return (
        <div>
        <InfoTec/>
          <div id="stepper1" className="bs-stepper">
            <div className="bs-stepper-header center">
              <div className="step" data-target="#test-l-1">
                <button className="step-trigger">
                  <span className="bs-stepper-circle">Datos del vehículo y taller</span>
                </button>
              </div>
              
              <div className="step" data-target="#test-l-2">
                <button className="step-trigger">
                  <span className="bs-stepper-circle">Datos del caso y aprobación</span>
                </button>
              </div>
              
            </div>
            <div className="bs-stepper-content">
              <form onSubmit={this.onSubmit}>
                <div id="test-l-1" className="content">
                  <div className="form-group ">
                  <InfoVehiculo />
                  <InfoTaller />
            <InfoRepuestos />
                  </div>
                  <button className="btn btn-secondary active next" onClick={() => this.stepper.next()}>SIGUIENTE</button>
                </div>
                <div id="test-l-2" className="content">
                  <div className="form-group ">
                    <ResumenAprob/>
                  </div>
                  <button type="submit" className="btn btn-primary mt-5">Ajustar</button>
                  <button type="submit" className="btn btn-primary mt-5">Observar</button>
                  <button type="submit" className="btn btn-primary mt-5">Ajustar a cargo</button>
                  <button type="submit" className="btn btn-primary mt-5">Rechazar</button>
                </div>
                
              </form>
            </div>
          </div>
        </div>
      );
    }
  }
  
export default App;