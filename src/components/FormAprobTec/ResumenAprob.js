import React, { useState } from 'react';

const ResumenAprob = () => {
  const calculo = () => {
    const suma = (parseInt(sessionStorage.cantPlanchado) * 55)
    + (parseInt(sessionStorage.cantPintura) * 15)
    + (parseInt(sessionStorage.cantRepuestos) * 30);
    return suma;
  };

  const deducible = () => {
    if ((parseInt(sessionStorage.porcentaje) * parseInt(sessionStorage.reparacion) / 100) >= parseInt(sessionStorage.minimo)) {
      return (parseInt(sessionStorage.porcentaje) * calculo() / 100);
    }
    return parseInt(sessionStorage.minimo);
  };
  return (
    <div>
      <div classNameName="deducible card ">
        <h3>Información del siniestro</h3>
        <form>
          <div className="form-group row">
            <label htmlFor="inputEmail3" className="col-md-3 col-form-label">Número de caso</label>
            <div className="col-md-3">
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputEmail3" className="col-md-3 col-form-label"> Número de siniestro</label>
            <div className="col-md-3">
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputEmail3" className="col-md-3 col-form-label"> Número de póliza</label>
            <div className="col-md-3">
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputEmail3" className="col-md-3 col-form-label">Ingresa el porcentaje</label>
            <div className="col-md-3">
              <input type="number" className="form-control" onChange={e => sessionStorage.setItem('porcentaje', e.target.value)} />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputEmail3" className="col-md-3 col-form-label">Monto mínimo (sin IGV)</label>
            <div className="col-md-3">
              <input type="text" className="form-control" onChange={e => sessionStorage.setItem('minimo', e.target.value)} />
            </div>
          </div>
        </form>
      </div>
      <div>
        <div classNameName="deducible card ">
          <h3>Resumen de Aprobación</h3>
          <form>
            <div className="form-group row">
              <label htmlFor="inputEmail3" className="col-md-3 col-form-label">Planchado</label>
              <label htmlFor="inputEmail3" className="col-md-1 col-form-label">US$</label>
              <div className="col-md-2">
                <input type="text" className="form-control" value={parseInt(sessionStorage.cantPlanchado) * 55} />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="inputEmail3" className="col-md-3 col-form-label">Pintura</label>
              <label htmlFor="inputEmail3" className="col-md-1 col-form-label">US$</label>
              <div className="col-md-2">
                <input type="text" className="form-control" value={parseInt(sessionStorage.cantPintura) * 15} />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="inputEmail3" className="col-md-3 col-form-label">Repuestos</label>
              <label htmlFor="inputEmail3" className="col-md-1 col-form-label">US$</label>
              <div className="col-md-2">
                <input type="text" className="form-control" value={parseInt(sessionStorage.cantRepuestos) * 30} />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="inputEmail3" className="col-md-3 col-form-label">Otros</label>
              <label htmlFor="inputEmail3" className="col-md-1 col-form-label">US$</label>
              <div className="col-md-2">
                <input type="text" className="form-control" />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="inputEmail3" className="col-md-3 col-form-label">Total Reparación Sin IGV</label>
              <label htmlFor="inputEmail3" className="col-md-1 col-form-label">US$</label>
              <div className="col-md-2">
                <input type="text" className="form-control" value={calculo()} />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputEmail3" className="col-md-3 col-form-label">Deducible</label>
              <label htmlFor="inputEmail3" className="col-md-1 col-form-label">US$</label>
              <div className="col-md-2">
                <input type="text" className="form-control" value={deducible()} />
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default ResumenAprob;
