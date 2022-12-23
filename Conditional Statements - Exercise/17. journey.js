function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let destination = '';
    let spentMoney = 0;
    let resting = '';




    if (budget <= 100) {
        destination = 'Bulgaria';
        if (season === 'summer') {
            spentMoney = budget - (0.30 * budget);
        } else if (season === 'winter') {
            spentMoney = budget - (0.70 * budget);
        }
    } else if (budget <= 1000) {
        destination = 'Balkans';
        if (season === 'summer') {
            spentMoney = budget - (0.40 * budget);
        } else if (season === 'winter') {
            spentMoney = budget - (0.80 * budget);
        }
    } else if (budget > 1000) {
        destination = 'Europe';
        spentMoney = budget - (0.90 * budget);
    }




    if (season === 'summer' && destination !== 'Europe') {
        resting = 'Camp';
    } else {
        resting = 'Hotel';
    }



    console.log(`Somewhere in ${destination}`);
    console.log(`${resting} - ${(budget - spentMoney).toFixed(2)}`);
}
journey(["1500", "summer"]);