const ErrorMessage = ({ error }) => {
  return (
    error && (
      <div className='bg-red-500 p-3 rounded-lg text-white text-center'>
        <p>Todos los campos son obligatorios</p>
      </div>
    )
  )
}

export default ErrorMessage
