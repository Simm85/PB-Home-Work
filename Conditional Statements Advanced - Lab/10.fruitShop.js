function fruitShop(input) {
    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    let price = 0;

    switch (day) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday': switch (fruit) {
            case 'banana': price = 2.50; break;
            case 'apple': price = 1.20; break;
            case 'orange': price = 0.85; break;
            case 'grapefruit': price = 1.45; break;
            case 'kiwi': price = 2.70; break;
            case 'pineapple': price = 5.50; break;
            case 'grapes': price = 3.85; break;
            default: console.log('error');
        } break;
        case 'Saturday':
        case 'Sunday': switch (fruit) {
            case 'banana': price = 2.70; break;
            case 'apple': price = 1.25; break;
            case 'orange': price = 0.90; break;
            case 'grapefruit': price = 1.60; break;
            case 'kiwi': price = 3.00; break;
            case 'pineapple': price = 5.60; break;
            case 'grapes': price = 4.20; break;
            default: console.log('error');
        } break;
        default: console.log('error');
    }
    if (day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday' || day === 'Saturday' || day === 'Sunday') {

        if (fruit === 'banana' || fruit === 'apple' || fruit === 'orange' || fruit === 'grapefruit' || fruit === 'kiwi' || fruit === 'pineapple' || fruit === 'grapes') {
            console.log((price * quantity).toFixed(2));
        }
    }
}
fruitShop(['grapefruit', 'Saturday', '1.25']); 