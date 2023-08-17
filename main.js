let nombreClub = prompt("Ingrese su club");
let opcion;
let accion = parseInt(prompt("Bienvenido Club " + nombreClub + ". Elija que desea hacer: \n\n1. Ver partidos de la fecha\n2. Programar Partido\n3. Ver tabla de posiciones\n4. Salir"));
let categorias
let equipoLocal
let equipoVisitante
let seleccionarHorario

function partidoProgramado () {
    alert("¡Gracias! " + nombreClub + "El partido de " + equipoLocal + " vs " + equipoVisitante + " quedó programado a las " + seleccionarHorario + ". Te esperamos la próxima fecha." )
};

function error (){
    alert (nombreClub + " debe seleccionar un número. Para volver a empezar presione F5")
}


if (isNaN(accion) || accion >= 5) {
    error();
} else {
    while (accion<5){
        switch (accion){
            case 1:
                accion = "VER PARTIDOS DE LA FECHA"
                categorias = parseInt(prompt("1. Zona Honor A\n2. Zona Honor B "));
                break;
            case 2:
                accion = "PROGRAMAR PARTIDO"
                equipoLocal = parseInt(prompt("Elija el EQUIPO LOCAL: \n\n1. 17 de Agosto \n2. Amigos de Villa Luro \n3. Banfield \n4. Boca Juniors \n5. El campito \n6. Estudiantil Porteño \n7. Ferro \n8. Glorias \n9. Independiente \n10. Kimberley \n11. Pinocho "));
                break;
            case 3:
                accion = "VER TABLAS DE POSICIONES"
                alert ("Las posiciones actuales de PRIMERA DIVISIÓN son las siguientes: \n\n1. 17 de Agosto (33 puntos) \n2. Amigos de Villa Luro (32 puntos) \n3. Banfield (31 puntos) \n4. Boca Juniors (31 puntos) \n5. El campito (30 puntos)\n6. Estudiantil Porteño (28 puntos) \n7. Ferro (25 puntos)\n8. Glorias (19 puntos) \n9. Independiente (15 puntos) \n10. Kimberley (10 puntos) \n11. Pinocho (3 puntos) ");
            case 4:
                accion = "SALIR"
                alert ("¡Gracias por su visita!");
        }
    }
}


if (isNaN(categorias) || accion >=3) {
    error();
} else {
    while (categorias<3){
        switch (categorias){
            case 1:
                categorias = "ZONA HONOR A "
                alert ("ESTOS SON LOS PARTIDOS DE LA FECHA DE LA ZONA HONOR A\n\n- Kimberley vs Banfield \n- 17 de agosto vs Pinocho\n- GLorias LIBRE \n- Estudiantil Porteño vs El Campito \n- Independiente vs Ferro \n- Amigos de Villa Luro vs Boca Juniors ");
                break;
            case 2:
                categorias = "ZONA HONOR B"
                alert("ESTOS SON LOS PARTIDOS DE LA FECHA DE LA ZONA HONOR B\n- Pacífico vs Platense \n- Nueva Estrrella vs Las Heras \n- Huracán vs Centro Español\n- Haedo futsal vs Argentinos Jrs.\n- Pedro Lozano vs Centro Artiguense");
                break;
            default:
                alert("Vuelva a intentarlo");
        }
    }
}

