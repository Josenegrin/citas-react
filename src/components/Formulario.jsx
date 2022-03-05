const Formulario = () => {
  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
      <p className='text-lg mt-5 mb-10 text-center'>
        Añade Pacientes y {''}
        <span className='text-indigo-600 font-bold'>Administralos</span>
      </p>
      <form className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor='pet-name'>
            Nombre Mascota
          </label>
          <input
            id='pet-name'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            type='text'
            placeholder='Nombre de la mascota'
          />
        </div>
        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor='pet-property'>
            Propietario
          </label>
          <input
            id='pet-property'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            type='text'
            placeholder='Nombre del propietario'
          />
        </div>
        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor='pet-email'>
            E-Mail
          </label>
          <input id='pet-email' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' type='email' placeholder='E-Mail' />
        </div>
        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor='pet-alta'>
            Alta
          </label>
          <input id='pet-alta' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' type='date' />
        </div>
        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor='pet-sintomas'>
            Describe los síntomas
          </label>
          <textarea
            id='pet-sintomas'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            placeholder='Describe los sintomas'
          />
        </div>
        <input
          type='submit'
          className='bg-indigo-600 text-white rounded-md w-full p-3 uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all'
        />
      </form>
    </div>
  )
}

export default Formulario
