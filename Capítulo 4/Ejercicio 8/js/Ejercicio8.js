let myArray = ["A", "B", "C"];
function reverseArray(array){
    let resultado=[];
      for(i=array.length-1;i>=0;i--){
        resultado.push(array[i])
      }
      return resultado;
      }

console.log(reverseArray(myArray));
// -->["C","B","A"]
console.log(myArray);
// -->["A", "B", "C"]

let arrayValue=[1,2,3,4,5];
function reverseArrayInPlace(array){
    
    for(let i=0;i<Math.floor(array.length/2);i++){
        let j=array.length-1-i;
        let temp=array[i];
        array[i]=array[j];
        array[j]=temp;
    }
}

reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// --> [5,4,3,2,1]