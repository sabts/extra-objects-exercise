//Ejercicios de Objetos con Arrays, Bucles, Strings, Condicionales y Lógica
//const alphabetLowerCase = 'abcdefghijklmnñopqrstuvwxyz';
//const alphabetUpperCase = /[A-Z]/;
//const numbers = '123456' Olvidalo, nada de esto me funciono en la primera

//1️⃣ Macarena y la validación de contraseñas:
// Crea una función validatePassword que reciba un objeto con una propiedad password (string) y devuelva un objeto con las propiedades isValid (boolean) y errors (array de strings) que indiquen si la contraseña cumple con los siguientes criterios:
//Longitud mínima de 8 caracteres
//Al menos una letra mayúscula
// Al menos una letra minúscula test(.toLowerCase)
// Al menos un número
// Ejemplo entrada: { password: "abc123" }
// Ejemplo salida: {isValid: false, y tipo de error}

const validatePassword = {
    passwords:[],
}
console.log(validatePassword)


const passwordValidateCondition =(password) => {
    let isValid = true;
    const errors =[];

    if (password.length < 8) {
        errors.push("Password must be at least 8 characters long.");
        isValid = false;
    }

    if(!/[A-Z]/.test(password)){
        errors.push("Password must contain at least one uppercase letter.");
        isValid = false;
    }

    if(!/[a-z]/.test(password)){
        errors.push("Password must contain at least one lowercase letter.");
        isValid = false;
    }

    if(!/[0-9]/.test(password)){
        errors.push("Password must contain at least one number.");
        isValid = false;
    }
    if(isValid === true){
        validatePassword.passwords.push(password)
    }
        
    console.log(errors)
}
passwordValidateCondition('abc123');
passwordValidateCondition('AyudaEn321please');

console.log(validatePassword.passwords); 
