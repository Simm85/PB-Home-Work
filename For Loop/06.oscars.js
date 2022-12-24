function oscars(input) {
    let artistName = input[0];
    let academyPoints = Number(input[1]);
    let appraisersCount = Number(input[2]);
    let appraiserName = '';
    let appraiserPoints = '';
    let points = 0;
    let nominalPoints = 1250.5;

    for (let i = 3; i < input.length; i++) {

        if (i % 2 != 0) {
            appraiserName = input[i].length;
        } else {
            appraiserPoints = Number(input[i]);
        }
        points =  appraiserName * appraiserPoints / 2;
        academyPoints += points;
        console.log(points);
        if (academyPoints > 1250.5) {
            break;
        }
    }

    

    /* if (finalPoints > nominalPoints) {
         console.log(`Congratulations, ${artistName} got a nominee for leading role with ${finalPoints.toFixed(1)}!`); 
     } else {
         console.log(`Sorry, ${artistName} you need ${(nominalPoints - finalPoints).toFixed(1)} more!`);
     }*/
    //console.log(appraiserName, appraiserNameLength, appraiserPoints , finalPoints);
}
oscars(["Zahari Baharov", "205", "4", "Johnny Depp", "45", "Will Smith", "29", "Jet Lee", "10", "Matthew Mcconaughey", "39"]);
