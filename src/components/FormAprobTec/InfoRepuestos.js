import React from 'react';
import PropTypes from 'prop-types';

const InfoRepuestos = ({description, quantity, code, availability, money, unitPrice, totalPrice, vb, newQuantity}) => (
    <div>
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
                <td scope="col">Datos de repuesto</td>
                <td scope="col">Cant</td>
                <td scope="col"> Codigo</td>
                <td scope="col"> Codigo</td>
                <td scope="col"> Codigo</td>
                <td scope="col"> Codigo</td>
                <td scope="col"> Codigo</td>
                <td scope="col"> Codigo</td>
                <td scope="col">
                <form>
                <input className="form-control form-control-width" type="number" name="quantity" min="1" max="100"></input>
                </form>  
                </td>
            </tr>
        </tbody>
        </table>
    </div>
)
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