import { knightsTravails } from "./search-algorithm";
//this module will control and keep track of the moves/clicks from the user//

let uiController = () => {
    let cellNodes = document.querySelectorAll("td");
    cellNodes.forEach((cellNode) => {
        //loop through all cells to find knight img and assign coordinates where it is located//
        if (cellNode.querySelector("img") !== null) {
            let knightLocation = JSON.parse("[" + cellNode.dataset.coordArray + "]");
            console.log("Current knight location", knightLocation);
        }

        //loop through all cells to attach the click listener to each cell and assign coordinates once click is seen//
        cellNode.addEventListener("click", function () {
            let clickedLocation = JSON.parse("[" + cellNode.dataset.coordArray + "]");
            console.log("Clicked on location", clickedLocation);

            //loop again to locate new current location of previous Knight image and assign coordinates//
            //Remove old knight img from previous coordinates and call knightsTravails module to start search algorithm//
            let cellNodes = document.querySelectorAll("td");
            cellNodes.forEach((cellNode) => {
                if (cellNode.querySelector("img") !== null) {
                    let knightLocation = JSON.parse("[" + cellNode.dataset.coordArray + "]");
                    console.log("Current knight location", knightLocation);

                    let knightImg = document.querySelector("img");
                    knightImg.remove();
                    knightsTravails(knightLocation, clickedLocation);
                }
            });

            //create the new knight img at the clicked location//
            let knightImg = document.createElement("img");
            knightImg.src = "knight.svg";
            cellNode.appendChild(knightImg);
        });
    });
};

export { uiController };