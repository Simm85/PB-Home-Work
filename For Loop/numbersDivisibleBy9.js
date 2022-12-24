function numbersDivisibleBy9(input) {
    let num1 = input[0];
    let num2 = input[1];
    let sum = 0;
    let nums = '';

    for (let i = num1; i < num2; i++) {

        i = Number(i);

        if (i % 9 === 0) {
            sum += i;
            nums += i + '\n';
        }
    }
    console.log(`The sum: ${sum}\n${nums}`);
}
numbersDivisibleBy9(["100", "200"]);

