function usdToBgnConverter(input) {
    let usd = Number(input[0]);
    let bgn = 1.79549; 
    let convertResult = usd * bgn;
    console.log(convertResult);
}
usdToBgnConverter(['100']);