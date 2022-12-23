function tradeCommisions(input) {
    let town = input[0];
    let sales = Number(input[1]);
    let commision = 0;

    switch (town) {

        case 'Sofia':
            if (sales > 10000) {
                commision = 0.12 * sales;
            } else if (sales <= 10000 && sales > 1000) {
                commision = 0.08 * sales;
            } else if (sales <= 1000 && sales > 500) {
                commision = 0.07 * sales;
            } else if (sales <= 500 && sales > 0) {
                commision = 0.05 * sales;
            } break;

        case 'Varna':
            if (sales > 10000) {
                commision = 0.13 * sales;
            } else if (sales <= 10000 && sales > 1000) {
                commision = 0.1 * sales;
            } else if (sales <= 1000 && sales > 500) {
                commision = 0.075 * sales;
            } else if (sales <= 500 && sales > 0) {
                commision = 0.045 * sales;
            } break;

        case 'Plovdiv':
            if (sales > 10000) {
                commision = 0.145 * sales;
            } else if (sales <= 10000 && sales > 1000) {
                commision = 0.12 * sales;
            } else if (sales <= 1000 && sales > 500) {
                commision = 0.08 * sales;
            } else if (sales <= 500 && sales > 0) {
                commision = 0.055 * sales;
            } break;
        // default: console.log('error');
    }

    if (sales >= 0 && (town === 'Sofia' || town === 'Varna' || town === 'Plovdiv')) {
        console.log(commision.toFixed(2));
    } else {
        console.log('error');
    }
}
tradeCommisions(["Plovdiv","220"]);
