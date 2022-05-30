var limite;
process.stdout.write("Ingresa el limete de numeros de la loteria: ");//muestro en consola un mensaje

process.stdin.on('data', function (limite) {//ingreso datos por consola
    limite = Number(limite.toString());//transformo el dato ingresado por consola en numero
    var loteria = ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'];

    let i = 9; //numero de posiciones del array principal
    //setInterval ciclo repetitivo cada cierto tiempo
    var lf = setInterval(() => {//uso setInterval como un for
        let numero = Math.floor(Math.random() * limite);//genero numeros random entre 1 y 0, los multiplico por la variable limite y ejecuto Math.floor
        if (loteria.includes(numero)) {//busco si el numero generado se repite con la funcion includes
            i++;//incremento cada ciclo
        } else {
            loteria[i] = numero;//si el numero no se repite, se guarda en loteria
        }
        i--;
        console.clear();//borro la consola
        console.log(loteria)//imprimo loteria con el nuevo valor
        if (!loteria.includes('x')) {//evaluo hasta que ya no queden X en el array, para detener el ciclo
            clearInterval(lf);//detengo el ciclo
            process.exit();//detengo el proceso de ingreso de datos
        }
    }, 500);//la cantidad de milisegundos en los que se repetira el proceso.

});

