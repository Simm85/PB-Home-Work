function hotelRoom(input) {
    let month = input[0];
    let stayDays = Number(input[1]);
    let studioPrice = 0;
    let apartmentPrice = 0;

    switch (month) {

        case 'May':
        case 'October':
            if (stayDays > 7 && stayDays <= 14) {
                studioPrice += 0.95 * (stayDays * 50);
            } else if (stayDays > 14) {
                studioPrice += 0.70 * (stayDays * 50);
            } else {
                studioPrice += stayDays * 50;
            }
            apartmentPrice += stayDays * 65;
            break;


        case 'June':
        case 'September':
            if (stayDays > 14) {
                studioPrice += 0.80 * (stayDays * 75.20);
            } else {
                studioPrice += stayDays * 75.20;
            }
            apartmentPrice += stayDays * 68.70;
            break;


        case 'July':
        case 'August': studioPrice += stayDays * 76;
            apartmentPrice += stayDays * 77;
            break;
    }

    if (stayDays > 14) {
        apartmentPrice *= 0.90;
    }

    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.\nStudio: ${studioPrice.toFixed(2)} lv.`);
}
hotelRoom(["May", "15"]);


//May, June, July, August, September или October