if (isNaN(equipoLocal) || equipoLocal >= 12) {
    error();
} else {
    while (equipoLocal<12){
        switch (equipoLocal){
            case 1:
                equipoLocal = "17 DE AGOSTO"
                equipoVisitante = parseInt(prompt("Elija el EQUIPO VISITANTE: \n\n1. 17 de Agosto \n2. Amigos de Villa Luro \n3. Banfield \n4. Boca Juniors \n5. El campito \n6. Estudiantil Porteño \n7. Ferro \n8. Glorias \n9. Independiente \n10. Kimberley \n11. Pinocho "));  
                break;
            case 2:
                equipoLocal = "AMIGOS DE VILLA LURO"
                equipoVisitante = parseInt(prompt("Elija el EQUIPO VISITANTE: \n\n1. 17 de Agosto \n2. Amigos de Villa Luro \n3. Banfield \n4. Boca Juniors \n5. El campito \n6. Estudiantil Porteño \n7. Ferro \n8. Glorias \n9. Independiente \n10. Kimberley \n11. Pinocho ")); 
                break;
            case 3:
                equipoLocal = "BANFIELD"
                equipoVisitante = parseInt(prompt("Elija el EQUIPO VISITANTE: \n\n1. 17 de Agosto \n2. Amigos de Villa Luro \n3. Banfield \n4. Boca Juniors \n5. El campito \n6. Estudiantil Porteño \n7. Ferro \n8. Glorias \n9. Independiente \n10. Kimberley \n11. Pinocho ")); 
                break;
            case 4:
                equipoLocal = "BOCA JUNIORS"
                equipoVisitante = parseInt(prompt("Elija el EQUIPO VISITANTE: \n\n1. 17 de Agosto \n2. Amigos de Villa Luro \n3. Banfield \n4. Boca Juniors \n5. El campito \n6. Estudiantil Porteño \n7. Ferro \n8. Glorias \n9. Independiente \n10. Kimberley \n11. Pinocho ")); 
                break;
            case 5:
                equipoLocal = "EL CAMPITO"
                equipoVisitante = parseInt(prompt("Elija el EQUIPO VISITANTE: \n\n1. 17 de Agosto \n2. Amigos de Villa Luro \n3. Banfield \n4. Boca Juniors \n5. El campito \n6. Estudiantil Porteño \n7. Ferro \n8. Glorias \n9. Independiente \n10. Kimberley \n11. Pinocho ")); 
                break;
            case 6:
                equipoLocal = "ESTUDIANTIL PORTEÑO"
                equipoVisitante = parseInt(prompt("Elija el EQUIPO VISITANTE: \n\n1. 17 de Agosto \n2. Amigos de Villa Luro \n3. Banfield \n4. Boca Juniors \n5. El campito \n6. Estudiantil Porteño \n7. Ferro \n8. Glorias \n9. Independiente \n10. Kimberley \n11. Pinocho ")); 
                break;
            case 7:
                equipoLocal = "FERRO"
                equipoVisitante = parseInt(prompt("Elija el EQUIPO VISITANTE: \n\n1. 17 de Agosto \n2. Amigos de Villa Luro \n3. Banfield \n4. Boca Juniors \n5. El campito \n6. Estudiantil Porteño \n7. Ferro \n8. Glorias \n9. Independiente \n10. Kimberley \n11. Pinocho ")); 
                break;
            case 8:
                equipoLocal = "GLORIAS"
                equipoVisitante = parseInt(prompt("Elija el EQUIPO VISITANTE: \n\n1. 17 de Agosto \n2. Amigos de Villa Luro \n3. Banfield \n4. Boca Juniors \n5. El campito \n6. Estudiantil Porteño \n7. Ferro \n8. Glorias \n9. Independiente \n10. Kimberley \n11. Pinocho ")); 
                break;
            case 9:
                equipoLocal = "INDEPENDIENTE"
                equipoVisitante = parseInt(prompt("Elija el EQUIPO VISITANTE: \n\n1. 17 de Agosto \n2. Amigos de Villa Luro \n3. Banfield \n4. Boca Juniors \n5. El campito \n6. Estudiantil Porteño \n7. Ferro \n8. Glorias \n9. Independiente \n10. Kimberley \n11. Pinocho ")); 
                break;
            case 10:
                equipoLocal = "KIMBERLEY"
                equipoVisitante = parseInt(prompt("Elija el EQUIPO VISITANTE: \n\n1. 17 de Agosto \n2. Amigos de Villa Luro \n3. Banfield \n4. Boca Juniors \n5. El campito \n6. Estudiantil Porteño \n7. Ferro \n8. Glorias \n9. Independiente \n10. Kimberley \n11. Pinocho ")); 
                break;
            case 11:
                equipoLocal = "PINOCHO"
                equipoVisitante = parseInt(prompt("Elija el EQUIPO VISITANTE: \n\n1. 17 de Agosto \n2. Amigos de Villa Luro \n3. Banfield \n4. Boca Juniors \n5. El campito \n6. Estudiantil Porteño \n7. Ferro \n8. Glorias \n9. Independiente \n10. Kimberley \n11. Pinocho ")); 
                break;
            default:
                alert("Lo siento. Debes ingresar una opción correcta.");
                break;
            }
        }
}
if (isNaN(equipoVisitante) || equipoVisitante >= 12) {
    error();
} else {
    while (equipoVisitante<12){
        switch (equipoVisitante){
            case 1:
                equipoVisitante = "17 DE AGOSTO"
                seleccionarHorario = parseInt(prompt("Elija el horario de comienzo de jornada: \n\n1. 8:00am \n2. 8:30am \n3. 9:00am \n4. 9:30am \n5. 10:00am \n6. 10:30am \n7. 11:00am \n8. 11:30am \n9. 12:00pm"));
                break;
            case 2:
                equipoVisitante = "AMIGOS DE VILLA LURO"
                seleccionarHorario = parseInt(prompt("Elija el horario de comienzo de jornada: \n\n1. 8:00am \n2. 8:30am \n3. 9:00am \n4. 9:30am \n5. 10:00am \n6. 10:30am \n7. 11:00am \n8. 11:30am \n9. 12:00pm"));
                break;
            case 3:
                equipoVisitante = "BANFIELD"
                seleccionarHorario = parseInt(prompt("Elija el horario de comienzo de jornada: \n\n1. 8:00am \n2. 8:30am \n3. 9:00am \n4. 9:30am \n5. 10:00am \n6. 10:30am \n7. 11:00am \n8. 11:30am \n9. 12:00pm"));
                break;
            case 4:
                equipoVisitante = "BOCA JUNIORS"
                seleccionarHorario = parseInt(prompt("Elija el horario de comienzo de jornada: \n\n1. 8:00am \n2. 8:30am \n3. 9:00am \n4. 9:30am \n5. 10:00am \n6. 10:30am \n7. 11:00am \n8. 11:30am \n9. 12:00pm"));
                break;
            case 5:
                equipoVisitante = "EL CAMPITO"
                seleccionarHorario = parseInt(prompt("Elija el horario de comienzo de jornada: \n\n1. 8:00am \n2. 8:30am \n3. 9:00am \n4. 9:30am \n5. 10:00am \n6. 10:30am \n7. 11:00am \n8. 11:30am \n9. 12:00pm"));
                break;
            case 6:
                equipoVisitante = "ESTUDIANTIL PORTEÑO"
                seleccionarHorario = parseInt(prompt("Elija el horario de comienzo de jornada: \n\n1. 8:00am \n2. 8:30am \n3. 9:00am \n4. 9:30am \n5. 10:00am \n6. 10:30am \n7. 11:00am \n8. 11:30am \n9. 12:00pm"));
                break;
            case 7:
                equipoVisitante = "FERRO"
                seleccionarHorario = parseInt(prompt("Elija el horario de comienzo de jornada: \n\n1. 8:00am \n2. 8:30am \n3. 9:00am \n4. 9:30am \n5. 10:00am \n6. 10:30am \n7. 11:00am \n8. 11:30am \n9. 12:00pm"));
                break;
            case 8:
                equipoVisitante = "GLORIAS"
                seleccionarHorario = parseInt(prompt("Elija el horario de comienzo de jornada: \n\n1. 8:00am \n2. 8:30am \n3. 9:00am \n4. 9:30am \n5. 10:00am \n6. 10:30am \n7. 11:00am \n8. 11:30am \n9. 12:00pm"));
                break;
            case 9:
                equipoVisitante = "INDEPENDIENTE"
                seleccionarHorario = parseInt(prompt("Elija el horario de comienzo de jornada: \n\n1. 8:00am \n2. 8:30am \n3. 9:00am \n4. 9:30am \n5. 10:00am \n6. 10:30am \n7. 11:00am \n8. 11:30am \n9. 12:00pm"));
                break;
            case 10:
                equipoVisitante = "KIMBERLEY"
                seleccionarHorario = parseInt(prompt("Elija el horario de comienzo de jornada: \n\n1. 8:00am \n2. 8:30am \n3. 9:00am \n4. 9:30am \n5. 10:00am \n6. 10:30am \n7. 11:00am \n8. 11:30am \n9. 12:00pm"));
                break;
            case 11:
                equipoVisitante = "PINOCHO"
                seleccionarHorario = parseInt(prompt("Elija el horario de comienzo de jornada: \n\n1. 8:00am \n2. 8:30am \n3. 9:00am \n4. 9:30am \n5. 10:00am \n6. 10:30am \n7. 11:00am \n8. 11:30am \n9. 12:00pm"));
                break;
            default:
                alert("Lo siento. Debes ingresar una opción correcta.");
                break;
            }
        }
    }
if (isNaN(seleccionarHorario) || seleccionarHorario >=10) {
    error();
} else {
    while (seleccionarHorario<= 9){
        switch (seleccionarHorario){
            case 1:
                seleccionarHorario = "8:00am"
                break;
            case 2:
                seleccionarHorario = "8:30am"
                break;
            case 3:
                seleccionarHorario = "9:00am"
                break;
            case 4:
                seleccionarHorario = "9:30am"
                break;
            case 5:
                seleccionarHorario = "10:00am"
                break;
            case 6:
                seleccionarHorario = "10:30am"
                break;
            case 7:
                seleccionarHorario = "11:00am"
                break;
            case 8:
                seleccionarHorario = "11:30am"
                break;
            case 9:
                seleccionarHorario = "12:00pm"
                break;
            default:
                alert("Lo siento. Debes ingresar una opción correcta.");
                break;
        }

partidoProgramado ()}};

