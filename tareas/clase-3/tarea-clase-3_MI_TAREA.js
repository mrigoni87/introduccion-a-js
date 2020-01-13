// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

/* 
const miNombre = 'maxi';
const nombrePariente = 'luis';
let nombreUser;

nombreUser = prompt('ingrese su nombre: ').toLowerCase();
if(miNombre === nombreUser){
    console.log(`Hola, Tocayo! Yo tambien me llamo ${nombreUser}`);
}else if(nombrePariente === nombreUser){
    console.log(`Hola ${nombreUser} Te llamas igual a mi viejo`);
}else{
    console.log(`hola ${nombreUser}`)
}*/
/* 
const miEdad = 32;
let edadUser;

edadUser = Number(prompt('Ingrese su edad: '));
if(miEdad === edadUser){
    console.log(`Vaya! tenemos la misma edad ${edadUser} años`);
}else if(miEdad<edadUser){
        console.log('tu eres mayor');
}else if(miEdad>edadUser){
    console.log('eres menor que yo');
}else{
    console.log(`no entiendo tu edad ${edadUser} ?`);
}*/

let tieneDni;
let edadUser;
const dniParaEntrar = 'si';
const edadParaEntrar = 18;

tieneDni = prompt('Buenas noches, tiene DNI?').toLowerCase();

if(tieneDni === dniParaEntrar){
    edadUser = Number(prompt('Ingrese su edad: '));
    if(edadUser >= edadParaEntrar){
        console.log('Bienvenido al Bar!');
    }else if(edadUser < edadParaEntrar){
        console.log(`Disculpe, la edad minima para entrar al Bar son ${edadParaEntrar} años`);
    }else{
            console.log(`Disculpe no entiendo su respuesta, ${edadUser}`);
    }
}else if(tieneDni === !dniParaEntrar){
    console.log('Disculpe sin DNI no ingresa!');
}