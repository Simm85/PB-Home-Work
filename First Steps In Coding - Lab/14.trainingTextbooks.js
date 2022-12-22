function suppliesForSchool(input) {
    let pensPackagePrice = 5.80;
    let markersPackagePrice = 7.20;
    let literCleaningLiquidPrice = 1.20;

    let orderedPensPrice = Number(input[0]) * pensPackagePrice;
    let orderedMarkersPrice = Number(input[1]) * markersPackagePrice;
    let orderedLiquidPrice = Number(input[2]) * literCleaningLiquidPrice;

    let billSum = orderedPensPrice + orderedMarkersPrice + orderedLiquidPrice;
    let shopDiscount = billSum * (Number(input[3]) / 100);
    let totalMoneyToPay = billSum - shopDiscount;

    console.log(totalMoneyToPay);
}
suppliesForSchool(["2","3","4","25"]);

