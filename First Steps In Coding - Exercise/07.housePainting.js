function housePainting(input) {
    let houseHeight = Number(input[0]);
    let houseLenght = Number(input[1]);
    let roofTriangleHeight =  Number(input[2]);
    let doorHeight = 2;
    let doorWidth = 1.2;
    let windowHeight = 1.5;
    let greenPaintPerSquareMeter = 3.4;
    let redPaintPerSquaremeter = 4.3;

    //Walls calculation
    let doorSquareMeters = doorHeight * doorWidth;
    let frontAndBackWallSquareMeters = (houseHeight * houseHeight * 2) - doorSquareMeters;
    let sideWindowsSquareMeters = (windowHeight * windowHeight) * 2;
    let sideWallsSquaremeters = (houseHeight * houseLenght * 2) - sideWindowsSquareMeters;
    let totalHouseSquaremeters = frontAndBackWallSquareMeters + sideWallsSquaremeters;
    let greenPaint = totalHouseSquaremeters / greenPaintPerSquareMeter;
    let greenPaintQuantity = greenPaint.toFixed(2);

    //Roof calculation
    let roofRectangularSidesSquareMeters = 2 * (houseHeight * houseLenght);
    let roofTriangleSidesSquareMeters = 2 * (houseHeight * roofTriangleHeight / 2);
    let totalRoofSquareMeters = roofRectangularSidesSquareMeters + roofTriangleSidesSquareMeters;
    let redPaint = totalRoofSquareMeters / redPaintPerSquaremeter;
    let redPaintQuantity = redPaint.toFixed(2);

    console.log(greenPaintQuantity, '\n', redPaintQuantity);
}
housePainting(['6','10','5.2']);