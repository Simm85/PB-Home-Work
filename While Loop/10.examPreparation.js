function examPreparation(input) {
    let negativeResultsSum = Number(input[0]);
    let index = 1;
    let dataIndex = input[index];
    let dataStr = '';
    let dataNum = 0;
    let totalScore = 0;
    let avgScore = 0;
    let numCounter = 0;
    let problemsCounter = 0;
    let negativeNums = 0;

    while (negativeResultsSum > negativeNums) {

        if (index % 2 === 0) {
            dataNum = Number(input[index]);
            totalScore += dataNum;
            numCounter++;
            avgScore = totalScore / numCounter;

            if (dataNum <= 4) {
                negativeNums++;
            }

        } else {
            dataStr = input[index];
            problemsCounter++;
        }

        index++;
        dataIndex = input[index];

        if (dataIndex === 'Enough') {
            console.log(`Average score: ${avgScore.toFixed(2)}`);
            console.log(`Number of problems: ${problemsCounter}`);
            console.log(`Last problem: ${dataStr}`);
            break;
        } else if (negativeResultsSum <= negativeNums) {
            console.log(`You need a break, ${negativeNums} poor grades.`);
            break;
        }
    }
}
examPreparation(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);
examPreparation(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]);
