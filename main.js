function endGame(){
    console.log("GAME OVER!");
    let finalScore = document.getElementsByClassName("score");
    console.log(finalScore);
    finalScore[0].setAttribute("color","red");
    finalScore[0].setAttribute("font-size","50px");
    return;
}

function getHeadCoordinates(){
    let curRow = document.getElementsByClassName("gridRow");
    let snakeHeadRow = [];
    for(let row of curRow){
        for(let r of row.children){
            if(r.classList.contains("snakeHead")){
                snakeHeadRow.push([row.id.substring(row.id.indexOf('-') + 1),r.id.substring(row.id.indexOf('-') + 1)]);
                console.log("snakeHeadRow:");
                console.log(snakeHeadRow);
                break;
            }
        }
    }

    return snakeHeadRow;
}

function getBodyCoordinates(){
    let curRow = document.getElementsByClassName("gridRow");
    let snakeBodyRow = [];
    for(let row of curRow){
        for(let r of row.children){
            if(r.classList.contains("snakeBody")){
                console.log(row);
                snakeBodyRow.push([row.id.substring(row.id.indexOf('-') + 1),r.id.substring(row.id.indexOf('-') + 1)]);
                console.log("snakeBodyRow:");
                console.log(snakeBodyRow);
            }
        }
    }

    return snakeBodyRow;
}

function snakeInBounds(){
    const snakeHeadPos = document.getElementsByClassName("snakeHead");
    // if(snakeHeadPos < )
        return true;
}

function moveLeftIfPossible(){
    if(snakeInBounds() && !snakeHeadOnRightOfBody()){
        moveSnakeLeft();
    }

    function snakeHeadOnRightOfBody(){
        console.log("snakeHeadOnRightOfBody");
        const headPair = getHeadCoordinates()[0];
        const bodyPairs = getBodyCoordinates();

        for(let pair of bodyPairs){
            console.log("Pair: ");
            console.log(pair);
            console.log((headPair[1] - '0'));
            console.log((pair[1] - '0'));
            if(headPair[0] === pair[0] && (headPair[1] - '0') - 1 == (pair[1] - '0')){
                console.log("SNAKE HEAD ON RIGHT OF BODY");
                return true;
            }
        }
        return false;
    }

    // function moveSnakeLeft(){
    //     let curRow = document.getElementsByClassName("gridRow");
    //     let snakeHeadRow;
    //     for(let row of curRow){
    //         for(let r of row.children){
    //             if(r.classList.contains("snakeHead")){
    //                 snakeHeadRow = row.id;
    //                 console.log("snakeHeadRow:");
    //                 console.log(snakeHeadRow);
    //                 break;
    //             }
    //         }
    //     }

    //     curRow = document.getElementById(snakeHeadRow);
    //     // console.log(curRow);
    //     let snakeBodyList = document.getElementsByClassName("snakeBody");
    //     let snakeHeadPos = document.getElementsByClassName("snakeHead");

    //     // console.log("snakeBody.length = " + snakeBodyList.length);
    //     // console.log("snakeHead.length = " + snakeHeadPos.length);

    //     //Remove tail of snake
    //     snakeBodyList[0].classList.remove("snakeBody");

    //     //Manipulating snake head to move rightwards
    //     let newSnakeHeadPos = snakeHeadPos[0];
        
    //     //Currently this grabs the character after the '-' in the outerHTML.
    //     //I need it to check the next TWO chars in case it's a double digit number
    //     if(!isNaN(snakeHeadPos[0].outerHTML.charAt(newSnakeHeadPos.outerHTML.indexOf('-') + 2))){
    //         newSnakeHeadPos = snakeHeadPos[0].outerHTML.substring(newSnakeHeadPos.outerHTML.indexOf('-') + 1,newSnakeHeadPos.outerHTML.indexOf('-') + 3);
    //     }else{
    //         newSnakeHeadPos = snakeHeadPos[0].outerHTML.charAt(newSnakeHeadPos.outerHTML.indexOf('-') + 1);
    //     }
    //     // console.log("newSnakeHeadPos char: " + newSnakeHeadPos);
    //     newSnakeHeadPos = (newSnakeHeadPos) - '0';
    //     newSnakeHeadPos += 1;
    //     // console.log("newSnakeHeadPos num: " + newSnakeHeadPos);

    //     // console.log("Len of curRow: " + curRow.children.length);
    //     // console.log("Children of curRow: ");
    //     // console.log(curRow.children);
    //     for(let pos = 0; pos <= curRow.children.length; pos++){
    //         if(newSnakeHeadPos <= 20 && pos == newSnakeHeadPos - 1){
    //             // console.log(curRow.children[pos].classList);
    //             curRow.children[pos].classList.add("snakeHead");
    //             break;
    //         }
    //         if(newSnakeHeadPos >= 21) endGame();
    //     }

    //     //Replacing old snakeHeadPos with a snakeBody; this adds the div to snakeBodyList
    //     snakeHeadPos[0].classList.add("snakeBody");
    //     snakeHeadPos[0].classList.remove("snakeHead");
    // }
}

