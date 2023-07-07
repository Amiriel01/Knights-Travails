//create the chess board module//
let gameBoard = () => {
    //create variables and chessboard table//
    let defaultStartLocation = [0, 0];
    let coordArray = [];
    let chessTable = document.createElement("table");

    //create the board cells and apply position values to each cell//
    //setAttribute to set the class attribute with the name center//
    chessTable.setAttribute("class", "center");
    //create an 8x8 chessboard this for loop will loop 8 times to create the rows//
    for (let i = 0; i < 8; i++) {
        //create variables for table row and cell row location//
        let tableRow = document.createElement("tr");
        //use Math.abs to start the numbers at the bottom of the board and end them at the top for the row coordinates//
        let cellRowCoord = Math.abs(i - 7);

        tableRow.textContent = cellRowCoord; //Remove later this is just to set text//

        //create an 8x8 chessboard this for loop will loop 8 times to create the columns//
        for (let z = 0; z < 8; z++) {
            //create variable for table cells and cell column location//
            let tableCell = document.createElement("td");
            let cellColumnCoord = z;

            tableCell.textContent = cellColumnCoord; //Remove later this is just to set text//

            //loop for shading the board's odd value cells//
            if ((i + z) % 2 === 0) {
                tableCell.setAttribute("class", "cell whitecell");
                tableRow.appendChild(tableCell);
                coordArray.push(cellRowCoord);
                coordArray.push(cellColumnCoord);
                //row and column coordinates are creating the dataset coordArray//
                tableCell.dataset.coordArray = coordArray;
                coordArray.splice(0, 2);
                //loop for shading the board's even value cells//
            } else {
                tableCell.setAttribute("class", "cell blackcell");
                tableRow.appendChild(tableCell);
                coordArray.push(cellRowCoord);
                coordArray.push(cellColumnCoord);
                //row and column coordinates are creating the dataset coordArray//
                tableCell.dataset.coordArray = coordArray;
                coordArray.splice(0, 2);
            }
        }
        chessTable.appendChild(tableRow);
    }

    //create the knight and place it at position 0,0 on the board//
    //select all table cells on the chessTable//
    let cellNodes = chessTable.querySelectorAll("td");
    //querySelectorAll creates nodes, for each cell node run the if//
    cellNodes.forEach((cellNode) => {
        //default start location was set above as [0,0] create the image and append the image there//
        if (defaultStartLocation.toString() === cellNode.dataset.coordArray) {
            let knightImg = document.createElement("img");
            knightImg.src = "knight.svg";
            cellNode.appendChild(knightImg);
        }
    });
    let right = document.querySelector(".right")
    right.appendChild(chessTable);
};

//function to reset the board on the button click//
let resetBoard = (function () {
    let resetButton = document.querySelector(".clear-board");
    resetButton.addEventListener("click", function () {
        location.reload();
    });
    //self invoking function//
})();

export { gameBoard };
