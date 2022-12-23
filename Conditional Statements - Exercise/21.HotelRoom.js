function hotelRoom(input) {
    let stayDays = Number(input[0]);
    let roomType = input[1];
    let feedback = input[2];
    let stayNights = stayDays - 1;
    let finalPrice = 0;

    switch (roomType) {
        case 'room for one person':

            finalPrice = stayNights * 18;

            if (feedback === 'positive') {
                finalPrice += finalPrice * 0.25;
            } else if (feedback === 'negative') {
                finalPrice -= finalPrice * 0.10;
            }
            ; break;

        case 'apartment':

            finalPrice = stayNights * 25;

            if (feedback === 'positive') {
                if (stayDays < 10) {
                    finalPrice -= finalPrice * 0.30;
                    finalPrice += finalPrice * 0.25;
                } else if (stayDays >= 10 && stayDays <= 15) {
                    finalPrice -= finalPrice * 0.35;
                    finalPrice += finalPrice * 0.25;
                } else {
                    finalPrice -= finalPrice * 0.50;
                    finalPrice += finalPrice * 0.25;
                }
            } else if (feedback === 'negative') {
                if (stayDays < 10) {
                    finalPrice -= finalPrice * 0.30;
                    finalPrice -= finalPrice * 0.10;
                } else if (stayDays >= 10 && stayDays <= 15) {
                    finalPrice -= finalPrice * 0.35;
                    finalPrice -= finalPrice * 0.10;
                } else {
                    finalPrice -= finalPrice * 0.50;
                    finalPrice -= finalPrice * 0.10;
                }
            }
            ; break;
        case 'president apartment':

            finalPrice = stayNights * 35;

            if (feedback === 'positive') {
                if (stayDays < 10) {
                    finalPrice -= finalPrice * 0.10;
                    finalPrice += finalPrice * 0.25;
                } else if (stayDays >= 10 && stayDays <= 15) {
                    finalPrice -= finalPrice * 0.15;
                    finalPrice += finalPrice * 0.25;
                } else {
                    finalPrice -= finalPrice * 0.20;
                    finalPrice += finalPrice * 0.25;
                }
            } else if (feedback === 'negative') {
                if (stayDays < 10) {
                    finalPrice -= finalPrice * 0.10;
                    finalPrice -= finalPrice * 0.10;
                } else if (stayDays >= 10 && stayDays <= 15) {
                    finalPrice -= finalPrice * 0.15;
                    finalPrice -= finalPrice * 0.10;
                } else {
                    finalPrice -= finalPrice * 0.20;
                    finalPrice -= finalPrice * 0.10;
                }
            }
            ; break;
    }

    console.log(finalPrice.toFixed(2));
}
hotelRoom(["30",
    "president apartment",
    "negative"])






