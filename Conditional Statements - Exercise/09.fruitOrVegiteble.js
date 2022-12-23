function fruitOrVegetable(input) {
    let product = input[0];


    // banana, apple, kiwi, cherry, lemon и grapes         tomato, cucumber, pepper и carrot

    switch (product) {
        case 'banana':
        case 'apple':
        case 'kiwi':
        case 'cherry':
        case 'lemon':
        case 'grapes': console.log('fruit'); break;

        case 'tomato':
        case 'cucumber':
        case 'pepper':
        case 'carrot': console.log('vegetable'); break;
        //default: console.log('unknown');
    }
}



function invalidNumber(input) {
    let number = Number(input[0]);

    if ((number < 100 || number > 200) && number != 0) {
        //console.log('invalid');
    }
}
invalidNumber(['201']);


