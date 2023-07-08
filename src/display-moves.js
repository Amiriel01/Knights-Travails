//all things in the DOM//
let displayMoves = (path, squareCoord) => {
    //remove any existing p tags from previous move, if any//
    if (document.querySelector("p") !== null) {
        let displayDiv = document.querySelector(".display-div");
        let pNodes = displayDiv.querySelectorAll("p");
        pNodes.forEach((pNode) => pNode.remove());
    }

    let displayDiv = document.querySelector(".display-div");
    let moveNumber = document.createElement("p");
    let coordList = document.createElement("p");

    moveNumber.textContent = `The shortest path was ${path.length - 1} moves!`
    //innerHTML with join function so it keeps the array looking right. <br> is line break//
    coordList.innerHTML = squareCoord.join("<br>");
    displayDiv.appendChild(moveNumber);
    displayDiv.appendChild(coordList);
}

export { displayMoves };