import React, { useState } from "react";
import './siniestro.css';

const Siniestro = () => {
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
    <div className="deducible card ">
        <h3>Información del siniestro</h3>
        <form>
            <div class="form-group row">
                <label for="inputEmail3" class="col-md-3 col-form-label">Número de caso</label>
                <div class="col-md-3">
                    <input type="text" class="form-control" />
                </div>
            </div>
            <div class="form-group row">
                <label for="inputEmail3" class="col-md-3 col-form-label"> Número de siniestro</label>
                <div class="col-md-3">
                    <input type="text" class="form-control" />
                </div>
            </div>
            <div class="form-group row">
                <label for="inputEmail3" class="col-md-3 col-form-label"> Número de póliza</label>
                <div class="col-md-3">
                    <input type="text" class="form-control" />
                </div>
            </div>
            <div class="form-group row">
                <label for="inputEmail3" class="col-md-3 col-form-label">Ingresa el porcentaje</label>
                <div class="col-md-3">
                    <input type="number" class="form-control" onChange={e => setPorcentaje(e.target.value)}/>
                </div>
            </div>
            <fieldset class="form-group">
                <div class="row">
                    <legend class="col-form-label col-sm-3 pt-0"> Selecciona la moneda</legend>
                    <div class="col-sm-9">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                            <label class="form-check-label" for="gridRadios1">Dólares</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                            <label class="form-check-label" for="gridRadios2">Soles</label>
                        </div>

                    </div>
                </div>
            </fieldset>
            <div class="form-group row">
                <label for="inputEmail3" class="col-md-3 col-form-label">Monto mínimo (sin IGV)</label>
                <div class="col-md-3">
                    <input type="text" class="form-control" onChange={e => setMinimo(e.target.value)} />
                </div>
            </div>


        </form>
    </div>


    <div className="deducible card ">
        <h3>Resumen de Aprobación</h3>
        <form>
            <div class="form-group row">
                <label for="inputEmail3" class="col-md-3 col-form-label">Planchado</label>
                <label for="inputEmail3" class="col-md-1 col-form-label">US$</label>
                <div class="col-md-2">
                    <input type="text" class="form-control" />
                </div>
            </div>

            <div class="form-group row">
                <label for="inputEmail3" class="col-md-3 col-form-label">Pintura</label>
                <label for="inputEmail3" class="col-md-1 col-form-label">US$</label>
                <div class="col-md-2">
                    <input type="text" class="form-control" />
                </div>
            </div>

            <div class="form-group row">
                <label for="inputEmail3" class="col-md-3 col-form-label">Repuestos</label>
                <label for="inputEmail3" class="col-md-1 col-form-label">US$</label>
                <div class="col-md-2">
                    <input type="text" class="form-control" />
                </div>
            </div>

            <div class="form-group row">
                <label for="inputEmail3" class="col-md-3 col-form-label">Otros</label>
                <label for="inputEmail3" class="col-md-1 col-form-label">US$</label>
                <div class="col-md-2">
                    <input type="text" class="form-control" />
                </div>
            </div>

            <div class="form-group row">
                <label for="inputEmail3" class="col-md-3 col-form-label">Total Reparación Sin IGV</label>
                <label for="inputEmail3" class="col-md-1 col-form-label">US$</label>
                <div class="col-md-2">
                    <input type="text" class="form-control" onChange={e => setReparacion(e.target.value)} />
                </div>
            </div>
            <div class="form-group row">
                <label for="inputEmail3" class="col-md-3 col-form-label">Deducible</label>
                <label for="inputEmail3" class="col-md-1 col-form-label">US$</label>
                <div class="col-md-2">
                    <input type="text" class="form-control" value={deducible()}/>
                </div>
            </div>
            



        </form>
    </div>
</div>
);
};

export default Siniestro;