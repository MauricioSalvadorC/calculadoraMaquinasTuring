/////////////////////////////////////////////////////////////////////////////////////
// Crear el autómata FACTORIAL
const automataFactorial = new Automata("Factorial");

function crearAutomataFactorial() {
    // Crear nodos (estados)
    let qa = new Nodo("qa", false); // Estado inicial
    let q0 = new Nodo("q0", false); // Estado inicial
    let q1 = new Nodo("q1", false);
    let q2 = new Nodo("q2", false);
    let q3 = new Nodo("q3", false);
    let q4 = new Nodo("q4", false);
    let q5 = new Nodo("q5", false);
    let q6 = new Nodo("q6", false);
    let q7 = new Nodo("q7", false);
    let q8 = new Nodo("q8", false);
    let q9 = new Nodo("q9", true); // Estado final

    // Agregar arcos
    qa.agregarArco("q0", "1", "1", "R");
    qa.agregarArco("q9", "#", "1", "S");

    q0.agregarArco("q0", "1", "1", "R");
    q0.agregarArco("q1", "#", "*", "L");

    q1.agregarArco("q2", "1", "A", "L");

    q2.agregarArco("q7", "*", "*", "R");
    q2.agregarArco("q7", "#", "#", "R");
    q2.agregarArco("q3", "1", "B", "R");

    q3.agregarArco("q3", "B", "B", "R");
    q3.agregarArco("q3", "A", "A", "R");
    q3.agregarArco("q3", "*", "*", "R");
    q3.agregarArco("q3", "1", "1", "R");
    q3.agregarArco("q4", "#", "1", "L");

    q4.agregarArco("q4", "1", "1", "L");
    q4.agregarArco("q5", "*", "*", "L");

    q5.agregarArco("q5", "A", "A", "L");
    q5.agregarArco("q5", "B", "B", "L");
    q5.agregarArco("q3", "1", "B", "R");
    q5.agregarArco("q6", "*", "*", "R");
    q5.agregarArco("q6", "#", "#", "R");

    q6.agregarArco("q6", "B", "1", "R");
    q6.agregarArco("q6", "A", "1", "R");
    q6.agregarArco("q6", "*", "*", "R");
    q6.agregarArco("q6", "1", "1", "R");
    q6.agregarArco("q1", "#", "*", "L");

    q7.agregarArco("q7", "A", "1", "R");
    q7.agregarArco("q8", "*", "#", "L");

    q8.agregarArco("q8", "1", "1", "L");
    q8.agregarArco("q8", "*", "*", "L");
    q8.agregarArco("q9", "#", "#", "R");

    // Agregar nodos al autómata
    automataFactorial.agregarNodo(qa);
    automataFactorial.agregarNodo(q0);
    automataFactorial.agregarNodo(q1);
    automataFactorial.agregarNodo(q2);
    automataFactorial.agregarNodo(q3);
    automataFactorial.agregarNodo(q4);
    automataFactorial.agregarNodo(q5);
    automataFactorial.agregarNodo(q6);
    automataFactorial.agregarNodo(q7);
    automataFactorial.agregarNodo(q8);
    automataFactorial.agregarNodo(q9);
}

// Llamar a la función para crear el autómata
crearAutomataFactorial();

// Mostrar el autómata
console.log(automataFactorial.toString());
console.log(automataFactorial);