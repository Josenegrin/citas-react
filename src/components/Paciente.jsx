import { handleDelete, handleEdit } from '../utils'

const Paciente = ({ paciente, setPaciente, deletePaciente }) => {
  const { mascota, propietario, email, alta, sintomas } = paciente

  return (
    <div className='m-3 bg-white shadow-md px-5 py-10 rounded-xl'>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Nombre:{''}
        <span className='font-normal normal-case'>{mascota}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Propietario:{''}
        <span className='font-normal normal-case'>{propietario}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        E-Mail:{''}
        <span className='font-normal normal-case'>{email}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Alta:{''}
        <span className='font-normal normal-case'>{alta}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Sintomas:{''}
        <span className='font-normal normal-case'>{sintomas}</span>
      </p>
      <div className='w-full flex justify-between mt-10s'>
        <button
          type='button'
          onClick={() => handleEdit(paciente, setPaciente)}
          className='py-2 px-10 bg-indigo-600 transition-all hover:bg-indigo-700 text-white font-bold rounded-lg'
        >
          Editar
        </button>
        <button
          type='button'
          onClick={() => handleDelete(paciente.id, deletePaciente)}
          className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg'
        >
          Eliminar
        </button>
      </div>
    </div>
  )
}

export default Paciente
