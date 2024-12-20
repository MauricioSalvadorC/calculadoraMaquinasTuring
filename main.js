const tituloMaquinaElemento = document.getElementById("titulo-maquina");

// Función para actualizar el título del autómata o máquina de Turing
function actualizarTituloMaquina(nombreMaquina) {
  tituloMaquinaElemento.innerText = `${nombreMaquina}`;
}
// Constantes y configuraciones iniciales
const velocidadPorDefecto = 400;
let velocidadAnimacion = velocidadPorDefecto;

// Referencias al DOM
const velocidadElemento = document.getElementById("velocidad");
const velocidadValorElemento = document.getElementById("velocidad-valor");
const salida = document.querySelector("#resultado");
const num1Input = document.querySelector("#num1");
const num2Input = document.querySelector("#num2");
const operacionSelect = document.querySelector("#operation");
// Función para manejar la visibilidad del segundo número
function ajustarCamposDeEntrada() {
  let operacionSeleccionada = operacionSelect.value;

  if (operacionSeleccionada === "!") {
    // Desactivar el campo b para el factorial
    num2Input.disabled = true; // Desactivar el campo b
  } else {
    // Reactivar el campo b para otras operaciones
    num2Input.disabled = false; // Reactivar el campo b
  }
}

// Ejecutar la función ajustarCamposDeEntrada cuando la operación cambie
operacionSelect.addEventListener("change", ajustarCamposDeEntrada);

// Llamar a la función al cargar la página para configurar el estado inicial
document.addEventListener("DOMContentLoaded", () => {
  ajustarCamposDeEntrada();
});

// Actualización de la velocidad de animación en tiempo real
velocidadElemento.addEventListener("input", (e) => {
  velocidadAnimacion = parseInt(e.target.value, 10);
  velocidadValorElemento.innerText = velocidadAnimacion;
});

// Función para mostrar resultados en la interfaz
function setResult(texto) {
  salida.value += `${texto}\n`; // Añadir el texto sin etiquetas HTML
  salida.scrollTop = salida.scrollHeight; // Mantener el texto visible en la parte inferior
}

// Función para representar la operación en formato de la máquina de Turing
function representarOperacion(a, b, op) {
  return `${"1".repeat(a)}${op}${"1".repeat(b)}`;
}

// Validar que los números sean válidos antes de realizar el cálculo
// function validarNumero(numero) {
//   return !isNaN(numero) && Number.isInteger(numero) && numero >= 0;
// }

ejecutarMaquinaDeTuring(automataSuma, "1+11")
// Función principal de cálculo
async function calcular() {
  // Limpiar resultados anteriores
  salida.value = "";

  // Obtener valores de entrada
  let a = parseInt(num1Input.value, 10);
  let b = parseInt(num2Input.value, 10);
  let op = operacionSelect.value;

  // Validar los números ingresados
  // if ((!validarNumero(a) || !validarNumero(b) || b === 0) && op !== "!") {
  //   setResult("Por favor ingresa números válidos.");
  //   return;
  // }

  switch (op) {
    case "C":
      realizarOperacionCompleja(a, b);
      break;
    case "+":
      ejecutarOperacion(automataSuma, representarOperacion(a, b, op));
      break;
    case "-":
      ejecutarOperacion(automataResta, representarOperacion(a, b, op));
      break;
    case "*":
      ejecutarOperacion(automataMultiplicacion, representarOperacion(a, b, op));
      break;
    case "/":
      ejecutarOperacion(automataDivision, representarOperacion(a, b, op));
      break;
    case "!": {
      // Caso de factorial, solo se usa 'a' ya que factorial es una operación de un solo número
      let factorial = await ejecutarMaquinaDeTuring(
        automataFactorial,
        "1".repeat(a)
      );
      setResult(`Factorial: ${factorial}`);

      let Multiplicación = await ejecutarMaquinaDeTuring(
        automataMultiplicacion,
        factorial
      );
      setResult(`Multiplicación: ${Multiplicación}`);
      break;
    }
    default:
      setResult("Operación no válida.");
      break;
  }
}

// Ejecutar una operación utilizando una máquina de Turing
async function ejecutarOperacion(automata, operacion) {
  await ejecutarMaquinaDeTuring(automata, operacion);
}

// Función para realizar la operación compleja
async function realizarOperacionCompleja(a, b) {
  // Mostrar los resultados de la operación compleja paso a paso
  setResult(`Iniciando Combinatoria de ${a} y ${b}, a c b = a! / (b! * (a - b)!)`);

  // Paso 1: Resta
  let resta = await ejecutarMaquinaDeTuring(
    automataResta,
    representarOperacion(a, b, "-")
  );

  // Paso 2: Factorial de la Resta
  let factorialResta = await ejecutarMaquinaDeTuring(
    automataMultiplicacion,
    await ejecutarMaquinaDeTuring(automataFactorial, resta)
  );

  // Paso 3: Factorial de A
  let factorialA = await ejecutarMaquinaDeTuring(
    automataMultiplicacion,
    await ejecutarMaquinaDeTuring(automataFactorial, "1".repeat(a))
  );

  // Paso 4: Factorial de B
  let factorialB = await ejecutarMaquinaDeTuring(
    automataMultiplicacion,
    await ejecutarMaquinaDeTuring(automataFactorial, "1".repeat(b))
  );

  // Paso 5: Multiplicación de Factoriales
  let multi = await ejecutarMaquinaDeTuring(
    automataMultiplicacion,
    `${factorialB}*${factorialResta}`
  );

  // Paso 6: División de resultados
  await ejecutarMaquinaDeTuring(
    automataDivision,
    `${factorialA}/${multi}`
  );
}
