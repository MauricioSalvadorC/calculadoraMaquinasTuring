// Crear el autómata multiplicación
const automataMultiplicacion = new Automata("Multiplicación");

function crearAutomataMultiplicacion() {
    // Crear nodos (estados)
    let q0 = new Nodo("q0", false); // Estado inicial
    let q1 = new Nodo("q1", false);
    let q2 = new Nodo("q2", false);
    let q3 = new Nodo("q3", false);
    let q4 = new Nodo("q4", false);
    let q5 = new Nodo("q5", false);
    let q6 = new Nodo("q6", false);
    let q7 = new Nodo("q7", false);
    let q8 = new Nodo("q8", false);
    let q9 = new Nodo("q9", true);

    // Agregar arcos
    q0.agregarArco("q0", "1", "1", "R");
    q0.agregarArco("q0", "*", "*", "R");
    q0.agregarArco("q1", "#", "=", "L");

    q1.agregarArco("q2", "1", "A", "L");
    q1.agregarArco("q7", "*", "*", "L");

    q2.agregarArco("q2", "1", "1", "L");
    q2.agregarArco("q3", "*", "*", "L");

    q3.agregarArco("q3", "B", "B", "L");
    q3.agregarArco("q4", "1", "B", "R");
    q3.agregarArco("q6", "#", "#", "R");

    q4.agregarArco("q4", "B", "B", "R");
    q4.agregarArco("q4", "*", "*", "R");
    q4.agregarArco("q4", "1", "1", "R");
    q4.agregarArco("q4", "A", "A", "R");
    q4.agregarArco("q4", "=", "=", "R");
    q4.agregarArco("q5", "#", "1", "L");

    q5.agregarArco("q5", "1", "1", "L");
    q5.agregarArco("q5", "=", "=", "L");
    q5.agregarArco("q5", "A", "A", "L");
    q5.agregarArco("q3", "*", "*", "L");

    q6.agregarArco("q6", "B", "1", "R");
    q6.agregarArco("q6", "*", "1", "R");
    q6.agregarArco("q6", "1", "1", "R");
    q6.agregarArco("q1", "A", "A", "L");

    q7.agregarArco("q7", "1", "1", "L");
    q7.agregarArco("q8", "#", "#", "R");

    q8.agregarArco("q8", "1", "#", "R");
    q8.agregarArco("q8", "*", "#", "R");
    q8.agregarArco("q8", "A", "#", "R");
    q8.agregarArco("q9", "=", "#", "R");

    // Agregar nodos al autómata
    automataMultiplicacion.agregarNodo(q0);
    automataMultiplicacion.agregarNodo(q1);
    automataMultiplicacion.agregarNodo(q2);
    automataMultiplicacion.agregarNodo(q3);
    automataMultiplicacion.agregarNodo(q4);
    automataMultiplicacion.agregarNodo(q5);
    automataMultiplicacion.agregarNodo(q6);
    automataMultiplicacion.agregarNodo(q7);
    automataMultiplicacion.agregarNodo(q8);
    automataMultiplicacion.agregarNodo(q9);

    // Mostrar el autómata
    console.log(automataMultiplicacion.toString());
    console.log(automataMultiplicacion);
}

// Llamar a la función para crear y mostrar el autómata
crearAutomataMultiplicacion();