import { useState, useEffect } from 'react'
import { generatingId } from '../utils'
import ErrorMessage from './ErrorMessage'

const Formulario = ({ pacientes, setPacientes, paciente }) => {
  const initialState = {
    mascota: '',
    propietario: '',
    email: '',
    alta: '',
    sintomas: '',
    id: '',
  }
  const [form, setForm] = useState(initialState)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setForm(paciente)
    }
  }, [paciente])
  const handleChange = (e) => {
    const { value, name } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validando el formulario
    if ([form.mascota, form.propietario, form.email, form.alta, form.sintomas].includes('')) {
      setError(true)
      return
    }
    setError(false)

    if (form.id) {
      //  Editando el registro
      const pacientesActualizados = pacientes.map((pacienteState) => (pacienteState.id === paciente.id ? form : pacienteState))
      setPacientes(pacientesActualizados)
      setForm(initialState)
    } else {
      // Nuevo Registro
      const paciente = { ...form }
      paciente.id = generatingId()
      setPacientes([...pacientes, paciente])
      setForm(initialState)
    }
  }

  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
      <p className='text-lg mt-5 mb-10 text-center'>
        Añade Pacientes y {''}
        <span className='text-indigo-600 font-bold'>Administralos</span>
      </p>
      <form onSubmit={handleSubmit} className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
        <ErrorMessage error={error} />
        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor='mascota'>
            Nombre Mascota
          </label>
          <input
            name='mascota'
            id='mascota'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            type='text'
            placeholder='Nombre de la mascota'
            value={form.mascota}
            onChange={handleChange}
          />
        </div>
        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor='propietario'>
            Propietario
          </label>
          <input
            name='propietario'
            id='propietario'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            type='text'
            placeholder='Nombre del propietario'
            value={form.propietario}
            onChange={handleChange}
          />
        </div>
        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor='email'>
            E-Mail
          </label>
          <input
            name='email'
            id='email'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            type='email'
            placeholder='E-Mail'
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor='alta'>
            Alta
          </label>
          <input
            name='alta'
            id='alta'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            type='date'
            value={form.alta}
            onChange={handleChange}
          />
        </div>
        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor='sintomas'>
            Describe los síntomas
          </label>
          <textarea
            name='sintomas'
            id='sintomas'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            placeholder='Describe los sintomas'
            value={form.sintomas}
            onChange={handleChange}
          />
        </div>
        <input
          type='submit'
          value={`${form.id ? 'EDITAR PACIENTE' : 'AGREGAR PACIENTE'}`}
          className='bg-indigo-600 text-white rounded-md w-full p-3 uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all'
        />
      </form>
    </div>
  )
}

export default Formulario
