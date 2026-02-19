for (let a=1;a<=100;a++){
    let palabra="";
    if (a %3==0 && a %5==0) palabra="fizzbuzz";
 else if(a %3==0) {
        palabra="fizz";
    }
else if (a %5==0) {palabra="buzz";
}
console.log(palabra || a);
}