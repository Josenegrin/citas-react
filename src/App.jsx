import { useState } from 'react'
import Formulario from './components/Formulario'
import Header from './components/Header'
import ListadoPacientes from './components/ListadoPacientes'

function App() {
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})

  const deletePaciente = (id) => {
    console.log('Eliminando paciente ', id)
    const deletingPaciente = pacientes.filter((paciente) => paciente.id !== id)
    setPacientes(deletingPaciente)
  }

  return (
    <div className='container mx-auto mt-20'>
      <Header />
      <div className='mt-12  md:flex'>
        <Formulario paciente={paciente} pacientes={pacientes} setPacientes={setPacientes} />
        <ListadoPacientes pacientes={pacientes} setPaciente={setPaciente} deletePaciente={deletePaciente} />
      </div>
    </div>
  )
}

export default App
