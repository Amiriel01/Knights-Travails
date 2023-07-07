//using a graph breadth-first-search algorithm for the moves//

//map holds key value pairs and remembers original insertion order of the keys//
//squareRegistry is a map that holds key value pairs in an array//
let squareRegistry = new Map();

//get/set current coordinates to the board. creates a constant x and y position so the coordinates can change based on x and y input//
//predecessor variable created with no value at this time//
let chessSquare = (x, y) => {
    let xPosition = x;
    let yPosition = y;
    let predecessor;

    //define hardcoded possible knight moves in the array//
    let KNIGHT_MOVES = [
        [1, 2], [1, -2],
        [2, 1], [2, -1],
        [-1, 2], [-1, -2],
        [-2, 1], [-2, -1]
    ]

    //these will be used later in the code when appropriate//
    let getPredecessor = () => predecessor;
    //if newPredecessor has a value it will predecessor will be the new predecessor//
    let setPredecessor = (newPredecessor) => {
        predecessor = predecessor || newPredecessor
    }
    //this will show the x and y coordinates//
    let name = () => `${x}, ${y}`;

    //Evaluate possible current knight moves against offset//
    let possibleKnightMoves = () => {
        return KNIGHT_MOVES
            //invoke newSquareFrom and offset AND filter (returns elements of the array specified in call back function)//
            .map((offset) => newSquareFrom(offset[0], offset[1])).filter((square) => square !== undefined);
    }

    //calculates a new set of square coordinates against the offset//
    let newSquareFrom = (xOffset, yOffset) => {
        let [newX, newY] = [xPosition + xOffset, yPosition + yOffset];
        //if the offset is between 0 and 8 it's a valid move//
        if (0 <= newX && newX < 8 && 0 <= newY && y < 8) {
            return chessSquare(newX, newY);
        }
    }

    //get/set map constructor object names//
    //has is a map key that looks to see if a specified boolean is present or not//
    if (squareRegistry.has(name())) {
        return squareRegistry.get(name());
    } else {
        //if squareRegistry does not have a name create a name, getPredecessor, setPredecessor, and possibleKnightMoves//
        let newSquare = { name, getPredecessor, setPredecessor, possibleKnightMoves }
        //invoke name function and set newSquare value//
        squareRegistry.set(name(), newSquare);
        return newSquare;
    }
}

//take the users click coordinates and run the search algorithm//
let knightsTravails = (start, finish) => {
    //clear squareRegistry so there is no left over data from before the current move//
    squareRegistry.clear();

    //chessSquare from above//
    let origin = chessSquare(...start);
    let target = chessSquare(...finish);

    //takes the origin variable from above and make it a two coordinate array with the queue variable//
    let queue = [origin];
    //if target is included in queue but is not wanted in queue//
    while (!queue.includes(target)) {
        //shift will remove the first element from the array and return it//
        let currentSquare = queue.shift();

        //will keep looping as long as target is not found//
        let enqueueList = currentSquare.possibleKnightMoves();
        //checks current square to see if it should be set to predecessor or newPredecessor (from above)//
        enqueueList.forEach((square) => square.setPredecessor(currentSquare));
        //push enqueueList into queue which is the origin of the current loop//
        //... means any number of arguements//
        queue.push(...enqueueList);

    }
    //takes the target variable from above and make it a two coordinate array with the path variable//
    let path = [target];
    while (!path.includes(origin)) {
        let prevSquare = path[0].getPredecessor();
        //unshift will insert the new element at the start of the array which is the opposite of shift from above//
        path.unshift(prevSquare);
    }
    console.log(`the shortest path was ${path.length - 1} moves!`);
    console.log("The moves were:");
    path.forEach(square => console.log(square.name()));
}

export { knightsTravails };
