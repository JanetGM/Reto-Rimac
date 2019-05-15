import React, { useState } from 'react';
import useForm from 'react-hook-form';

const createElement = (arr, propiedad, cantidad) => {
  const element = [
    ...arr,
    {
      name: propiedad,
      cant: cantidad,
    },
  ];

  return element;
};

const Form = ({ sendToDB, values }) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    values(data);
    sendToDB();
  };

  const [listRepuestos, setListRepuestos] = useState([]);
  const [listPlanchado, setListPlanchado] = useState([]);
  const [listPintura, setListPintura] = useState([]);

  const element = arr => arr.map(ele => (
    <div className="form-group col-sm-3">
      <input className="input-border" placeholder={ele.propiedad} name={ele.propiedad} ref={register} />
      <input className="input-border" name={ele.cant} ref={register} />
    </div>
  ));


  return (
    <div className="container">
      <div className="card mt-5">
        <div className="row">
          <form className="col-sm-12" onSubmit={handleSubmit(onSubmit)}>
            <h3 className="col-sm-12 text-center">DATOS DE TALLER</h3>
            <div className="form-group col-sm-3">
              <label htmlFor="nametaller">NOMBRE DEL TALLER</label>
              <br />
              <input
                className="input-border"
                placeholder="nametaller"
                name="nametaller"
                ref={register({
                  required: true,
                })}
              />
              {errors.firstname && errors.firstname.message}
            </div>
            <div className="form-group col-sm-3">
              <label htmlFor="celular">CELULAR:</label>
              <br />
              <input className="input-border" placeholder="celular" name="celular" ref={register({ pattern: /\d+/, maxLength: 9 })} />
              {/* apply pattern validation */}
              {errors.celular && 'Please enter number for celular. Max. 9'}
            </div>

            <div className="row justify-content-lg-center">
              <h3 className="col-sm-12 text-center">DATOS DE VEHICULO</h3>
              <div className="form-group col-sm-3">
                <label htmlFor="fecha">Fecha de Ingreso:</label>
                <br />
                <input
                  className="input-border"
                  placeholder="fecha"
                  name="fecha"
                  ref={register({
                    required: true,
                    pattern: {
                      value: /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/,
                      message: 'Debe ser en formato de fecha dd/mm/aa',
                    },
                  })}
                />
                {errors.fecha && errors.fecha.message}
              </div>
              <div className="form-group col-sm-3">
                <label htmlFor="marca">MARCA:</label>
                <br />
                <input
                  className="input-border"
                  placeholder="marca"
                  name="marca"
                  ref={register({
                    required: true,
                  })}
                />


                {errors.marca && errors.marca.message}


              </div>
              <div className="form-group col-sm-3">
                <label htmlFor="modelo">MODELO:</label>
                <br />
                <input
                  className="input-border"
                  placeholder="modelo"
                  name="modelo"
                  ref={register({
                    required: true,
                  })}
                />


                {errors.modelo && errors.modelo.message}


              </div>
              <div className="form-group col-sm-3">
                <label htmlFor="anio">AÑO:</label>
                <br />
                <input
                  className="input-border"
                  placeholder="anio"
                  name="anio"
                  ref={register({
                    required: true,
                  })}
                />


                {errors.anio && errors.anio.message}


              </div>
              <div className="form-group col-sm-3">
                <label htmlFor="placa">PLACA:</label>
                <br />
                <input
                  className="input-border"
                  placeholder="placa"
                  name="placa"
                  ref={register({
                    required: true,
                  })}
                />


                {errors.marca && errors.marca.message}


              </div>
              <h3 className="col-sm-12 text-center">DATOS DE CONTACTO:</h3>
              <div className="form-group col-sm-3">
                <label htmlFor="firstname">NOMBRE:</label>
                <br />
                <input
                  className="input-border"
                  placeholder="firstname"
                  name="firstname"
                  ref={register({
                    required: true,
                  })}
                />
                {errors.firstname && errors.firstname.message}


              </div>
              <div className="form-group col-sm-3">
                <label htmlFor="lastname">APELLIDOS:</label>
                <br />
                <input
                  className="input-border"
                  placeholder="lastname"
                  name="lastname"
                  ref={register({
                    required: true,
                  })}
                />
                {errors.lastname && errors.firstname.message}
              </div>

            </div>

            <div className="row justify-content-lg-center">

              <div className="form-group col-sm-3">
                <label htmlFor="celular">CELULAR:</label>
                <br />
                <input className="input-border" placeholder="celular" name="celular" ref={register({ pattern: /\d+/, maxLength: 9 })} />

                {/* apply pattern validation */}
                {errors.celular && 'Please enter number for celular. Max. 9'}


              </div>
              <div className="form-group col-sm-3">
                <label htmlFor="email">EMAIL: </label>
                <br />
                <input
                  className="input-border"
                  placeholder="email"
                  name="email"
                  ref={register({
                    required: 'Required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: 'invalid email address',
                    },
                  })}
                />
                {errors.email && errors.email.message}
              </div>

            </div>

            <div className="row justify-content-lg-center">
              <h3 className="col-sm-12 text-center">PRESUPUESTO</h3>
              <div className="form-group col-sm-3">
                <input className="input-border" placeholder="planchado" name="planchado" ref={register} />
                <input className="input-border" placeholder="cant" name="cantidadPlanchado" ref={register} />
                <input type="button" value="+" onClick={() => setListPlanchado(createElement(listPlanchado, 'planchado', 'cantidadPlanchado'))} />
                {element(listPlanchado)}
              </div>
              <div className="form-group col-sm-3">
                <input className="input-border" placeholder="pintura" name="pintura" ref={register} />
                <input className="input-border" placeholder="cant" name="cantidadPintura" ref={register} />
                <input type="button" value="+" onClick={() => setListPintura(createElement(listPintura, 'pintura', 'cantidadPintura'))} />
                {element(listPintura)}
              </div>
              <div className="form-group col-sm-3">
                <input className="input-border" placeholder="repuesto" name="repuesto" ref={register} />
                <input className="input-border" placeholder="cant" name="cantidadRepuesto" ref={register} />
                <input type="button" value="+" onClick={() => setListRepuestos(createElement(listRepuestos, 'repuesto', 'cantidadRepuesto'))} />
                {element(listRepuestos)}
              </div>
            </div>

            <div className="form-group text-center m-5">
              <input className="btn btn-secondary btn-lg" value="ENVIAR A PROVEEDOR" type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};


export default Form;
