var limite;
process.stdout.write("Ingrese una frase: ");//muestro en consola un mensaje

process.stdin.on('data', function (limite) {//ingreso datos por consola
    limite = limite.toString();//transformo el dato ingresado por consola en numero
    console.log(limite);
});