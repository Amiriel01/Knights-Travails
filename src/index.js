import { gameBoard } from "./gameboard";
import { knightsTravails } from "./search-algorithm";

//DOM for chessboard module//
//self invoking module appController is called when the script is called in the script html tag//
let appController = (function () {
  gameBoard();
  //mimics user click input on the board with the array moves//
  knightsTravails([3,3], [4,3]);

  //self invoked modules have the extra () to call after the function//
})();
