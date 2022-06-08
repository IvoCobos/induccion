function generateSecuencia(number){
    var secuencia = [];
    for (let index = 0; index >= 0 ; index +=2 ) {
        var canBreak = false;
        for (let index1 = 1; index1 <= 4; index1++) {
            secuencia = (index + index1);
            console.log(secuencia);
        }
        if(canBreak === true){
            break
        }
    }
}