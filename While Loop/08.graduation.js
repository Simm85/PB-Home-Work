function graduation(input) {
    let studentName = input[0];
    let index = 1;
    let annualEvaluation = Number(input[index]);
    let averageEvaluation = 0;
    let totalGradeEvaluation = 0;
    let grade = 0;

    while (grade <= 12) {

        totalGradeEvaluation += annualEvaluation;
        grade++;
        averageEvaluation = (totalGradeEvaluation / grade).toFixed(2);
        index++;
        annualEvaluation = Number(input[index]);

        if (grade === 12) {

            console.log(`${studentName} graduated. Average grade: ${averageEvaluation}`);

        } else if (annualEvaluation < 4) {

            grade++;
            console.log(`${studentName} has been excluded at ${grade} grade`);
            break;

        }
    }
}
graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);
graduation(["Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"]);
