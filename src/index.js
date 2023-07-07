import { gameBoard } from "./gameboard";

//DOM for chessboard module//
//self invoking module appController is called when the script is called in the script html tag//
let appController = (function () {
    gameBoard();

//self invoked modules have the extra () to call after the function//    
})();