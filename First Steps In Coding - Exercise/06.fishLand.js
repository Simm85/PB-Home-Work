function fishLand(input) {
    let priceForKgMackerel = Number(input[0]);
    let priceForKgSprat = Number(input[1]);
    let bonitoKg = Number(input[2]);
    let horseMackerelKg = Number(input[3]);
    let musselsKg = Number(input[4]);
    let priceForKgMussels = 7.50;

    let priceForKgBonito = (0.6 * priceForKgMackerel) + priceForKgMackerel;
    let priceForKgHorseMackerel = (0.8 * priceForKgSprat) + priceForKgSprat;
    let bill = bonitoKg * priceForKgBonito + horseMackerelKg * priceForKgHorseMackerel + musselsKg * priceForKgMussels;
    let totalMoney = bill.toFixed(2);

    console.log(totalMoney);
}
fishLand(['6.90','4.20','1.5','2.5','1']);


/* Георги ще има гости вечерта и решава да ги нагости с паламуд, сафрид и миди.
 Затова отива на рибната борса, за да си купи по няколко килограма.
Oт конзолата се въвеждат цените в лева на скумрията и цацата.
Също количеството на паламуд, сафрид и миди в килограми.
Колко пари ще са му необходими, за да плати сметката си, ако цените на борсата са:

•	Паламуд – 60% по-скъп от скумрията
•	Сафрид – 80% по-скъп от цацата */
