function basketballEquipment(input) {
    let yearTrainigTax = Number(input[0]);
    let basketballSneakers = yearTrainigTax - (0.40 * yearTrainigTax);
    let basketballClothes = basketballSneakers - (0.20 * basketballSneakers);
    let ball = basketballClothes / 4;
    let accessories = ball / 5;
    let annualTrainingCosts = yearTrainigTax + basketballSneakers + basketballClothes + ball + accessories;

    console.log(annualTrainingCosts);
}
basketballEquipment(["365"]);


/* Джеси решава, че иска да се занимава с баскетбол, но за да тренира е нужна екипировка. Напишете програма, която изчислява какви разходи ще има Джеси, ако започне да тренира, като знаете колко е таксата за тренировки по баскетбол за период от 1 година. Нужна екипировка: 
•	Баскетболни кецове – цената им е 40% по-малка от таксата за една година
•	Баскетболен екип – цената му е 20% по-евтина от тази на кецовете
•	Баскетболна топка – цената ѝ е 1 / 4 от цената на баскетболния екип
•	Баскетболни аксесоари – цената им е 1 / 5 от цената на баскетболната топка */
