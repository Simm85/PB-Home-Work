function repainting(input) {
   let protectiveNylonPrice = 1.50;
   let paintPrice = 14.50;
   let paintThinnerPrice = 5.00;
   
   let nesessaryNylon = Number(input[0]);
   let nesessaryPaint = Number(input[1]);
   let nesessaryThiner = Number(input[2]);
   let workingHours = Number(input[3]);

   let extraNylon = (nesessaryNylon + 2) * protectiveNylonPrice;
   let extraPaint = (nesessaryPaint * 1.1) * paintPrice;
   let paintThiner = nesessaryThiner * paintThinnerPrice;
   let extraMoneyForBags = 0.40;

   let moneyForMaterials = extraMoneyForBags + extraNylon + extraPaint + paintThiner;
   let workersSalary = (moneyForMaterials * 0.30) * workingHours;
   let totalMoney = moneyForMaterials + workersSalary;

   console.log(totalMoney);
}
repainting(["10","11","4 ","8"]);


/* Румен иска да пребоядиса хола и за целта е наел майстори. Напишете програма, която изчислява разходите за ремонта,
 предвид следните цени:

•	Предпазен найлон - 1.50 лв. за кв. метър
•	Боя - 14.50 лв. за литър
•	Разредител за боя - 5.00 лв. за литър

За всеки случай, към необходимите материали, Румен иска да добави още 10% от количеството боя и 2 кв.м. найлон,
разбира се и 0.40 лв. за торбички. Сумата, която се заплаща на майсторите за 1 час работа, е равна на 30% от 
сбора на всички разходи за материали. */
