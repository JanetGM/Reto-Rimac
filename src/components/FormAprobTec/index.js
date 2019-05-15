import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bs-stepper/dist/css/bs-stepper.min.css';
import Stepper from 'bs-stepper'
import './index.css';
import InfoTec from './InfoTec'
import Siniestro from './Siniestro'

class App extends Component {
    constructor() {
      super();
      this.state = {
        name: 'React',
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
            <div className="bs-stepper-header">
              <div className="step" data-target="#test-l-1">
                <button className="step-trigger">
                  <span className="bs-stepper-circle">1</span>
                  <span className="bs-stepper-label">Email</span>
                </button>
              </div>
              <div className="line"></div>
              <div className="step" data-target="#test-l-2">
                <button className="step-trigger">
                  <span className="bs-stepper-circle">2</span>
                  <span className="bs-stepper-label">Password</span>
                </button>
              </div>
              <div className="line"></div>
              <div className="step" data-target="#test-l-3">
                <button className="step-trigger">
                  <span className="bs-stepper-circle">3</span>
                  <span className="bs-stepper-label">Validate</span>
                </button>
              </div>
            </div>
            <div className="bs-stepper-content">
              <form onSubmit={this.onSubmit}>
                <div id="test-l-1" className="content">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                  </div>
                  <button className="btn btn-primary" onClick={() => this.stepper.next()}>Next</button>
                </div>
                <div id="test-l-2" className="content">
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                  </div>
                  <button className="btn btn-primary" onClick={() => this.stepper.next()}>Next</button>
                </div>
                <div id="test-l-3"p className="content text-center">
                <Siniestro/>
                  <button type="submit" className="btn btn-primary mt-5">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    }
  }
  
export default App;