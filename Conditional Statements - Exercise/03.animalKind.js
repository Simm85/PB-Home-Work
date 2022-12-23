function animalKind(input) {
    let animalKind = input[0];

    switch (animalKind) {
        case 'dog': console.log('mammal'); break;
        case 'crocodile':
        case 'tortoise':
        case 'snake': console.log('reptile'); break;
        default: console.log('unknown');
    }
}
animalKind(["dog"]);