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

const validatePassword = data => {
  console.log(data);

  const result = {
    isValid: false,
    errors: [],
  };

  if (data.password.length < 8) {
    result.errors.push("Password must be at least 8 characters long.");
  }
  if (!/[A-Z]/.test(data.password)) {
    result.errors.push("Password must contain at least one uppercase letter.");
  }
  if (!/[a-z]/.test(data.password)) {
    result.errors.push("Password must contain at least one lowercase letter.");
  }
  if (!/[0-9]/.test(data.password)) {
    result.errors.push("Password must contain at least one number.");
  }

  result.isValid = result.errors.length === 0;

  console.log(result);
};

validatePassword({ password: "abc123" });
validatePassword({ password: "AyudaEn321please" });

//2️⃣ Sabrina y el sistema de evaluación de estudiantes:
// Crea una función evaluateStudents que reciba un objeto que representa una asignatura (subject). Este objeto debe tener las propiedades:
// subjectName: El nombre de la asignatura (string).
// teacher: El nombre del profesor a cargo (string).
// students: Un objeto que contiene a los estudiantes como claves y sus notas (grades) como valores.
// La función debe imprimir un objeto con la información de los estudiantes aprobados (note >= 5) junto con el nombre de la asignatura y el profesor.
// // Ejemplo de entrada:
// evaluateStudents({
// subjectName: "Web Development",
// teacher: "Mr. Dios",
// students: {
// Macarena: 8,
// Bego: 4,
// Abby: 6,
// Camila: 3,
// Sabrina:5
// Ejemplo de salida:
// {subjectName: "Mathematics",
// teacher: "Mr. Johnson",
// passedStudents: [ Macarena, Abby, Sabrina ]}
const evaluateStudents = {
  subjectName: "Mathematics",
  teacher: "Mr. Johnson",
  students: {
    Macarena: 8,
    Bego: 4,
    Abby: 6,
    Camila: 3,
    Sabrina: 5,
  },
};

const noteEvaluation = notes => {
  let passedStudents = [];

  for (const note of notes.evaluateStudents.students) {
    if (note >= 5) {
      passedStudents.push(note);

      console.log({
        subjectName: subject.subjectName,
        teacher: subject.teacher,
        passedStudents: passedStudents,
      });
    }
  }
};

//3️⃣ Abby y la traducción de palabras:
// Crea una función translateWords que reciba un objeto translationTask con:
// projectName: Nombre del proyecto.
// translator: Nombre del traductor.
// words: Array de palabras a traducir.
// dictionary: Objeto que mapea palabras originales a su traducción.
// Debe devolver un objeto con el nombre del proyecto, el traductor y un array de palabras traducidas.
// // Ejemplo de entrada:
// translateWords({
// projectName: "Basic Translator",
// translator: "Abby",
// words: ['hello', 'world'],
// dictionary: { hello: 'hola', world: 'mundo' }
// });
// Ejemplo de salida:
//{projectName: "Basic Translator",
// translator: "Abby",
// translated: [ 'hola', 'mundo' ]}
const translateWords = translatedWords => {
  console.log(translatedWords);

  const result = {
    projectName: translationTask.projectName,
    translator: translationTask.translator,
    translated: [],
  };

  const translationTask = {
    projectName: "Basic Translator",
    translator: "Abby",
    words: ["hello", "world"],
    dictionary: {
      hello: "hola",
      world: "mundo",
    },
  };

  for (const word of translateWords.words[dictionary]) {
    translateWords.translated.push();
  }

  console.log(translated);
};

translateWords({ translationTask: "hello" });
translateWords({ translationTask: "world" });
