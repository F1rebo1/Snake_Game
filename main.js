function initSnake(){
    setGrid();

    
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

    console.log(grid[0]);
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
    console.log(document.body.getElementsByClassName('gameGrid')[0].childNodes);
}

window.onload = function() {
    console.log("HENLO");
    initSnake();
}

window.addEventListener('resize', setGrid);