function celsiusToFahrenheit(input) {
    let cDegree = Number(input[0]);

    let fDegree = (cDegree * 1.8) + 32;
    let result = fDegree.toFixed(2);
    
    console.log(result);
}
celsiusToFahrenheit(['25']);