const Paciente = () => {
  return (
    <div className='m-3 bg-white shadow-md px-5 py-10 rounded-xl'>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Nombre:{''}
        <span className='font-normal normal-case'>Leia</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        E-Mail:{''}
        <span className='font-normal normal-case'>Jose</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Propietario:{''}
        <span className='font-normal normal-case'>correo@correo.com</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Alta:{''}
        <span className='font-normal normal-case'>12-01-2020</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Sintomas:{''}
        <span className='font-normal normal-case'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, sequi in dicta amet quidem cumque itaque libero perferendis
          dignissimos maiores temporibus, nisi nemo consequatur dolor. Ab iusto aperiam eligendi illo?
        </span>
      </p>
    </div>
  )
}

export default Paciente
