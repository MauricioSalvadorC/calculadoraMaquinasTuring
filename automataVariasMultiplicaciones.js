/////////////////////////////////////////////////////////////////////////////////////
// Crear el autómata multiplicación
const automataMultiInfinita = new Automata("Multiplicación");

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
    let q9 = new Nodo("q9", false);
    let q10 = new Nodo("q10", false);
    let q11 = new Nodo("q11", false);
    let q12 = new Nodo("q12", false); 
    let q13 = new Nodo("q13", false);
    let q14 = new Nodo("q14", true); // Estado final

    let qa1 = new Nodo("qa1", false); // Estado inicial
    let qa2 = new Nodo("qa2", false); // Estado inicial

    // Agregar arcos
    q0.agregarArco("q0", "1", "1", "R");
    q0.agregarArco("q0", "*", "*", "R");
    q0.agregarArco("q1", "#", "=", "L");

    q1.agregarArco("q2", "1", "A", "L");
    q1.agregarArco("q8", "*", "*", "L");

    q2.agregarArco("q2", "1", "1", "L");
    q2.agregarArco("q3", "*", "*", "L");
    q2.agregarArco("qa1", "#", "#", "R");

    qa1.agregarArco("qa1", "A", "1", "R");
    qa1.agregarArco("qa2", "=", "#", "L");

    qa2.agregarArco("qa2", "1", "1", "L");
    qa2.agregarArco("q14", "#", "#", "R");

    q3.agregarArco("q3", "B", "B", "L");
    q3.agregarArco("q4", "1", "B", "R");
    q3.agregarArco("q6", "*", "*", "R");
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
    q6.agregarArco("q7", "*", "*", "R");

    q7.agregarArco("q7", "1", "1", "R");
    q7.agregarArco("q1", "A", "A", "L");

    q8.agregarArco("q8", "1", "1", "L");
    q8.agregarArco("q9", "#", "#", "R");
    q8.agregarArco("q9", "*", "*", "R");

    q9.agregarArco("q9", "1", "e", "R");
    q9.agregarArco("q9", "*", "e", "R");
    q9.agregarArco("q9", "A", "e", "R");
    q9.agregarArco("q10", "=", "e", "R");

    q10.agregarArco("q10", "e", "e", "R");
    q10.agregarArco("q11", "1", "e", "L");
    q10.agregarArco("q13", "#", "#", "L");

    q11.agregarArco("q11", "e", "e", "L");
    q11.agregarArco("q12", "*", "*", "R");
    q11.agregarArco("q12", "#", "#", "R");
    q11.agregarArco("q12", "1", "1", "R");

    q12.agregarArco("q10", "e", "1", "R");

    q13.agregarArco("q13", "e", "#", "L");
    q13.agregarArco("q13", "1", "1", "L");
    q13.agregarArco("q0", "*", "*", "R");
    q13.agregarArco("q14", "#", "#", "R");

    // Agregar nodos al autómata
    automataMultiInfinita.agregarNodo(q0);
    automataMultiInfinita.agregarNodo(q1);
    automataMultiInfinita.agregarNodo(q2);
    automataMultiInfinita.agregarNodo(q3);
    automataMultiInfinita.agregarNodo(q4);
    automataMultiInfinita.agregarNodo(q5);
    automataMultiInfinita.agregarNodo(q6);
    automataMultiInfinita.agregarNodo(q7);
    automataMultiInfinita.agregarNodo(q8);
    automataMultiInfinita.agregarNodo(q9);
    automataMultiInfinita.agregarNodo(q10);
    automataMultiInfinita.agregarNodo(q11);
    automataMultiInfinita.agregarNodo(q12);
    automataMultiInfinita.agregarNodo(q13);
    automataMultiInfinita.agregarNodo(q14);
    automataMultiInfinita.agregarNodo(qa1);
    automataMultiInfinita.agregarNodo(qa2);
}

// Llamar a la función para crear el autómata
crearAutomataMultiplicacion();

// Mostrar el autómata
console.log(automataMultiInfinita.toString());
console.log(automataMultiInfinita);