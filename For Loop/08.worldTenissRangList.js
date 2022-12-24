function worldTennisRanglist(input) {
    let tourNum = Number(input[0]);
    let startingPoints = Number(input[1]);
    let tourStage = '';
    let stagePoints = 0;
    let finalPoints = 0;
    let avgPoints = 0;
    let winsPercentage = 0;

    for (let i = 2; i < input.length; i++) {

        tourStage = input[i];

        switch (tourStage) {
            case 'W': stagePoints += 2000; break;
            case 'F': stagePoints += 1200; break;
            case 'SF': stagePoints += 720; break;
        }

        if (tourStage === 'W') {
            winsPercentage += (tourStage.length / tourNum) * 100;
        }
    }

    avgPoints += stagePoints / tourNum;
    finalPoints += startingPoints + stagePoints;

    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${Math.floor(avgPoints)}`);
    console.log(`${winsPercentage.toFixed(2)}%`);
}
worldTennisRanglist(["7", "1200", "SF", "F", "W", "F", "W", "SF", "W"]); 
