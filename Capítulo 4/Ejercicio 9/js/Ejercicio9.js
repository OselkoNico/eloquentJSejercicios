function arrayToList(array){
    let list=null;
    for (i=array.length-1;i>=0;i--){
       list={value: array[i], rest: list}}
       return list; 
    }

function listToArray(list){
    let resultado=[];
    while(list !== null){
        resultado.push(list.value);
        list=list.rest;
    }
    return resultado;
}
function prepend(value,rest){
    return {value: value, rest: rest};
}

function nth(list,n){
    if (list === null)
        return undefined;
    if (n===0)
        return list.value;
        return nth(list.rest, n-1);

}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20