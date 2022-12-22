function familyVacation(input) {
    let budget = Number(input[0]);
    let stayDays = Number(input[1]);
    let stayTax = Number(input[2]);
    let extraBudget = Number(input[3]) / 100 * budget;

    let totalStayTax = stayDays * stayTax;
    let stayTaxDiscount = 0.05 * totalStayTax;
    let stayTaxAfterDiscount = totalStayTax - stayTaxDiscount + extraBudget;

    if (stayDays >= 1 && stayDays <= 7) {
        let neededMoney = totalStayTax + extraBudget - budget;
        let message1 = `${neededMoney.toFixed(2)} leva needed.`;
        console.log(message1);
    } else {
        let leftMoney = budget - stayTaxAfterDiscount;
        let message2 = `Ivanovi will be left with ${leftMoney.toFixed(2)} leva after vacation.`;
        console.log(message2);
    }
}
familyVacation([500, 7, 66, 15]);