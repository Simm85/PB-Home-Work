function onTime(input) {
    let examHour = Number(input[0]);
    let examMinutes = Number(input[1]);
    let arriveHour = Number(input[2]);
    let arriveMinutes = Number(input[3]);

    let examInMinutes = examHour * 60 + examMinutes;
    let arriveInMinutes = arriveHour * 60 + arriveMinutes;
    let late = arriveInMinutes - examInMinutes;
    let early = examInMinutes - arriveInMinutes;
    let diff = Math.abs(late);
    let hours = parseInt(diff / 60);
    let minutes = diff % 60;

    const zeroPad = (num, places) => String(num).padStart(places, '0');


    if (late > 0) {
        console.log(`Late`)
        if (late <= 59) {
            console.log(`${late} minutes after the start`);
        }
        else {
            console.log(`${hours}:${zeroPad(minutes, 2)} hours after the start`);
        }
    }
    else if (early >= 0 && early <= 30) {
        console.log(`On time`)
        if (early != 0) {
            console.log(`${early} minutes before the start`);
        }
    }
    else if (early > 30) {
        console.log(`Early`)
        if (early <= 59) {
            console.log(`${early} minutes before the start`);
        }
        else {
            console.log(`${hours}:${zeroPad(minutes, 2)} hours before the start`);
        }
    }
}
onTime(["11", "30", "12", "29"]);

