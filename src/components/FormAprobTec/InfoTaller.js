import React from 'react';

const InfoTaller = ({}) => (
    <div>
    <h4>Mano de Obra - Taller</h4>
    <h5>Planchado</h5>
    <table className="Taller table">
        <thead>
            <tr>
                <th scope="col">Descripción</th>
                <th scope="col">Horas</th>
                <th scope="col">Horas Aprobadas</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td scope="col">datos del auto</td>
                <td scope="col">Horas del taller</td>
                <td scope="col"> 
                <form>
                    <input type="number" name="quantity" min="1" max="100"></input>
                </form> 
                </td>
            </tr>
        </tbody>
    </table>
    <h5>Pintura</h5>
    <table  className="Taller table">
        <thead>
            <tr>
                <th scope="col">Descripción</th>
                <th scope="col">Paños</th>
                <th scope="col">Paños Aprobadas</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td scope="col">datos del auto</td>
                <td scope="col">Horas del taller</td>
                <td scope="col"> 
                <form>
                    <input type="number" name="quantity" min="1" max="100"></input>
                </form> 
                </td>
            </tr>
        </tbody>
    </table>
    </div>
);
export default InfoTaller;