function vegetableMarket(input) {
    let kgVegetables = Number(input[0]);
    let kgFrutes = Number(input[1]);
    let totalKgVegetables = Number(input[2]);
    let totalKgFrutes = Number(input[3]);
    let euroRate = 1.94;

    let totalHarvestProfit = (kgVegetables * totalKgVegetables + kgFrutes * totalKgFrutes) / euroRate;
    let result = totalHarvestProfit.toFixed(2);
    console.log(result);
}
vegetableMarket(['0.194','19.4','10','10']);