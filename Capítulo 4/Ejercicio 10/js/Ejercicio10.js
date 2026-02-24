function deepEqual(a,b){
    if(a === b) return true;
    if (typeof a === "object" && typeof b === "object"){
    let keys1=Object.keys(a);
    let keys2=Object.keys(b);
    if (a===null || b===null) return false;
    if(keys1.length !== keys2.length) return false;
    for (let key of keys1){
        if (!deepEqual(a[key], b[key])) return false;
    } return true;
} return false;
}


let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true