function oddCount(numero){
    let conteo = 0
    for(let i = numero - 1; i >= 0; i--){
        if (i % 2 !== 0){
            conteo += 1;
        }
    }
    return conteo;
}

console.log(oddCount(15))