function moveRightIfPossible(){
    if(snakeInBounds() && !snakeHeadOnLeftOfBody()){
        moveSnakeRight();
    }

    function snakeHeadOnLeftOfBody(){
        console.log("snakeHeadOnLeftOfBody");
        const headPair = getHeadCoordinates();
        const bodyPairs = getBodyCoordinates();
        console.log("[snakeHeadOnLeftOfBody] headPair");
        console.log(headPair);

        for(let pair of bodyPairs){
            if(headPair[0] == pair[0] && headPair[1] < pair[1]){
                console.log("SNAKE HEAD ON LEFT OF BODY");
                return true;
            }
        }
        return false;
    }

    function moveSnakeRight(){
        let curRow = document.getElementsByClassName("gridRow");
        let snakeHeadRow;
        for(let row of curRow){
            for(let r of row.children){
                if(r.classList.contains("snakeHead")){
                    snakeHeadRow = row.id;
                    console.log("snakeHeadRow:");
                    console.log(snakeHeadRow);
                    break;
                }
            }
        }

        curRow = document.getElementById(snakeHeadRow);
        // console.log(curRow);
        let snakeBodyList = document.getElementsByClassName("snakeBody");
        let snakeHeadPos = document.getElementsByClassName("snakeHead");

        // console.log("snakeBody.length = " + snakeBodyList.length);
        // console.log("snakeHead.length = " + snakeHeadPos.length);

        //Remove tail of snake
        snakeBodyList[0].classList.remove("snakeBody");

        //Manipulating snake head to move rightwards
        let newSnakeHeadPos = snakeHeadPos[0];
        
        //Currently this grabs the character after the '-' in the outerHTML.
        //I need it to check the next TWO chars in case it's a double digit number
        if(!isNaN(snakeHeadPos[0].outerHTML.charAt(newSnakeHeadPos.outerHTML.indexOf('-') + 2))){
            newSnakeHeadPos = snakeHeadPos[0].outerHTML.substring(newSnakeHeadPos.outerHTML.indexOf('-') + 1,newSnakeHeadPos.outerHTML.indexOf('-') + 3);
        }else{
            newSnakeHeadPos = snakeHeadPos[0].outerHTML.charAt(newSnakeHeadPos.outerHTML.indexOf('-') + 1);
        }
        // console.log("newSnakeHeadPos char: " + newSnakeHeadPos);
        newSnakeHeadPos = (newSnakeHeadPos) - '0';
        newSnakeHeadPos += 1;
        // console.log("newSnakeHeadPos num: " + newSnakeHeadPos);

        // console.log("Len of curRow: " + curRow.children.length);
        // console.log("Children of curRow: ");
        // console.log(curRow.children);
        for(let pos = 0; pos <= curRow.children.length; pos++){
            if(newSnakeHeadPos <= 20 && pos == newSnakeHeadPos - 1){
                // console.log(curRow.children[pos].classList);
                curRow.children[pos].classList.add("snakeHead");
                break;
            }
            if(newSnakeHeadPos >= 21) endGame();
        }

        //Replacing old snakeHeadPos with a snakeBody; this adds the div to snakeBodyList
        snakeHeadPos[0].classList.add("snakeBody");
        snakeHeadPos[0].classList.remove("snakeHead");

        //Shifting the new snakeHeadPos to the right by one
    }
}

// function moveUpIfPossible(){
//     if(snakeInBounds()){

//     }
// }

