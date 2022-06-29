export default function validate(input) {
  let err = {};
  const mailRegExp = /\S+@\S+\.\S+/; //Revisa *@*.*
  // const phoneRegExp = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/; // 10 digitos
  const phoneRegExp = /\d{7-14}/;
  const dniRegExp = /^\d{7}\d?/; //Revisa que contenga 7 u 8 números
  const passRegExp = /(?=.*[0-9])/; //al menos 1 letra y 1 número
  console.log(typeof input.edad);
  if (input.name === '') {
    err.name = 'No puede estar vacío';
  }
  if (input.surname === '') {
    err.surname = 'No puede estar vacío';
  }
  if (!mailRegExp.test(input.email)) {
    err.email = 'Correo no válido';
  }
  // if (!phoneRegExp.test(input.phone)) {
  //   err.phone = 'Número no válido';
  // }
  if (!dniRegExp.test(input.dni)) {
    err.dni = 'DNI no válido';
  }
  if (input.age < 1 || input.age > 120) {
    err.age = 'Edad no válida';
  }
  if (input.username === '') {
    err.username = 'No puede estar vacío';
  }
  if (!passRegExp.test(input.password)) {
    err.password = 'Debe contener al menos 1 letra y 1 numero';
  }
  if (input.passwordTwo !== input.password) {
    err.passwordTwo = 'La contraseña no coincide';
  }

  return err;
}
