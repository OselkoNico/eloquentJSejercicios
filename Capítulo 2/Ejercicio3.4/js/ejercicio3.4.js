let size=6;
let board="";
for(let x=0;x<size;x++){
    for(let y=0;y<size;y++){
        if((x===0)||(x===size-1)||(y===0)||(y===size-1))
            board+="X";
    else if((x===1)||(x===size-2)||(y===1)||(y===size-2))
        board+="O";
else if((x+y)%2==0){
board+=" ";
} else{
    board+="#";
} 
}
board+="\n";
}
console.log(board);