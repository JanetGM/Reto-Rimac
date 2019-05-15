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
      animation: true,
    });
  }

  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <InfoTec />
        <div id="stepper1" className="bs-stepper">
          <div className="bs-stepper-header">
            <div className="step" data-target="#test-l-1">
              <button className="step-trigger">
                <span className="bs-stepper-circle">1</span>
              </button>
            </div>
            <div className="line" />
            <div className="step" data-target="#test-l-2">
              <button className="step-trigger">
                <span className="bs-stepper-circle">2</span>
              </button>
            </div>
            <div className="line" />
            <div className="step" data-target="#test-l-3">
              <button className="step-trigger">
                <span className="bs-stepper-circle">3</span>
              </button>
            </div>
          </div>
          <div className="bs-stepper-content">
            <form onSubmit={this.onSubmit}>
              <div id="test-l-1" className="content">
                <div className="form-group">
                  <InfoVehiculo 
                  marca={} 
                  modelo={} 
                  placa={} 
                  año={} 
                  sede={} />
                  <InfoTaller />
                  <InfoRepuestos />
                </div>
                <button className="btn btn-primary next" onClick={() => this.stepper.next()}>SIGUIENTE</button>
              </div>
              <div id="test-l-2" className="content">
                <div className="form-group">
                  <ResumenAprob />
                </div>
                <button className="btn btn-primary next" onClick={() => this.stepper.next()}>SIGUIENTE</button>
              </div>
              <div id="test-l-3" className="content text-center">
                <button type="submit" className="btn btn-primary mt-5">ENVIAR A TALLER</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
