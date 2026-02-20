var salida= "";

const listaApellidosMexicanos = [
    "Hernández", "García", "Martínez", "López", "González",
    "Pérez", "Rodríguez", "Sánchez", "Ramírez", "Cruz",
    "Flores", "Gómez", "Morales", "Vázquez", "Jiménez",
    "Reyes", "Díaz", "Torres", "Gutiérrez", "Ruiz",
    "Mendoza", "Aguilar", "Ortiz", "Moreno", "Castillo",
    "Romero", "Álvarez", "Méndez", "Chávez", "Rivera",
    "Juárez", "Domínguez", "Herrera", "Medina", "Ramos",
    "Castro", "Ortega", "Vargas", "Santiago", "Salazar",
    "Rojas", "De la Cruz", "Guzmán", "Franco", "Silva",
    "Luna", "Muñoz", "Cabrera", "Delgado", "Contreras",
    "León", "Ríos", "Estrada", "Bautista", "Meza",
    "Gallegos", "Miranda", "Carrillo", "Valencia", "Nava",
    "Lara", "Pacheco", "Soto", "Cervantes", "Robledo",
    "Esquivel", "Salinas", "Maldonado", "Marín", "Calderón",
    "Lugo", "Rosas", "Padilla", "Fuentes", "Espinoza",
    "Rangel", "Acosta", "Sandoval", "Villegas", "Valdés",
    "Alfaro", "Camacho", "Guerrero", "Lozano", "Guevara",
    "Galindo", "Beltrán", "Orozco", "Pineda", "Navarro",
    "Parra", "Villalobos", "Duarte", "Serrano", "Ávila",
    "Ibarra", "Téllez", "Rocha", "Trejo", "Esparza"
];
const listaApellidosRusos  = [
    "NULL", "Petrov", "Sidorov", "Smirnov", "Kuznetsov", "Popov", "Vasiliev", "Sokolov", "Mikhailov", "Novikov",
    "Fedorov", "Morozov", "Volkov", "Alekseev", "Lebedev", "Semenov", "Egorov", "Pavlov", "Kozlov", "Stepanov",
    "Nikolaev", "Orlov", "Andreev", "Makarov", "Zakharov", "Zaitsev", "Soloviev", "Belov", "Komarov", "Grigoriev",
    "Romanov", "Pakhomov", "Antonov", "Tarasov", "Medvedev", "Zhukov", "Frolov", "Baranov", "Kulikov", "Gavrilov",
    "Yakovlev", "Kalinin", "Chernov", "Bykov", "Korolev", "Ponomarev", "Gusev", "Danilov", "Zorin", "Belyaev",
    "Demidov", "Larionov", "Timofeev", "Savelyev", "Ignatov", "Kapustin", "Ryabov", "Dorofeev", "Melnikov", "Fomin",
    "Tikhonov", "Golubev", "Sergeev", "Mironov", "Lapshin", "Seleznev", "Prokhorov", "Ustinov", "Borodin", "Martynov",
    "Krylov", "Ovchinnikov", "Shestakov", "Losev", "Dyakov", "Pankratov", "Sapozhnikov", "Kiselev", "Rozhkov", "Kravtsov",
    "Shiryaev", "Klimov", "Fadeev", "Chistyakov", "Trofimov", "Eliseev", "Nazarov", "Goncharov", "Karpov", "Lytkin",
    "Bondarev", "Fedoseev", "Sukhanov", "Pisarev", "Lukyanov", "Ostrovsky", "Meshkov", "Shuvalov", "Plotnikov", "Gordeev"
];
const listaNombresMexicanos  = [
    "Juan", "José", "Luis", "Carlos", "Miguel", "Pedro", "Jorge", "Fernando", "Ricardo", "Alejandro",
    "Daniel", "David", "Eduardo", "Francisco", "Manuel", "Roberto", "Andrés", "Sergio", "Raúl", "Iván",
    "Héctor", "Arturo", "Alberto", "Mario", "Óscar", "Rubén", "Enrique", "Javier", "Adrián", "Esteban",
    "Diego", "Emilio", "Rodrigo", "Guillermo", "Salvador", "Hugo", "Alfonso", "Ramón", "Ignacio", "Tomás",
    "Benjamín", "Sebastián", "Pablo", "Leonardo", "Mauricio", "Ulises", "Federico", "Ernesto", "César", "Fabián",
    "Gael", "Damián", "Bruno", "Alan", "Axel", "Iker", "Kevin", "Jonathan", "Brian", "Edgar",
    "Ángel", "Jesús", "Cristian", "Marco", "Omar", "Ismael", "Abraham", "Samuel", "Josué", "Emanuel",
    "Noé", "Ezequiel", "Elías", "Matías", "Saúl", "Uriel", "Elian", "Lorenzo", "Nicolás", "Thiago",
    "Emiliano", "Santiago", "Máximo", "Camilo", "Gael", "Valentín", "Julián", "Cristóbal", "Iván", "Bautista",
    "Alexis", "Kevin", "Brayan", "Brandon", "Dylan", "Ian", "Álvaro", "Darío", "Rafael", "Teodoro"
];
const listaNombresFranceses  = [
    "Jean", "Pierre", "Paul", "Louis", "Jacques", "Michel", "Claude", "André", "Philippe", "Bernard",
    "François", "Julien", "Nicolas", "Thomas", "Antoine", "Sébastien", "Alexandre", "Mathieu", "Christophe", "Laurent",
    "Olivier", "Damien", "Romain", "Victor", "Hugo", "Lucas", "Maxime", "Baptiste", "Éric", "Loïc",
    "Théo", "Clément", "Florian", "Adrien", "Guillaume", "Benjamin", "Jérôme", "Rémi", "Yann", "Cédric",
    "Sophie", "Marie", "Camille", "Julie", "Claire", "Élise", "Chloé", "Manon", "Lucie", "Pauline",
    "Laura", "Émilie", "Caroline", "Sandrine", "Valérie", "Nathalie", "Isabelle", "Catherine", "Brigitte", "Monique",
    "Amandine", "Aurélie", "Justine", "Mélanie", "Anaïs", "Océane", "Margaux", "Noémie", "Léa", "Inès",
    "Zoé", "Agathe", "Maëlle", "Élodie", "Clara", "Romane", "Salomé", "Maëva", "Tiphaine", "Constance",
    "Gabriel", "Arthur", "Raphaël", "Nathan", "Enzo", "Kylian", "Noah", "Adam", "Samuel", "Eliott",
    "Lina", "Nina", "Aya", "Yasmine", "Imane", "Farah", "Sarah", "Nour", "Mariam", "Leïla"
];
function generar() {
     const tipoFormato = document.getElementById("opcion").value;

    switch (tipoFormato) {
        case "1": generarSQL(); break;
        case "2": generarSQL(); break;
        case "3": generarCSV(); break;
        case "4": generarJSON(); break;
    }


}

