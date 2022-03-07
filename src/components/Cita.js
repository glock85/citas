import React from 'react';
import PropTypes from 'prop-types';



const Cita = ({cita, eliminarCita}) => ( 

    <div className='cita'>

        <p>Mascota: <span>{cita.mascota}</span></p>
        <p>propietario: <span>{cita.propietario}</span></p>
        <p>fecha: <span>{cita.fecha}</span></p>
        <p>hora: <span>{cita.hora}</span></p>
        <p>sintomas: <span>{cita.sintomas}</span></p>

        <button className='button eliminar u-full-width' onClick={ () => eliminarCita(cita.id) } >Eliminar Cita &times;</button>

    </div>
 );

 Cita.propTypes = {
     cita: PropTypes.object.isRequired,
     eliminarCita: PropTypes.func.isRequired
 }
export default Cita;