import React from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import db from '../../lib/firestore';


const InfoRepuestos = ({ repuesto, cantidadRepuesto }) => {
  const { error, loading, value } = useCollection(
    db.collection('proveedor'),
  );

  return (
    <>
      {error && (
      <strong>
Error:
  {' '}
  {error}
</strong>
      )}
      {loading && <span>Collection: Loading...</span>}
      {value && (
        <span>
          {value.docs.map(doc => (
            <div key={doc.id}>
            <h3 className="subtitle">Repuestos</h3>
          <table className="Taller table table-hover">
                <thead>
              <tr>
                <th scope="col">Descripción</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Código</th>
                <th scope="col">Disponibilidad</th>
                <th scope="col">Moneda</th>
                <th scope="col">P.Unitario</th>
                <th scope="col">P.Total sin IGV</th>
                <th scope="col">VB</th>
                <th scope="col">Cantidad</th>
              </tr>
            </thead>
                <tbody>
              <tr>
                <td scope="col">{repuesto}</td>
                <td scope="col">{cantidadRepuesto}</td>
                <td scope="col">
                  {' '}
                  {doc.data().code}
                </td>
                <td scope="col"> Stock </td>
                <td scope="col"> $USD </td>
                <td scope="col"> {doc.data().precio} </td>
                <td scope="col"> {cantidadRepuesto * doc.data().precio}</td>
                <td scope="col"> 
                <select id="disponibilidad" className="">
                  <option value="de-acuerdo" selected>DE ACUERDO</option>
                  <option value="desacuerdo">EN DESACUERDO</option>
                </select>
                </td>
                <td scope="col">
                  <form>
                    <input type="number" name="quantity" min="1" max="100" onChange={e => sessionStorage.setItem('cantRepuestos', e.target.value)}/>
                  </form>
                </td>
              </tr>
            </tbody>
              </table>
            </div>
          ))}
        </span>
      )}
    </>
  );
};
export default InfoRepuestos;

/*
InfoRepuestos.propTypes {
    description: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    code: PropTypes.string.isRequired,
    availability: PropTypes.number.isRequired,
    money: PropTypes.number.isRequired,
    unitPrice: PropTypes.number.isRequired,
    totalPrice: PropTypes.func.isRequired,
    vb:  PropTypes.func.isRequired,
    newQuantity: PropTypes.func.isRequired
};
*/
