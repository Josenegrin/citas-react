import Paciente from './Paciente'

const ListadoPacientes = ({ pacientes, setPaciente, deletePaciente }) => {
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll'>
      <h2 className='font-black text-3xl text-center'>{pacientes?.lenght === 0 ? 'No hay pacientes' : 'Listado Pacientes'}</h2>
      <p className='text-xl mt-5 mb-10 text-center'>
        {pacientes?.length === 0 ? 'Comienza agregando pacientes' : 'Adiministra tus'} {''}
        <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
      </p>

      {pacientes?.length > 0 &&
        pacientes.map((paciente, index) => (
          <Paciente key={index} paciente={paciente} setPaciente={setPaciente} deletePaciente={deletePaciente} />
        ))}
    </div>
  )
}

export default ListadoPacientes
