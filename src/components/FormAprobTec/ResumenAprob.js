import React, { useState } from "react";
import './siniestro.css';

const ResumenAprob = () => {
let [xxx, setName] = useState("");
const suma = () => {
    return (parseInt(xxx)+1)
}
return(
    <div className="deducible card ">
        <h3>Resumen de Aprobación</h3>
        <form>
            <div class="form-group row">
                <label for="inputEmail3" class="col-md-3 col-form-label">Planchado</label>
                <label for="inputEmail3" class="col-md-1 col-form-label">US$</label>
                <div class="col-md-2">
                    <input type="text" class="form-control" onChange={e => setName(e.target.value)}/>
                </div>
            </div>

           
            <div class="form-group row">
                <label for="inputEmail3" class="col-md-3 col-form-label">Total Reparación con IGV</label>
                <label for="inputEmail3" class="col-md-1 col-form-label">US$</label>
                <div class="col-md-2">
                    <input type="text" class="form-control" value={suma()}/>
                </div>
            </div>
            
               
            
        </form>
    </div>

);
}

export default ResumenAprob;