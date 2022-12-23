function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishersNum = Number(input[2]);
    let boatRent = 0;


    switch (season) {
        case 'Spring': boatRent += 3000; break;
        case 'Summer':
        case 'Autumn': boatRent += 4200; break;
        case 'Winter': boatRent += 2600; break;
    }

    if (fishersNum <= 6) {
        boatRent *= 0.90;
    } else if (fishersNum <= 11) {
        boatRent *= 0.85;
    } else if (fishersNum >= 12) {
        boatRent *= 0.75;
    }

    if (fishersNum % 2 === 0 && season !== 'Autumn') {
        boatRent *= 0.95;
    }

    if (budget >= boatRent) {
        console.log(`Yes! You have ${(budget - boatRent).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(boatRent - budget).toFixed(2)} leva.`);
    }
}
fishingBoat(["3000", "Summer", "11"]);
