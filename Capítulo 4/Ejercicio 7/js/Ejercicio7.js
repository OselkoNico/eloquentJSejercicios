function range(inicio, fin, paso) {
    let listaDeNumeros = [];
    let i=inicio;
    if (inicio<=fin){
        for (i;i<=fin;i++){
            listaDeNumeros.push(i);
        }
    } else {
        for (i;i>=fin;i--){
            listaDeNumeros.push(i);
        }
         i+=paso;
    }
    return listaDeNumeros;

} console.log(range(5,2,-1));

function sum(arrayDeNumeros){
    let sumaDeNumeros = 0;
    for (let i=0; i<arrayDeNumeros.length;i++){
        sumaDeNumeros+=arrayDeNumeros[i];
    }
        return sumaDeNumeros;
    }
console.log(sum(range(1,10)));