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
    <div className="card m-t p-10">
    <div className="card-body">
      <div className="item-1">
        <img className="taller-ico" src="https://i.ibb.co/MBHWsfq/tecnico.png" alt="Smiley face" />
        <h2 className="taller-text">Taller</h2>
      </div>
      <div className="border-left">
      <img className="newcase-icon" src="https://i.ibb.co/VqsFFnr/casos.png" alt="Smiley face" />
      <h3 className="new-case">Nuevos Casos</h3>
      </div>
    </div>
  </div>
      <div className=" mt-3">
        <div className="row">
          <form className="col-sm-12" onSubmit={handleSubmit(onSubmit)}>
            <h3 className=" w-40 col-sm-12 subtitle">1. Datos del Taller</h3>
            <div className="form-group col-sm-3">
              <label htmlFor="nametaller"></label>
              <br />
              <input
                className="form-control input-border"
                placeholder="Nombre de Taller"
                name="nametaller"
                ref={register({
                  required: true,
                })}
              />
              {errors.firstname && errors.firstname.message}
            </div>
            <div className="form-group col-sm-3">
              <label htmlFor="celular"></label>
              <br />
              <input className="form-control input-border" placeholder="Número de Celular" name="celular" ref={register({ pattern: /\d+/, maxLength: 9 })} />
              {/* apply pattern validation */}
              {errors.celular && 'Please enter number for celular. Max. 9'}
            </div>

            <div className="row">
              <h3 className="col-sm-12 subtitle">2. Datos del Vehículo</h3>
              <div className="form-group col-sm-3">
                <label htmlFor="fecha">Fecha de Ingreso:</label>
                <br />
                <input
                  className="form-control input-border"
                  placeholder=""
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
                <label htmlFor="marca">Marca:</label>
                <br />
                <input
                  className="form-control input-border"
                  placeholder=""
                  name="marca"
                  ref={register({
                    required: true,
                  })}
                />
                {errors.marca && errors.marca.message}
              </div>
              <div className="form-group col-sm-3">
                <label htmlFor="modelo">Modelo:</label>
                <br />
                <input
                  className="form-control input-border"
                  placeholder=""
                  name="modelo"
                  ref={register({
                    required: true,
                  })}
                />
                {errors.modelo && errors.modelo.message}
              </div>
              <div className="form-group col-sm-3">
                <label htmlFor="anio">Año:</label>
                <br />
                <input
                  className="form-control input-border"
                  placeholder=""
                  name="anio"
                  ref={register({
                    required: true,
                  })}
                />
                {errors.anio && errors.anio.message}
              </div>
              <div className="form-group col-sm-3">
                <label htmlFor="placa">Placa:</label>
                <br />
                <input
                  className="form-control input-border"
                  placeholder=""
                  name="placa"
                  ref={register({
                    required: true,
                  })}
                />
                {errors.marca && errors.marca.message}
              </div>
              <div className="form-group col-sm-3">
                <label htmlFor="placa">Imágenes:</label>
                <br />
                <button className="btn btn-whitesmoke" type="button">Adjuntar <img  className="upload-ico" src="https://i.ibb.co/JBBPbRr/up-arrow.png"></img></button>
              </div>
              <div className="save-case form-group text-center m-5">
              <button className=" btn btn-green btn-lg"type="button"> Guardar Caso</button>
            </div>
              <p className="col-sm-12 subtitle">3. Datos de Contacto</p>
              <div className="form-group col-sm-10">
                <label htmlFor="firstname"></label>
                <br />
                <input
                  className="form-control input-border"
                  placeholder="Nombres"
                  name="firstname"
                  ref={register({
                    required: true,
                  })}
                />
                {errors.firstname && errors.firstname.message}
              </div>
              <div className="form-group col-sm-10">
                <label htmlFor="lastname"></label>
                <br />
                <input
                  className="form-control input-border"
                  placeholder="Apellidos"
                  name="lastname"
                  ref={register({
                    required: true,
                  })}
                />
                {errors.lastname && errors.firstname.message}
              </div>
            </div>
            <div className="m-left row justify-content-lg-center">
              <div className="form-group col-sm-5">
                <label htmlFor="celular"></label>
                <br />
                <input className="form-control input-border" placeholder="Número de celular" name="celular" ref={register({ pattern: /\d+/, maxLength: 9 })} />
                {/* apply pattern validation */}
                {errors.celular && 'Please enter number for celular. Max. 9'}
              </div>
              <div className="form-group col-sm-3">
                <label htmlFor="email"></label>
                <br />
                <input
                  className="form-control input-border"
                  placeholder="Email"
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
              <h3 className="col-sm-12 subtitle">4. Presupuesto</h3>
              <div className="form-group col-sm-3">
              <br></br>
              <label htmlFor="planchado">Planchado</label>
                <input className="form-control input-border" placeholder="Descripción" name="planchado" ref={register} />
                <br></br>
                <input className="form-control input-border" placeholder="Cantidad" name="cantidadPlanchado" ref={register} />
                <input className ="add-btn"type type="button" value="+" onClick={() => setListPlanchado(createElement(listPlanchado, 'planchado', 'cantidadPlanchado'))} />
                <br></br>
                {element(listPlanchado)}
              </div>
              <div className="form-group col-sm-3">
              <br></br>
              <label htmlFor="pintura">Pintura</label>
                <input className="form-control input-border" placeholder="Descripción" name="pintura" ref={register} />
                <br></br>
                <input className="form-control input-border" placeholder="Cantidad" name="cantidadPintura" ref={register} />
                <input className ="add-btn"type type="button" value="+" onClick={() => setListPintura(createElement(listPintura, 'pintura', 'cantidadPintura'))} />
                <br></br>
                {element(listPintura)}
              </div>
              <div className="form-group col-sm-3">
               <br></br>
               <label htmlFor="repuestos">Repuestos</label>
                <input className="form-control input-border" placeholder="Descripción" name="repuesto" ref={register} />
                <br></br>
                <input className="form-control input-border" placeholder="Cantidad" name="cantidadRepuesto" ref={register} />
                <input className ="add-btn"type="button" value="+" onClick={() => setListRepuestos(createElement(listRepuestos, 'repuesto', 'cantidadRepuesto'))} />
                <br></br>
                {element(listRepuestos)}
              </div>
            </div>
            <div className="form-group text-center m-5">
              <input className="btn btn-c-green btn-lg" value="Enviar a Proveedores" type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};


export default Form;
