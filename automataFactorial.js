/////////////////////////////////////////////////////////////////////////////////////
// Crear el autómata FACTORIAL
const automataFactorial = new Automata("Factorial");
const automataFactorial2 = new Automata("Factorial");

function crearautomataFactorial() {
    // Crear nodos (estados)
    let qz = new Nodo("qz", false); // Estado inicial
    let qa = new Nodo("qa", false); // Estado inicial
    let qb = new Nodo("qb", false);
    let qc = new Nodo("qc", false);
    let qd = new Nodo("qd", false);
    let qe = new Nodo("qe", false);
    let qf = new Nodo("qf", false);
    let qg = new Nodo("qg", false);
    let qh = new Nodo("qh", false);
    let qi = new Nodo("qi", false);
    
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
    let q14 = new Nodo("q14", false);
    let q15 = new Nodo("q15", false);
    let q16 = new Nodo("q16", false);
    let q17 = new Nodo("q17", false);
    let q18 = new Nodo("q18", false);
    let q19 = new Nodo("q19", false);
    let q20 = new Nodo("q20", true);

    // Agregar arcos
    qz.agregarArco("qa", "1", "1", "S");
    qz.agregarArco("q20", "#", "1", "S");

    qa.agregarArco("qb", "1", "A", "L");

    qb.agregarArco("qc", "#", "*", "L");

    qc.agregarArco("qd", "#", "1", "R");

    qd.agregarArco("qd", "A", "A", "R");
    qd.agregarArco("qd", "*", "*", "R");
    qd.agregarArco("qe", "1", "A", "L");
    qd.agregarArco("qg", "#", "=", "L");

    qe.agregarArco("qe", "A", "A", "L");
    qe.agregarArco("qe", "*", "*", "L");
    qe.agregarArco("qe", "1", "1", "L");
    qe.agregarArco("qf", "#", "1", "R");

    qf.agregarArco("qf", "1", "1", "R");
    qf.agregarArco("qd", "*", "*", "R");

    qg.agregarArco("qg", "A", "1", "L");
    qg.agregarArco("qg", "1", "1", "L");
    qg.agregarArco("qg", "*", "*", "L");
    qg.agregarArco("qh", "#", "#", "R");

    qh.agregarArco("qi", "1", "#", "R");

    qi.agregarArco("qi", "1", "1", "R");
    qi.agregarArco("qi", "*", "*", "R");
    qi.agregarArco("q3", "=", "=", "L");

    q3.agregarArco("q4", "1", "A", "L");
    q3.agregarArco("q9", "*", "*", "L");

    q4.agregarArco("q4", "1", "1", "L");
    q4.agregarArco("q5", "*", "*", "L");

    q5.agregarArco("q5", "B", "B", "L");
    q5.agregarArco("q6", "1", "B", "R");
    q5.agregarArco("q8", "#", "#", "R");

    q6.agregarArco("q6", "B", "B", "R");
    q6.agregarArco("q6", "A", "A", "R");
    q6.agregarArco("q6", "*", "*", "R");
    q6.agregarArco("q6", "1", "1", "R");
    q6.agregarArco("q6", "=", "=", "R");
    q6.agregarArco("q7", "#", "1", "L");

    q7.agregarArco("q7", "1", "1", "L");
    q7.agregarArco("q7", "=", "=", "L");
    q7.agregarArco("q7", "A", "A", "L");
    q7.agregarArco("q5", "*", "*", "L");

    q8.agregarArco("q8", "B", "1", "R");
    q8.agregarArco("q8", "*", "*", "R");
    q8.agregarArco("q8", "1", "1", "R");
    q8.agregarArco("q3", "A", "A", "L");

    q9.agregarArco("q9", "1", "1", "L");
    q9.agregarArco("q10", "#", "#", "R");

    q10.agregarArco("q11", "1", "#", "R");
    
    q11.agregarArco("q11", "1", "1", "R");
    q11.agregarArco("q11", "A", "A", "L");
    q11.agregarArco("q12", "*", "*", "L");
    q11.agregarArco("q12", "B", "B", "L");

    q12.agregarArco("q12", "B", "B", "L");
    q12.agregarArco("q13", "1", "B", "R");
    q12.agregarArco("q15", "#", "#", "R");

    q13.agregarArco("q13", "B", "B", "R");
    q13.agregarArco("q13", "A", "A", "R");
    q13.agregarArco("q13", "*", "*", "R");
    q13.agregarArco("q14", "=", "=", "L");
    q13.agregarArco("q14", "1", "1", "L");

    q14.agregarArco("q14", "1", "1", "L");
    q14.agregarArco("q11", "A", "1", "L");
    q14.agregarArco("q11", "*", "1", "L");
    q14.agregarArco("q11", "B", "1", "L");

    q15.agregarArco("q15", "B", "#", "R");
    q15.agregarArco("q15", "1", "1", "R");
    q15.agregarArco("q15", "A", "#", "R");
    q15.agregarArco("q15", "*", "#", "R");
    q15.agregarArco("q16", "=", "*", "L");

    q16.agregarArco("q17", "1", "1", "L")
    q16.agregarArco("q19", "#", "#", "R")

    q17.agregarArco("q18", "1", "1", "R")
    q17.agregarArco("q19", "#", "#", "R")

    q18.agregarArco("q18", "1", "1", "R")
    q18.agregarArco("q18", "*", "*", "R")
    q18.agregarArco("q3", "#", "=", "L")

    q19.agregarArco("q19", "1", "#", "R")
    q19.agregarArco("q20", "*", "#", "R")


    // Agregar nodos al autómata
    automataFactorial.agregarNodo(qz);
    automataFactorial.agregarNodo(qa);
    automataFactorial.agregarNodo(qb);
    automataFactorial.agregarNodo(qc);
    automataFactorial.agregarNodo(qd);
    automataFactorial.agregarNodo(qe);
    automataFactorial.agregarNodo(qf);
    automataFactorial.agregarNodo(qg);
    automataFactorial.agregarNodo(qh);
    automataFactorial.agregarNodo(qi);
    
    automataFactorial.agregarNodo(q3);
    automataFactorial.agregarNodo(q4);
    automataFactorial.agregarNodo(q5);
    automataFactorial.agregarNodo(q6);
    automataFactorial.agregarNodo(q7);
    automataFactorial.agregarNodo(q8);
    automataFactorial.agregarNodo(q9);
    automataFactorial.agregarNodo(q10);
    automataFactorial.agregarNodo(q11);
    automataFactorial.agregarNodo(q12);
    automataFactorial.agregarNodo(q13);
    automataFactorial.agregarNodo(q14);
    automataFactorial.agregarNodo(q15);
    automataFactorial.agregarNodo(q16);
    automataFactorial.agregarNodo(q17);
    automataFactorial.agregarNodo(q18);
    automataFactorial.agregarNodo(q19);
    automataFactorial.agregarNodo(q20);
}
function crearautomataFactorial2() {
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
    automataFactorial2.agregarNodo(qa);
    automataFactorial2.agregarNodo(q0);
    automataFactorial2.agregarNodo(q1);
    automataFactorial2.agregarNodo(q2);
    automataFactorial2.agregarNodo(q3);
    automataFactorial2.agregarNodo(q4);
    automataFactorial2.agregarNodo(q5);
    automataFactorial2.agregarNodo(q6);
    automataFactorial2.agregarNodo(q7);
    automataFactorial2.agregarNodo(q8);
    automataFactorial2.agregarNodo(q9);
}

// Llamar a la función para crear el autómata
crearautomataFactorial();

// Mostrar el autómata
console.log(automataFactorial.toString());
console.log(automataFactorial);