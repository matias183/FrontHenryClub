
export default function validate(input) {
const revEmail=/\S+@\S+\.\S+/
//n@n.n
const revPass=/(?=.*[0-9])/
//letras y numeros
let errors ={};

if(input.email>1&&!revEmail.test(input.email)){errors.email = "Email is invalid"}

if(input.password>1&&!revPass.test(input.password)){errors.password = "Password requires letters and numbers"}

return errors;

}
