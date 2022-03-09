// Función que genera un id
export const generatingId = () => {
  const random = Math.random().toString(36).substr(2)
  const fecha = Date.now().toString(36)
  return random + fecha
}

//  Funcion para manejar la eliminacion de los pacientes
export const handleDelete = (id, deleteFunction) => {
  const response = confirm('Deseas eliminar este paciente?')

  if (response) {
    deleteFunction(id)
  }
}

//  Funcion para manejar la edición de los pacientes
export const handleEdit = (state, setState) => {
  const response = confirm('Deseas editar este paciente?')

  if (response) {
    setState(state)
  }
}
