function cinema(input) {
    let projection = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);

    let income = 0;
    let ticketPrice = 0;

    if(projection === 'Premiere') {
        ticketPrice = 12.00;
    } else if (projection === 'Normal') {
        ticketPrice = 7.50;
    } else if (projection === 'Discount') {
        ticketPrice = 5.00;
    }

    income = ticketPrice * (rows * columns);
    console.log(`${income.toFixed(2)} leva`);
}
cinema(["Premiere","10","12"]);