function multiplicationTable(input) {
    let number = input[0];

    for (let i = 1; i <= 10; i++) {
        i = Number(i);
        console.log(`${i} * ${number} = ${i * number}`);
    }
}
multiplicationTable(["5"]);