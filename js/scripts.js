//# Ejercicios de Objetos

//## Lectura

//1️⃣ Saludar a través un objeto con nombre y ciudad; luego mostrar un mensaje de bienvenida en español.
// Ejemplo entrada: {
// name: "Camila",
// city: "San Francisco"}
// Ejemplo salida: "Hola Camila, has llegado a San Francisco."
const welcomeMessageToUser = userInfo => {
  console.log("Hola " + userInfo.name + ", has llegado a " + userInfo.city);
};
welcomeMessageToUser({ name: "Camila", city: "San Francisco" });

//2️⃣ Verificar la mayoría de edad.
// Ejemplo de entrada:
// verificateUser({
// name: "Abby",
// age: 17});
// Ejemplo de salida:"Abby es menor de edad" o "Abby es mayor de edad"
const verificateUserAge = () => {
  verificateUser = {
    name: "Abby",
    age: 17,
  };
  if (verificateUser.age < 21) {
    console.log("Abby es menor de edad");
  } else {
    console.log("Abby es mayor de edad");
  }
};
verificateUserAge();

//3️⃣ Macarena y los promedios:Array de objetos student con name y grades (array de números). Calcular y mostrar el promedio.
// Ejemplo de entrada: calculateStudentAverage(
//[{name: "Bego",
// grades: [8, 9, 10]},
//{ name: "Abby",
// grades: [8, 9, 10]}]);
// Ejemplo de salida:
// "El promedio de Bego es 9"
// "El promedio de Abby es 9"
const calculateStudentAverage = students => {
  students.forEach(student => {
    const gradesSum = student.grades.reduce((acc, grade) => {
      return acc + grade;
    });
    averageTotalName = gradesSum / student.grades.length;

    console.log(`El promedio de ${student.name} es ${averageTotalName}`);
  });
};
calculateStudentAverage([
  { name: "Bego", grades: [8, 9, 10] },
  { name: "Abby", grades: [8, 9, 10] },
]);

//## Lectura y creación

//4️⃣ Macarena y la clasificación de números:
// Crea una función classifyNumbers que reciba un objeto con:
// numbers: Array de números a clasificar.
// Debe imprimir un objeto con dos arrays: números pares e impares.
// Ejemplo de entrada: classifyNumbers({numbers: [1, 2, 3, 4, 5, 6]});
// Ejemplo de salida: {result: { even: [2, 4, 6], odd: [1, 3, 5] }}
const classifyNumbers = numbersToClassify => {
  const result = {
    even: [],
    odd: [],
  };

  const evenNumbers = numbersToClassify.numbers.filter(number => {
    if (number % 2 === 0) {
      result.even.push(number);
    }
  });
  const oddNumbers = numbersToClassify.numbers.filter(number => {
    if (number % 2 !== 0) {
      result.odd.push(number);
    }
  });

  console.log(result);
};
classifyNumbers({ numbers: [1, 2, 3, 4, 5, 6] });

//5️⃣ Camila y la clasificación de edades:
// Debe imprimir un objeto con la clasificación en tres arrays: children, teens y adults.
// Ejemplo de entrada: classifyAges({ages: [5, 12, 15, 19, 32, 7, 17]});
// Ejemplo de salida:{ result: { children: [5, 12, 7], teens: [15, 17], adults: [19, 32] }}
const classifyAges = ageRange => {
  const agesCassifited = {
    children: [],
    teens: [],
    adults: [],
  };
  const childrens = ageRange.ages.filter(age => {
    if (age < 15) {
      agesCassifited.children.push(age);
    }
  });
  const teen = ageRange.ages.filter(age => {
    if (age < 18 && age > 13) {
      agesCassifited.teens.push(age);
    }
  });
  const adult = ageRange.ages.filter(age => {
    if (age >= 18) {
      agesCassifited.adults.push(age);
    }
  });

  console.log(agesCassifited);
};
classifyAges({ ages: [5, 12, 15, 19, 32, 7, 17] });

//6️⃣ Cambiar el estado de un semáforo. Objeto con state, elije uno de los tres ("red", "yellow", "green"). Pasar de red a green, luego a yellow, y de yellow a red, cíclicamente.
// Ejemplo de entrada: changeTrafficLight({state: 'red'});
// Ejemplo de salida: "El semáforo cambió a yellow"
// Actualizar la propiedad state según el color actual y mostrar: "El semáforo cambió a ..."
const changeTrafficLight =(trafficLights) =>{
  if (trafficLights.state === 'red') {
    trafficLights.state = 'green';
  } else if (trafficLights.state === 'green') {
    trafficLights.state = 'yellow';
  } else if (trafficLights.state === 'yellow') {
    trafficLights.state = 'red';
  }

  console.log("El semáforo cambió a " + trafficLights.state);
};

let trafficLights = { state: 'red' };

changeTrafficLight(trafficLights);
changeTrafficLight(trafficLights);
changeTrafficLight(trafficLights); 

//7️⃣ Bego y la combinación de listas:
// Crea una función combineLists que reciba un objeto listCombiner con:
// names: Array de nombres.
// surnames: Array de apellidos.
// Debe devolver un objeto con todas las combinaciones posibles entre nombres y apellidos.
// Ejemplo de entrada: combineLists({names: ['Alice', 'Bob'], surnames: ['Smith', 'Johnson']});
// Ejemplo de salida: {combinations: [ 'Alice Smith', 'Alice Johnson', 'Bob Smith', 'Bob Johnson' ]}
const combineLists = (listCombiner) =>{
  const combinations = [];
  listCombiner.names.forEach(name => {
    listCombiner.surnames.forEach(surname => {
      combinations.push(`${name} ${surname}`);
    });
    return combinations
  });
 console.log(combinations)
}
combineLists({names: ['Alice', 'Bob'], surnames: ['Smith', 'Johnson']})