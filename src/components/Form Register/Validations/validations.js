export default function validate(input){
  let err = {}
  const mailRegExp = /^[-]+@([-]+)+[-]{2,4}$/
  const passRegExp = /^(?=.*[A-Za-z])(?=.*)[A-Za-z]{8,}$/

  if(input.nombre === "") {
    err.nombre = "No puede estar vacío"
  } 
  if(input.apellido === ""){
    err.apellido = "No puede estar vacío"
  }
  if(!mailRegExp.test(input.correo)){
    err.correo = "Correo no válido"
  }
  if(passRegExp.test(input.contraseña)){
    err.contraseña = "La contraseña debe ser de 8 caracteres y contener al menos 1 letra y 1 numero"
  }

  return err
}