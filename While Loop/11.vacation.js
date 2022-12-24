function vacation(input) {
    let neededMoney = Number(input[0]);
    let jessysMoney = Number(input[1]);
    let index = 2;
    let data = input[index];
    let days = 0;
    let spentMoney = 0;
    let savedMoney = 0;
    let spendDays = 0;

    while (jessysMoney < neededMoney) {

        if (data === 'spend') {
            days++;
            spentMoney = Number(input[index + 1]);
            jessysMoney -= spentMoney;

            if (jessysMoney < 0) {
                jessysMoney = 0;
            }

            if (days === 5) {
                console.log(`You can't save the money.\n${days}`);
                break;
            }
        } else if (data === 'save') {
            days++;
            savedMoney = Number(input[index + 1]);
            jessysMoney += savedMoney;
        }

        index++;
        data = input[index];
    }

    if (jessysMoney >= neededMoney) {
        console.log(`You saved the money for ${days} days.`);
    }
}
//  console.log(jessysMoney, days);
//vacation(["2000", "1000", "spend", "1200", "save", "2000"]);
vacation(["250", "150", "spend", "50", "spend", "50", "save", "100", "save", "100"]);



