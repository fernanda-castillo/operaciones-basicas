function medirLetras(cadena, longitud){
    if(cadena.length < longitud){
        return true;
    } else{
        return false;
    }
}
console.log(medirLetras("hola armando", 30))
console.log(medirLetras("pezcado", 5))