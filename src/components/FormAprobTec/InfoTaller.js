import React from 'react';

const InfoTaller = ({}) => (
    <div>
    <h3 className="subtitle">Mano de Obra - Taller</h3>
    
    <table className=" table table-hover">
        <thead>
            <tr>
                <th scope="col" >Planchado</th>
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
   
    <table  className="table table-hover">
        <thead>
            <tr>
                <th scope="col">Pintura</th>
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