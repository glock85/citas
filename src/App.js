import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';
import PropTypes from 'prop-types';

function App() {

  //Citas en LocalStorage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales) {
    citasIniciales = [];
  }

  //Arreglo de citas

  const [citas, guardarCitas] = useState (citasIniciales);

  //Use Effect para realizar ciertas operaciones cuando el state cambia
  useEffect ( () => {
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));
    if(citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas));
    }
    else{
      localStorage.setItem('citas', JSON.stringify([]));
    }
  });

  //Funcion que tome las citas actuales y agregue la nueva
  const crearCita = cita => { guardarCitas([...citas, cita]); }

  //Funcion que elimina una cita por su id
  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    guardarCitas(nuevasCitas);
  }

  //Mensaje condicional

  const titulo = citas.length === 0 ? 'No hay citas, por favor agrega una.' : 'Administra tus Citas';

  return (

    <Fragment>

      <h1>Administrador de Paciente</h1>

      <div className="container">

        <div className='one-half column'>

          <Formulario crearCita={crearCita}/>

        </div>

        <div className='one-half column'>

            <h2>{titulo}</h2>

            {citas.map(cita => (<Cita key={cita.id} cita={cita} eliminarCita={eliminarCita}/>))};

        </div>

      </div>

    </Fragment>
  
  );
}

Formulario.propTypes = {
  crearCita: PropTypes.func.isRequired
}

export default App;
