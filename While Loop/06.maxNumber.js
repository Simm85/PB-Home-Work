function maxNumber(input) {
    let index = 0;
    let data = input[index];
    let maxNumber = Number.MIN_SAFE_INTEGER;

    while (data !== 'Stop') {

        data = Number(input[index]);

        if (data > maxNumber) {
            maxNumber = data;
        }

        index++;
        data = input[index];
    }

    console.log(maxNumber);
}
maxNumber(["100", "99", "80", "70", "Stop"]);
