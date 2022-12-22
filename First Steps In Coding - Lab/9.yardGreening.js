function yardGreening(input) {
    let yardSize = input[0];
    let pricePerSquareMeter = 7.61;
    let promoDiscount = 0.18;
    let totalPrice = Number(yardSize * pricePerSquareMeter);
    let discount = promoDiscount * totalPrice;
    let finalPrice = totalPrice - discount;
    let firstResult = `The final price is: ${finalPrice} lv.`;
    let secondResult = `The discount is: ${discount} lv.`;

    console.log(firstResult,'\n', secondResult);
}
yardGreening(['550']);