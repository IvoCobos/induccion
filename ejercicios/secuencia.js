// function generateSecuencia(number) {
//     var secuencia = [];
//     for (let i = 0; i >= 0; i += 2) {
//         var canBreak = false;
//         for (let j = 1; j <= 4; j++) {
//             secuencia.push(i + j);
//             if (secuencia.length - 1 === number) {
//                 canBreak = true;
//                 break
//             }
//         }
//         if (canBreak === true) {
//             break
//         }
//     }
//     console.log(secuencia);
// }
// generateSecuencia(87123641123172368);

// function secuenci(num) {
//     return Math.round(num / 2) + 1;
// }
// console.log(secuenci(76));

function generate(n) {
    if (n % 4 == 0) {
        var n1 = (n + 2) / 2;
        console.log(n1)
    }
    if (n % 4 == 1) {
        var n2 = (n + 3) / 2;
        console.log(n2);
    }
    if (n % 4 == 2) {
        var n3 = (n + 4) / 2;
        console.log(n3);
    }
    if (n % 4 == 3) {
        var n4 = (n + 5) / 2;
        console.log(n4);
    }
}

generate(81239812739128371)
//43561820561586185
//40619906369564188