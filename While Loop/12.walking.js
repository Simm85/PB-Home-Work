function walking(input) {
    let index = 0;
    let steps = input[index];
    let currentSteps = 0;
    let oversteps = 0;
    let stepDiff = 0;
    let cmd = '';
    let backSteps = 0;

    while (currentSteps <= 10000) {

        steps = Number(input[index]);

        

        if (steps !== Number(input[index])) {
            cmd = input[index];
            backSteps = Number(input[index + 1]);
        } else {
            currentSteps += steps;
        }



        if (currentSteps >= 10000) {
            oversteps = currentSteps - 10000;
            console.log(`Goal reached! Good job!\n${oversteps} steps over the goal!`);
        }



        if (cmd === 'Going home') {

            currentSteps += backSteps;

            if (currentSteps <= 10000) {

                stepDiff = 10000 - currentSteps;
                console.log(`${stepDiff} more steps to reach goal.`);
                break;

            } else {
                oversteps = currentSteps - 10000;
                console.log(`Goal reached! Good job!\n${oversteps} steps over the goal!`);
            }
        }

        index++;
        steps = input[index];
    }
}
walking(['1500', '3000', '250', '1548', '2000', 'Going home', '2000']);

