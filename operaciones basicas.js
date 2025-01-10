function suma(a,b){
    return a + b;
}
console.log(suma(4, 10));
function resta(c,d){
    return c - d;
}
console.log(resta(4, 10));
function multiplicacion(e,f){
    return e * f;
}
console.log(multiplicacion(4, 10));
function division(g,h){
    return g / h;
}
console.log(division(5, 10));
 let miCadena = "hola mundo"; 
 let x = 42;
 let carro = {
    nombre: "bochito",
    uso: 5,
    esMio: true,
 };
 let listaDeNumeros = [1, 2, 3, 4, 5]
 let esCasado = true;
 for (let i = 0; i< 5; i++) {
    console.log(i);
 }
 function imprimirLetras(cadena) {
    for (let i = 0; i < cadena.length; i++){
        console.log(cadena[i]);
    }
 }
// imprimirLetras("hola");
 function imprimirLista(arreglo){
    for (let i = 0; i < arreglo.length; i++){
        console.log(arreglo[i]);
    }
 }
 // mprimirLista(["uva", "manzana", "platano"]);
 imprimirLista('una cadena')
 imprimirLetras(["uva", "manzana", "platano"])
 function comparacion(a, b){
    if (a > b){
        return a;
    } else {
        return b;
    }

 }
 console.log(comparacion(40, 80))
 function verificarPar(numero){
    if (numero % 2 === 0){
        console.log(numero + " es par");
    } else {
        console.log(numero + " es impar")
    }
 }
 verificarPar(5);
 verificarPar(8);