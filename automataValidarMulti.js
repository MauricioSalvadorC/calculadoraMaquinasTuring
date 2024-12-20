/////////////////////////////////////////////////////////////////////////////////////
// Crear el autómata multiplicación infinita
const automataMultiNumPor0 = new Automata("Multiplicación Numero por 0");
const automataMulti0PorNum = new Automata("Multiplicación Numero por 0");

function crearAutomataMultiplicacion() {
    // Crear nodos (estados)
    let qi = new Nodo("qi", false); // Estado inicial
    let qi2 = new Nodo("qi2", false);
    let qi3 = new Nodo("qi3", false);
    let qi4 = new Nodo("qi4", true);
    let qi5 = new Nodo("qi5", false);
    let qi6 = new Nodo("qi6", true);

    // Agregar arcos
    qi.agregarArco("qi", "1", "1", "R");
    qi.agregarArco("qi2", "*", "*", "R");

    qi2.agregarArco("qi5", "1", "1", "L");
    qi2.agregarArco("qi3", "#", "#", "L");

    qi3.agregarArco("qi3", "*", "#", "L");
    qi3.agregarArco("qi3", "1", "#", "L");
    qi3.agregarArco("qi4", "#", "#", "R");

    qi5.agregarArco("qi5", "1", "1", "L");
    qi5.agregarArco("qi5", "*", "*", "L");
    qi5.agregarArco("qi6", "#", "#", "R");

    // Agregar nodos al autómata
    automataMultiNumPor0.agregarNodo(qi);
    automataMultiNumPor0.agregarNodo(qi2);
    automataMultiNumPor0.agregarNodo(qi3);
    automataMultiNumPor0.agregarNodo(qi4);
    automataMultiNumPor0.agregarNodo(qi5);
    automataMultiNumPor0.agregarNodo(qi6);

    // Mostrar el autómata
    console.log(automataMultiNumPor0.toString());
    console.log(automataMultiNumPor0);

    // Crear nodos (estados)
    let q0 = new Nodo("q0", false); // Estado inicial
    let q1 = new Nodo("q1", false);
    let q2 = new Nodo("q2", true);

    // Agregar arcos
    q0.agregarArco("q1", "*", "#", "S");

    q1.agregarArco("q1", "1", "#", "S");
    q1.agregarArco("q1", "*", "#", "S");
    q1.agregarArco("q2", "#", "#", "R");

    // Agregar nodos al autómata
    automataMulti0PorNum.agregarNodo(q0);
    automataMulti0PorNum.agregarNodo(q1);
    automataMulti0PorNum.agregarNodo(q2);

    // Mostrar el autómata
    console.log(automataMulti0PorNum.toString());
    console.log(automataMulti0PorNum);
}

crearAutomataMultiplicacion();