function generarSQL() {
    contenidoGenerado = "INSERT INTO alumnos VALUES ";
    
    const matriculaBase = 224250000;
    const cantidadRegistros = parseInt(document.getElementById("registros").value);

    for (let i = 0; i < cantidadRegistros; i++) {

        const apellidoMexicano = listaApellidosMexicanos[Math.floor(Math.random() * listaApellidosMexicanos.length)];
        const apellidoRuso = listaApellidosRusos[Math.floor(Math.random() * listaApellidosRusos.length)];

        const incluirSegundoNombre = Math.random() < 0.5;

        const segundoApellidoSQL = apellidoRuso === "NULL"
            ? "NULL"
            : `UPPER('${apellidoRuso}')`;

        let nombreCompleto = listaNombresMexicanos[Math.floor(Math.random() * listaNombresMexicanos.length)];

        if (incluirSegundoNombre) {
            const nombreFrances = listaNombresFranceses[Math.floor(Math.random() * listaNombresFranceses.length)];
            nombreCompleto += ` ${nombreFrances}`;
        }

        contenidoGenerado += `(${matriculaBase + i},UPPER('${apellidoMexicano}'), ${segundoApellidoSQL}, '${nombreCompleto}','a${matriculaBase + i}@unison.mx'),
`;
    }
    contenidoGenerado = contenidoGenerado.slice(0, -4) + ";";
    document.getElementById("salida").textContent = contenidoGenerado;
}

