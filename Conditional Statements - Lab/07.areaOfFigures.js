function areaOfFigures(input) {
    let type = input[0];
    let a = Number(input[1]);
    let b = Number(input[2]);
    let result;

    if (type === 'square') {
         result = a * a;
    } else if (type === 'rectangle') {
        result = a * b;
    } else if (type === 'circle') {
        result = Math.PI * Math.pow(a,2);
    } else if (type === 'triangle') {
        result = a * b / 2;
    }
    console.log(result.toFixed(3));
}
areaOfFigures(["triangle","4.5","20"]);