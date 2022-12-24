function cleverLily(input) {

    let lilisAge = Number(input[0]);
    let laundryPrice = Number(input[1]);
    let toyPrice = Number(input[2]);


    let toyQuantity = 1;
    let birthDays = 1;
    let givenMoney = 0;
    let earnedMoney = 0;
    let savedMoney = 0;


    for (i = 1; i < lilisAge; i++) {
        birthDays++;
        if (birthDays % 2 === 0) {
            givenMoney += 10;
            savedMoney += givenMoney - 1;
        } else {
            toyQuantity++;
        }
    }

    earnedMoney = savedMoney + (toyQuantity * toyPrice);
    
    if (laundryPrice <= earnedMoney) {
        console.log(`Yes! ${(earnedMoney - laundryPrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(laundryPrice - earnedMoney).toFixed(2)}`);
    }
}
cleverLily(["21", "1570.98", "3"]); 