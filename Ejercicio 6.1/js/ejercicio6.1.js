function contarAs(manzanas, ch){
    contador = 0;
    for(a=0;a<manzanas.length;a++){
        if(manzanas[a]===ch)
            contador++
    }
    return contador;
}
console.log(contarAs("mannnaaaa","n"));