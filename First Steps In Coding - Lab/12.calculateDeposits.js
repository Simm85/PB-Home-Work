function calculateDeposits(input) {
    let depositSum = Number(input[0]);
    let depositPeriod = Number(input[1]);
    let annualPercentageRate = Number(input[2] / 100);
    let earnedMoney = depositSum  + depositPeriod * ((depositSum * annualPercentageRate ) / 12);

    console.log(earnedMoney);
}
calculateDeposits(["200","3","5.7"]);


/*сума = депозирана сума  + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)

1. Изчисляваме натрупаната лихва: 200 * 0.057 (5.7%) = 11.40 лв.
2. Изчисляваме лихвата за 1 месец: 11.40 лв. / 12 месеца = 0.95 лв.
3. Общата сума е: 200 лв. + 3 * 0.95 лв. = 202.85 лв. */
