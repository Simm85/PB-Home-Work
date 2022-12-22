function trainingLab(input) {
    let hallLenght = Number(input[0] * 100);      
    let hallWidth = Number(input[1] * 100); 
    let workPlaceLength = 120;
    let workPlaceWidth = 70;
    let corridorWidth = 100;
    let unavailableArea = 3;

    let desksPerRow = (hallWidth - corridorWidth) / workPlaceWidth;
    let totalDesksPerRow = Math.floor(desksPerRow);

    let deskColumns = hallLenght / workPlaceLength;
    let totalDeskColumns = Math.floor(deskColumns);

    let workPlacesNumber = (totalDesksPerRow * totalDeskColumns) - unavailableArea;
    console.log(workPlacesNumber);
}
trainingLab(['8.4','5.2']);