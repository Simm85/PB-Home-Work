function requiredReadingHours(input) {
    let totalSchoolbookPages = Number(input[0]);
    let readPagesPerHour = Number(input[1]);
    let daysToReadOneBook = Number(input[2]);
    let totalTimeToReadOneBook = totalSchoolbookPages / readPagesPerHour;
    let necessaryReadingHours = totalTimeToReadOneBook / daysToReadOneBook;

    console.log(necessaryReadingHours);
}
requiredReadingHours(["212","20","2"]);