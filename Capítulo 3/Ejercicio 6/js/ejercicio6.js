function contarCaracter(count, letra){
    let contador = 0;
    for (let a=0;a<count.length; a++){
        if(count[a] === letra){
            contador++;
        }
    }
    return contador;
}

console.log(contarCaracter("kkaKdfkk","k"));