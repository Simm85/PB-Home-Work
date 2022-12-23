function sumSeconds(input) {
    let firstCompetitorTime = Number(input[0]);
    let secondCompetitorTime = Number(input[1]);
    let thirdCompetitorTime = Number(input[2]);

    let totalTime = firstCompetitorTime + secondCompetitorTime + thirdCompetitorTime;
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;
    let result;

    if (seconds < 10) {
        result = `${minutes}:0${seconds}`;
    } else {
        result = `${minutes}:${seconds}`;
    }
    console.log(result);
}