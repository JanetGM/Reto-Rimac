import React, { useState } from "react";

const ResumenAprob = () => {
    let [porcentaje, setPorcentaje] = useState("");
    let [reparacion, setReparacion] = useState("");
    let [minimo, setMinimo] = useState("");
    
const deducible = () => {
    
    if((parseInt(porcentaje)*parseInt(reparacion)/100)>parseInt(minimo))
        return (parseInt(porcentaje)*parseInt(reparacion)/100)
    else return parseInt(minimo)

    
}
    return( 
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
                    <input type="number" className="form-control" onChange={e => setPorcentaje(e.target.value)}/>
                </div>
            </div>
            <fieldset className="form-group">
                <div className="row">
                    <legend className="col-form-label col-sm-3 pt-0"> Selecciona la moneda</legend>
                    <div className="col-sm-9">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                            <label className="form-check-label" for="gridRadios1">Dólares</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                            <label className="form-check-label" for="gridRadios2">Soles</label>
                        </div>
        
                    </div>
                </div>
            </fieldset>
            <div className="form-group row">
                <label htmlFor="inputEmail3" className="col-md-3 col-form-label">Monto mínimo (sin IGV)</label>
                <div className="col-md-3">
                    <input type="text" className="form-control" onChange={e => setMinimo(e.target.value)} />
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
                    <input type="text" className="form-control" />
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="inputEmail3" className="col-md-3 col-form-label">Pintura</label>
                <label htmlFor="inputEmail3" className="col-md-1 col-form-label">US$</label>
                <div className="col-md-2">
                    <input type="text" className="form-control" />
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="inputEmail3" className="col-md-3 col-form-label">Repuestos</label>
                <label htmlFor="inputEmail3" className="col-md-1 col-form-label">US$</label>
                <div className="col-md-2">
                    <input type="text" className="form-control" />
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
                <label for="inputEmail3" className="col-md-3 col-form-label">Total Reparación Sin IGV</label>
                <label for="inputEmail3" className="col-md-1 col-form-label">US$</label>
                <div className="col-md-2">
                    <input type="text" className="form-control" onChange={e => setReparacion(e.target.value)} />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="inputEmail3" className="col-md-3 col-form-label">Deducible</label>
                <label htmlFor="inputEmail3" className="col-md-1 col-form-label">US$</label>
                <div className="col-md-2">
                    <input type="text" className="form-control" value={deducible()}/>
                </div>
            </div>

        </form>
    </div>
</div>
</div>
);
};

export default ResumenAprob;
