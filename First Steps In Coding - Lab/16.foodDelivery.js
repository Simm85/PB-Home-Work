function foodDelivery(input) {
    let priceForChiken = 10.35;
    let priceForFish = 12.40;
    let priceForVegetarian = 8.15;
    let priceForDelivery = 2.50;

    let chikenOrder = Number(input[0]);
    let fishOrder = Number(input[1]);
    let vegetarianOrder = Number(input[2]);

    let totalFoodPrice = chikenOrder * priceForChiken + fishOrder * priceForFish + vegetarianOrder * priceForVegetarian;
    let dessert = 0.20 * totalFoodPrice;
    let totalPrice = totalFoodPrice + dessert + priceForDelivery;

    console.log(totalPrice);
}
foodDelivery(["2","4","3"]);