//contar la cantidad de pasos que debo dar dentro de un array para moverme de un numero a otro
function camino(array, ini, end) {
    let left_right = [];
    let right_left =[];

    const start_index = array.findIndex((paso) => {
        if (paso == ini) {
            return true
        }
    })
    const end_index = array.findIndex((paso) => {
        if (paso == end) {
            return true
        }
    })

    for (let i = 0; i < array.length; i++) {
        if (i > start_index && i < end_index) {
            left_right.push(array[i])
        }if(end_index < i ){
            right_left.push(array[i])
        }if(start_index > i){
            right_left.push(array[i])
        }
    }
    console.log({left_right, right_left})
    if(left_right.length < right_left.length){
        return left_right
    } return right_left
    
}

module.exports = camino