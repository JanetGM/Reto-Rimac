import React from 'react';

const InfoSiniestro = () => (
    <div className="deducible card ">
        <h3 className="subtitle">Información del siniestro</h3>
        <form>
            <div className="form-group col-md-6">
                <div class="form-group row">
                    <label for="inputEmail3" class="col-md-3 col-form-label">Número de caso</label>
                    <div class="col-md-3">
                        <input type="text" class="form-control form-control-width" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputEmail3" class="col-md-3 col-form-label"> Número de siniestro</label>
                    <div class="col-md-3">
                        <input type="text" class="form-control form-control-width" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputEmail3" class="col-md-3 col-form-label"> Número de póliza</label>
                    <div class="col-md-3">
                        <input type="text" class="form-control form-control-width" />
                    </div>
                </div>
            </div>
            <div className="form-group col-md-6">
                <div class="form-group row">
                    <label for="inputEmail3" class="col-md-3 col-form-label">Ingresa el porcentaje</label>
                    <div class="col-md-3">
                        <input type="number" class="form-control form-control-width" onChange={e => setPorcentaje(e.target.value)} />
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
                        <input type="text" class="form-control form-control-width" onChange={e => setMinimo(e.target.value)} />
                    </div>
                </div>
            </div>
        </form>
    </div>
)

export default InfoSiniestro;