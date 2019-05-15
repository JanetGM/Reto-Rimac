import React, { useState } from 'react';

const InfoTaller = ({
  planchado, pintura, cantidadPlanchado, cantidadPintura, inputValue,
}) => {

  return (
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
          <td scope="col">{planchado}</td>
          <td scope="col">{cantidadPlanchado}</td>
          <td scope="col">
            <form>
              <input type="number" name="quantity" min="1" max="100"
                onChange={e => sessionStorage.setItem('cantPlanchado', e.target.value)} />
            </form>
          </td>
        </tr>
      </tbody>
    </table>
        <h5>Pintura</h5>
        <table className="Taller table">
      <thead>
        <tr>
          <th scope="col">Descripción</th>
          <th scope="col">Paños</th>
          <th scope="col">Paños Aprobadas</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td scope="col">{pintura}</td>
          <td scope="col">{cantidadPintura}</td>
          <td scope="col">
            <form>
              <input type="number" name="quantity" min="1" max="100" onChange={e => sessionStorage.setItem('cantPintura', e.target.value)} />
            </form>
          </td>
        </tr>
      </tbody>
    </table>
      </div>
  );
};

export default InfoTaller;