function moveDownIfPossible(){
    if(snakeInBounds() && !snakeHeadOnTopOfBody()){
        moveSnakeDown();
    }

    function snakeHeadOnTopOfBody(){
        console.log("snakeHeadOnTopOfBody");
        const headPair = getHeadCoordinates();
        const bodyPairs = getBodyCoordinates();
        console.log("[snakeHeadOnTopOfBody] headPair");
        console.log(headPair);

        for(let pair of bodyPairs){
            if(headPair[0] < pair[0] && headPair[1] == pair[1]){
                console.log("SNAKE HEAD ON TOP OF BODY");
                return true;
            }
        }
        return false;
    }

    function moveSnakeDown(){
        const headPair = getHeadCoordinates()[0];

        let curRow = document.getElementsByClassName("gridRow");
        for(let row of curRow){
            for(let r of row.children){
                if(r.classList.contains("snakeHead")){
                    curRow = document.getElementById(`row-${(row.id.substring(row.id.indexOf('-') + 1) - '0') + 1}`);
                    break;
                }
            }
        }

        let snakeBodyList = document.getElementsByClassName("snakeBody");
        let snakeHeadPos = document.getElementsByClassName("snakeHead");

        snakeBodyList[0].classList.remove("snakeBody");

        let newSnakeHeadRow = (headPair[0] - '0') + 1;
        let newSnakeHeadCol = (headPair[1] - '0');

        for(let pos = 0; pos <= curRow.children.length; pos++){
            if(newSnakeHeadRow <= 20 && pos == newSnakeHeadCol - 1){
                curRow.children[pos].classList.add("snakeHead");
                break;
            }
            if(newSnakeHeadRow >= 21) endGame();
        }

        snakeHeadPos[0].classList.add("snakeBody");
        snakeHeadPos[0].classList.remove("snakeHead");
    }
}

function initSnake(){
    // GAME START: DRAWING THE SNAKE
    const gameRows = document.getElementsByClassName("gridRow");
    // console.log(gameRows);

    //Initial snake body and head positions
    const snakeBodyList = [gameRows[1].children[1],gameRows[1].children[2],gameRows[1].children[3]];
    const snakeHeadPos = gameRows[1].children[4];

    // console.log("initial snakeHeadPos: ");
    // console.log(snakeHeadPos);

    for(let bodypart of snakeBodyList){
        bodypart.classList.add("snakeBody");
    }
    snakeHeadPos.classList.add("snakeHead");
}

function setGrid(){

    // CSS CONSTANTS

    const game_grid_color = "aqua";
    const game_grid_row_dash_color = "purple";
    const game_grid_cell_color = "yellow";
    const game_cell_borders = `1px dashed ${game_grid_row_dash_color}`;
    let game_cell_size = "35px";
    let game_cell_size_num = 35;

    // FUNCTION LOGIC
    let gridWidth = 20, gridHeight = 20;

    const grid = document.getElementsByClassName('gameGrid');

    // console.log(grid[0]);
    if(document.body.getElementsByClassName('gameGrid')[0].children.length > 0){
        document.body.getElementsByClassName('gameGrid')[0].innerHTML = '';
    }

    if(screen.width > 482 && screen.width < 782){
        game_cell_size = "25px";
        game_cell_size_num = 25;
    }else if(screen.width > 320 && screen.width < 482){
        game_cell_size = "15px";
        game_cell_size_num = 15;
    }

    // document.body.getElementsByClassName('gridName')[0].setAttribute("width","700px");

    for(let rows = 1; rows <= gridHeight; rows++){
        const nxtRow = document.createElement("div");
        nxtRow.setAttribute("class","gridRow");
        const rowId = "row-" + rows;

        nxtRow.setAttribute("id",rowId);

        for(let cols = 1; cols <= gridWidth; cols++){
            const newCell = document.createElement("div");
            newCell.setAttribute("class","cell");
            const colId = "col-" + cols;

            newCell.setAttribute("id",colId);            
            nxtRow.appendChild(newCell);
        }
        document.body.getElementsByClassName('gameGrid')[0].appendChild(nxtRow);
    }

    initSnake();
}

window.onload = function() {
    console.log("HENLO");
    setGrid();
}

window.addEventListener('resize', setGrid);

window.addEventListener("keydown", (event) => {
    console.log("event.code: " + event.code);
    if(event.code === 'ArrowLeft'){   //LEFT KEY PRESS
        // alert("You pressed the left key!");
        moveLeftIfPossible();
    }
    if(event.code === 'ArrowUp'){   //UP KEY PRESS
        // alert("You pressed the up key!");
        moveUpIfPossible();
    }
    if(event.code === 'ArrowRight'){   //RIGHT KEY PRESS
        // alert("You pressed the right key!");
        moveRightIfPossible();
    }
    if(event.code === 'ArrowDown'){   //DOWN KEY PRESS
        // alert("You pressed the down key!");
        moveDownIfPossible();
    }
});