function circleAreaAndPerimeter(input) {
    let r = Number(input[0]);
    let PI = Math.PI;

    //Circle area
    let s = PI * (r*r);
    let calculatedArea = s.toFixed(2);

    //Circle perimetar 
    let p = 2 * (PI * r);
    let calculatedPerimeter = p.toFixed(2);

    console.log(calculatedArea,'\n',calculatedPerimeter);
}
circleAreaAndPerimeter(['3']);