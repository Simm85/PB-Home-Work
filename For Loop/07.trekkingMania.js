function trekkingMania(input) {
    let groupNumber = Number(input[0]);

    let totalClimbersNum = 0;
    let EverstClimbersNum = 0;
    let K2ClimbersNum = 0;
    let kilimandjaroClimbersNum = 0;
    let monblanClimbersNum = 0;
    let mussalaClimbersNum = 0;
    let climbersNumPerGroup = 0;

    for (let index = 1; index < input.length; index++) {

        climbersNumPerGroup = Number(input[index]);
        totalClimbersNum += climbersNumPerGroup;

        if (climbersNumPerGroup >= 41) {
            EverstClimbersNum += climbersNumPerGroup;

        } else if (climbersNumPerGroup >= 26) {
            K2ClimbersNum += climbersNumPerGroup;
        }
        else if (climbersNumPerGroup >= 13) {
            kilimandjaroClimbersNum += climbersNumPerGroup;
        } else if (climbersNumPerGroup >= 6) {
            monblanClimbersNum += climbersNumPerGroup;
        } else if (climbersNumPerGroup > 0) {
            mussalaClimbersNum += climbersNumPerGroup;
        }
    }

    let everestPercentage = (EverstClimbersNum / totalClimbersNum * 100).toFixed(2);
    let k2Percentage = (K2ClimbersNum / totalClimbersNum * 100).toFixed(2);
    let kilimandajaroPercentage = (kilimandjaroClimbersNum / totalClimbersNum * 100).toFixed(2);
    let monblanPercentage = (monblanClimbersNum / totalClimbersNum * 100).toFixed(2);
    let mussalaPercentage = (mussalaClimbersNum / totalClimbersNum * 100).toFixed(2);

    console.log(mussalaPercentage + '%');
    console.log(monblanPercentage + '%');
    console.log(kilimandajaroPercentage + '%');
    console.log(k2Percentage + '%');
    console.log(everestPercentage + '%');
}
trekkingMania(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);


