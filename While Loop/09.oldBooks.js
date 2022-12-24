function oldBooks(input) {
    let wantedBook = input[0];
    let index = 1;
    let bookIndex = input[index];
    let foundBook = false;



    while (bookIndex !== 'No More Books') {

        if (bookIndex === wantedBook) {
            foundBook = true;
            break;
        }

        index++;
        bookIndex = input[index];
    }

    if (foundBook === false) {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${index - 1} books.`);
    } else {
        console.log(`You checked ${index - 1} books and found it.`);
    }
}
oldBooks(["Bourne",
    "True Story",
    "Forever",
    "More Space",
    "The Girl",
    "Spaceship",
    "Strongest",
    "Profit",
    "Tripple",
    "Stella",
    "The Matrix",
    "Bourne"])


