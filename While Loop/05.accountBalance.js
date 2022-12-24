function accountBalance(input) {
    let index = 0;
    let newSum = input[index];
    let totalSum = 0;


    while (newSum !== 'NoMoreMoney') {

        if (newSum < 0) {
            console.log('Invalid operation!');
            break;
        }
        newSum = Number(input[index]);
        console.log(`Increase: ${newSum.toFixed(2)}`);
        totalSum += newSum;
        index++;
        newSum = input[index];
    }

    console.log(`Total: ${totalSum.toFixed(2)}`);
}
accountBalance(["120", "45.55", "-150"]); 