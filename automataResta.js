/////////////////////////////////////////////////////////////////////////////////////
// Crear el autómata Resta
const automataResta = new Automata("Resta");

function crearAutomataResta() {
    // Crear nodos (estados)
    let q0 = new Nodo("q0", false); // Estado inicial
    let q1 = new Nodo("q1", false);
    let q2 = new Nodo("q2", false);
    let q3 = new Nodo("q3", false);
    let q4 = new Nodo("q4", false);
    let q5 = new Nodo("q5", false);
    let q6 = new Nodo("q6", false);
    let q7 = new Nodo("q7", true);

    // Agregar arcos
    q0.agregarArco("q1", "1", "#", "R");
    q0.agregarArco("q5", "-", "-", "R");

    q1.agregarArco("q1", "1", "1", "R");
    q1.agregarArco("q1", "-", "-", "R");
    q1.agregarArco("q2", "#", "#", "L");

    q2.agregarArco("q3", "1", "#", "L");
    q2.agregarArco("q4", "-", "1", "L");

    q3.agregarArco("q3", "1", "1", "L");
    q3.agregarArco("q3", "-", "-", "L");
    q3.agregarArco("q0", "#", "#", "R");

    q4.agregarArco("q4", "1", "1", "L");
    q4.agregarArco("q7", "#", "#", "R");

    q5.agregarArco("q7", "1", "1", "L");
    q5.agregarArco("q6", "#", "#", "L");

    q6.agregarArco("q7", "-", "#", "S");

    // Agregar nodos al autómata
    automataResta.agregarNodo(q0);
    automataResta.agregarNodo(q1);
    automataResta.agregarNodo(q2);
    automataResta.agregarNodo(q3);
    automataResta.agregarNodo(q4);
    automataResta.agregarNodo(q5);
    automataResta.agregarNodo(q6);
    automataResta.agregarNodo(q7);

    // Mostrar el autómata
    console.log(automataResta.toString());
    console.log(automataResta);
}

// Llamar a la función para crear y mostrar el autómata
crearAutomataResta();