function generarCSV() {

    contenidoGenerado = "matricula,apellido1,apellido2,nombre,correo\n";

    const matriculaBase = 224250000;
    const cantidadRegistros = parseInt(document.getElementById("registros").value);

    for (let i = 0; i < cantidadRegistros; i++) {

        const apellidoMexicano = listaApellidosMexicanos[Math.floor(Math.random() * listaApellidosMexicanos.length)];
        const apellidoRuso = listaApellidosRusos[Math.floor(Math.random() * listaApellidosRusos.length)];

        const incluirSegundoNombre = Math.random() < 0.5;

        let nombreCompleto = listaNombresMexicanos[Math.floor(Math.random() * listaNombresMexicanos.length)];

        if (incluirSegundoNombre) {
            const nombreFrances = listaNombresFranceses[Math.floor(Math.random() * listaNombresFranceses.length)];
            nombreCompleto += ` ${nombreFrances}`;
        }

        contenidoGenerado += `${matriculaBase + i},${apellidoMexicano},${apellidoRuso},${nombreCompleto},a${matriculaBase + i}@unison.mx\n`;
    }

    document.getElementById("salida").textContent = contenidoGenerado;
}

function generarJSON() {

    const matriculaBase = 224250000;
    const cantidadRegistros = parseInt(document.getElementById("registros").value);

    const listaAlumnos = [];

    for (let i = 0; i < cantidadRegistros; i++) {

        const apellidoMexicano = listaApellidosMexicanos[Math.floor(Math.random() * listaApellidosMexicanos.length)];
        const apellidoRuso = listaApellidosRusos[Math.floor(Math.random() * listaApellidosRusos.length)];

        const incluirSegundoNombre = Math.random() < 0.5;

        let nombreCompleto = listaNombresMexicanos[Math.floor(Math.random() * listaNombresMexicanos.length)];

        if (incluirSegundoNombre) {
            const nombreFrances = listaNombresFranceses[Math.floor(Math.random() * listaNombresFranceses.length)];
            nombreCompleto += ` ${nombreFrances}`;
        }

        listaAlumnos.push({
            matricula: matriculaBase + i,
            apellido1: apellidoMexicano,
            apellido2: apellidoRuso,
            nombre: nombreCompleto,
            correo: `a${matriculaBase + i}@unison.mx`
        });
    }

    contenidoGenerado = JSON.stringify(listaAlumnos, null, 4);
    document.getElementById("salida").textContent = contenidoGenerado;
}

function guardarArchivo() {

    const tipoFormato = document.getElementById("opcion").value;

    const enlaceDescarga = document.createElement("a");

    enlaceDescarga.setAttribute(
        "href",
        "data:text/plain;charset=UTF-8," + encodeURIComponent(contenidoGenerado)
    );

    switch (tipoFormato) {
        case "1":
        case "2":
            enlaceDescarga.setAttribute("download", "sistema_escolar.sql");
            alert("Generando archivo SQL");
            break;

        case "3":
            enlaceDescarga.setAttribute("download", "sistema_escolar.csv");
            alert("Generando archivo CSV");
            break;

        case "4":
            enlaceDescarga.setAttribute("download", "sistema_escolar.json");
            alert("Generando archivo JSON");
            break;
    }

    enlaceDescarga.style.display = "none";
    document.body.appendChild(enlaceDescarga);
    enlaceDescarga.click();
    document.body.removeChild(enlaceDescarga);
}