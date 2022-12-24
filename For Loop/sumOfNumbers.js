function sumOfNumbers(input) {
    let N = input[0];
    let sum = 0;
    for (i = 0; i < N.length; i++) {
        sum += Number(N[i]);
    }
    console.log(`The sum of the digits is:${sum}`);
}
sumOfNumbers(["1234"]);