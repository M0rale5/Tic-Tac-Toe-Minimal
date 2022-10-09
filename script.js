let area = document.querySelector(".area");
let turn = 0;
let gameFinished = false;


area.addEventListener('click',(event) =>{
    let cells = document.querySelectorAll(".Cells");
    //console.log(event);
    if(event.target.className == 'Cells'){
        if(turn % 2 ==0 && event.target.textContent !="O"){
            event.target.textContent = "X";
            console.log(turn);
            
        }
        else if(turn % 2 !== 0 && event.target.textContent !="X"){
            event.target.textContent = "O";
            console.log(turn);
            
        }
        else{
            return ;
        }
    turn++
    }

    //Player X winning combination

    if(cells[0].textContent == "X" && cells[1].textContent == "X" && cells[2].textContent == "X"){
        alert("Player X is winer!!!");
        gameFinished = true;

    }
    if(cells[3].textContent == "X" && cells[4].textContent == "X" && cells[5].textContent == "X"){
        alert("Player X is winer!!!");
        gameFinished = true;

    }
    if(cells[6].textContent == "X" && cells[7].textContent == "X" && cells[8].textContent == "X"){
        alert("Player X is winer!!!");
        gameFinished = true;

    }
    if(cells[0].textContent == "X" && cells[4].textContent == "X" && cells[8].textContent == "X"){
        alert("Player X is winer!!!");
        gameFinished = true;

    }
    if(cells[2].textContent == "X" && cells[4].textContent == "X" && cells[6].textContent == "X"){
        alert("Player X is winer!!!");
        gameFinished = true;

        
    }
    if(cells[0].textContent == "X" && cells[3].textContent == "X" && cells[6].textContent == "X"){
        alert("Player X is winer!!!");
        gameFinished = true;

    }
    if(cells[1].textContent == "X" && cells[4].textContent == "X" && cells[7].textContent == "X"){
        alert("Player X is winer!!!");
        gameFinished = true;

    }
    if(cells[2].textContent == "X" && cells[5].textContent == "X" && cells[8].textContent == "X"){
        alert("Player X is winer!!!");
        gameFinished = true;

    }


    //Player O winning combination



    if(cells[0].textContent == "O" && cells[1].textContent == "O" && cells[2].textContent == "O"){
        alert("Player O is winer!!!");
        gameFinished = true;

    }
    if(cells[3].textContent == "O" && cells[4].textContent == "O" && cells[5].textContent == "O"){
        alert("Player O is winer!!!");
        gameFinished = true;

    }
    if(cells[6].textContent == "O" && cells[7].textContent == "O" && cells[8].textContent == "O"){
        alert("Player O is winer!!!");
        gameFinished = true;

    }
    if(cells[0].textContent == "O" && cells[4].textContent == "O" && cells[8].textContent == "O"){
        alert("Player O is winer!!!");
        gameFinished = true;

    }
    if(cells[2].textContent == "O" && cells[4].textContent == "O" && cells[6].textContent == "O"){
        alert("Player O is winer!!!");
        gameFinished = true;

    }
    if(cells[0].textContent == "O" && cells[3].textContent == "O" && cells[6].textContent == "O"){
        alert("Player O is winer!!!");
        gameFinished = true;

    }
    if(cells[1].textContent == "O" && cells[4].textContent == "O" && cells[7].textContent == "O"){
        alert("Player O is winer!!!");
        gameFinished = true;

    }
    if(cells[2].textContent == "O" && cells[5].textContent == "O" && cells[8].textContent == "O"){
        alert("Player O is winer!!!");
        gameFinished = true;

    }
    if(gameFinished == true){
        location.reload();
    }
    else if(gameFinished == false && turn == 9){
        alert("DRAW");
        location.reload();
    }
})







