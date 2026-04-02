let size = 6;
let board ="";
for (let x=0; x<size; x++){
    for(let y=0; y<size; y++){
           if (((x=== 0)||(x === size-1))||((y===0)||(y === size-1))) 
            board+="X";
            else {
            board+=".";
           }
        }
    board+="\n";
}
console.log(board);

/* Podría haber sido así, para hacerlo más compacto y las legible:

function esBorde(x, y, size) {
  return x === 0 || x === size-1 || y === 0 || y === size-1;
}
  board += esBorde(x, y, size) ? "X" : ".";
*/