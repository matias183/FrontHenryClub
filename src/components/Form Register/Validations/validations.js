export default function validate(input) {
	let err = {};
	const mailRegExp = /\S+@\S+\.\S+/; //Revisa *@*.*
	const phoneRegExp = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/; // 10 digitos
	const dniRegExp = /^\d{8}\d*/; //Revisa 8 o más números
	const passRegExp = /(?=.*[0-9])/; //al menos 1 letra y 1 número
  console.log(typeof input.edad)
	if (input.nombre === "") {
		err.nombre = "No puede estar vacío";
	}
	if (input.apellido === "") {
		err.apellido = "No puede estar vacío";
	}
	if (!mailRegExp.test(input.correo)) {
		err.correo = "Correo no válido";
	}
	if (!phoneRegExp.test(input.telefono)) {
		err.telefono = "Número no válido";
	}
	if (!dniRegExp.test(input.dni)) {
		err.dni = "DNI no válido";
	}
	if (input.edad < 1 || input.edad > 120) {
		err.edad = "Edad no válida";
	}
	if (input.usuario === "") {
		err.usuario = "No puede estar vacío";
	}
	if (!passRegExp.test(input.contraseña)) {
		err.contraseña = "La contraseña debe contener al menos 1 letra y 1 numero";
	}

	return err;
}
