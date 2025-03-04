
const estanque = ["rana", "_", "_", "_", "_", "_", "_",]
function saltar() {
    const destino = localizar(estanque, "rana") + 1;
    estanque[destino] = "rana"
    estanque[destino - 1] = "_"
}
console.log(estanque)
saltar()
console.log(estanque)
saltar()
console.log(estanque)
saltar()
console.log(estanque)
saltar()
console.log(estanque)
saltar()
console.log(estanque)

const testLocalizar = [0, 0, 1, 0, 0]
const testLocalizar2 = [0, 0, 0, 0, 0, 6]
const testLocalizar3 = [3, 3, 3, 3, 3, 26]

function localizar(espacio, valor) {
    for (let i = 0; i < espacio.length; i++){
        if(espacio[i] === valor){
            return i;
        }
    }
}

console.log(localizar(testLocalizar, 1)) // 2
console.log(localizar(testLocalizar2, 6)) // 5
console.log(localizar(testLocalizar3, 26)) // 5
