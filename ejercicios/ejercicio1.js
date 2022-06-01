//ingresar un numero y evaluar si es divisible para 2
var limite;
process.stdout.write("Ingresa un: ");//muestro en consola un mensaje

process.stdin.on('data', function (limite) {//ingreso datos por consola
    limite = Number(limite.toString());//transformo el dato ingresado por consola en numero
    if(limite % 2 == 0){
        console.log(limite, "es divisible para 2");
    }else{
        console.log(limite, "no es divisible para 2");
    }
});