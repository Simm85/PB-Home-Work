function minNumber(input) {
    let index = 0;
    let data = input[index];
    let minNumber = Number.MAX_SAFE_INTEGER;

    while (data !== 'Stop') {
        data = Number(input[index]);
        if (data < minNumber) {
            minNumber = data;
        }
        index++;
        data = input[index];
    }
    console.log(minNumber);
}
minNumber(["-1", "-2", "Stop"]);
