// Crear el autómata division
const automataDivision = new Automata("División");

function crearAutomataDivision() {
    // Crear nodos (estados)
    let q0 = new Nodo("q0", false); // Estado inicial
    let q1 = new Nodo("q1", false);
    let q2 = new Nodo("q2", false);
    let q3 = new Nodo("q3", false);
    let q4 = new Nodo("q4", false);
    let q5 = new Nodo("q5", false);
    let q6 = new Nodo("q6", false);
    let q7 = new Nodo("q7", false);
    let q8 = new Nodo("q8", true);

    // Agregar arcos
    q0.agregarArco("q0", "1", "1", "R");
    q0.agregarArco("q0", "/", "/", "R");
    q0.agregarArco("q1", "#", "=", "L");

    q1.agregarArco("q2", "1", "A", "L");
    q1.agregarArco("q5", "/", "/", "R");

    q2.agregarArco("q2", "1", "1", "L");
    q2.agregarArco("q3", "/", "/", "L");

    q3.agregarArco("q3", "B", "B", "L");
    q3.agregarArco("q4", "1", "B", "R");
    q3.agregarArco("q7", "#", "#", "R");

    q4.agregarArco("q4", "B", "B", "R");
    q4.agregarArco("q4", "/", "/", "R");
    q4.agregarArco("q4", "1", "1", "R");
    q4.agregarArco("q1", "A", "A", "L");

    q5.agregarArco("q5", "A", "1", "R");
    q5.agregarArco("q5", "=", "=", "R");
    q5.agregarArco("q5", "1", "1", "R");
    q5.agregarArco("q6", "#", "1", "L");

    q6.agregarArco("q6", "1", "1", "L");
    q6.agregarArco("q1", "=", "=", "L");

    q7.agregarArco("q7", "1", "#", "R");
    q7.agregarArco("q7", "/", "#", "R");
    q7.agregarArco("q7", "A", "#", "R");
    q7.agregarArco("q7", "B", "#", "R");
    q7.agregarArco("q8", "=", "#", "R");

    // Agregar nodos al autómata
    automataDivision.agregarNodo(q0);
    automataDivision.agregarNodo(q1);
    automataDivision.agregarNodo(q2);
    automataDivision.agregarNodo(q3);
    automataDivision.agregarNodo(q4);
    automataDivision.agregarNodo(q5);
    automataDivision.agregarNodo(q6);
    automataDivision.agregarNodo(q7);
    automataDivision.agregarNodo(q8);

    // Mostrar el autómata
    console.log(automataDivision.toString());
    console.log(automataDivision);
}

// Llamar a la función para crear y mostrar el autómata
crearAutomataDivision();