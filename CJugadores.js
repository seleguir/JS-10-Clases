class CJugadores{
    constructor (nombre, posicion, edad, estatura, peso, nacionalidad){
        this.nombre = nombre; 
        this.posicion = posicion; 
        this.edad = edad; 
        this.estatura = estatura; 
        this.peso = peso; 
        this.nacionalidad = nacionalidad; 
    }
}
    const jugadores = [ 
    new CJugadores ("Fábio(1)", "G", "43", "1.88 m", "86", "Brasil"), // Los números entre ( ) representan los números de camisetas
    new CJugadores ("Marlon(4)", "D", "28", "1.83 m", "78", "Brasil"),
    new CJugadores ("Marcelo(12)", "D", "35", "1.73 m", "72", "Brasil"),
    new CJugadores ("Nino(33)", "D", "26", "1.88 m", "82", "Brasil"),
    new CJugadores ("John Kennedy(9)", "A", "21", "1.73 m", "71kg", "Brasil"), 
    new CJugadores ("Keno(11)", "A", "34", "1.78 m", "72", "Brasil"), 
    new CJugadores ("Germán Cano(14)", "A", "35", "1.78 m", "81", "Argentina"),
]; 

    // Listar todos los jugadores que sean de nacionalidad argentina
    document.write("<p>Jugadores con nacionalidad argentina: </p>");
    document.write("<ul>");
    for(let i = 0 ; i < jugadores.length ; i++){
        if(jugadores[i].nacionalidad == "Argentina"){
            document.write("<li>");
            document.write("<strong>Nombre: </strong>" + jugadores[i].nombre + "." + "<br>");
            document.write("<strong>Nacionalidad: </strong>" + jugadores[i].nacionalidad + "."  + "<br>");
            document.write("</li>");
        }
    }
    document.write("</ul>");

    // Listar todos los jugadores que pesan entre 75 y 80 kg
    document.write("<p>Jugadores que pesan entre 75 y 80 kg: </p>");
    document.write ("<ul>");
    for (let i = 0 ; i < jugadores.length ; i++){
        if(jugadores[i].peso >= 75 && jugadores[i].peso <= 80){
            document.write("<li>");
            document.write("<strong>Nombre: </strong>" + jugadores[i].nombre + "."  + "<br>");
            document.write("<strong>Peso: </strong>" + jugadores[i].peso + " kg" + "." + "<br>");
            document.write("</li>");
        }
    }
    document.write("</ul>");

    // Mostrar los jugadores más altos
    document.write("<p>Jugadores más altos: </p>");
    let jugadoresMasAltos = []; 
    let estaturaMaxima = jugadores[0].estatura; // se inicializa "estaturaMaxima" con la estatura del primer jugador
    for (let i = 0; i < jugadores.length; i++) {
        if (jugadores[i].estatura > estaturaMaxima) {
            estaturaMaxima = jugadores[i].estatura;
            jugadoresMasAltos= [jugadores[i]];  // reinicia la lista con el nuevo jugador más alto
        } else if (jugadores[i].estatura == estaturaMaxima) {
            jugadoresMasAltos.push(jugadores[i]); 
        }
    }
    document.write("<ul>");
    for (let i = 0; i < jugadoresMasAltos.length; i++) {
        document.write("<li>" + jugadoresMasAltos[i].nombre + "." + "</li>");
    }
    document.write("</ul>");
