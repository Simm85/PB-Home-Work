function salary(input) {
    let tabCount = Number(input[0]);
    let salary = Number(input[1]);
    let FacebookFine = 150;
    let InstagramFine = 100;
    let RedditFine = 50;


    for (let tabCounter = 2; tabCounter <= input.length; tabCounter++) {
        let domain = input[tabCounter];
        switch (domain) {
            case 'Facebook': salary -= FacebookFine; break;
            case 'Instagram': salary -= InstagramFine; break;
            case 'Reddit': salary -= RedditFine; break;
        }
    }

    if (salary <= 0) {
        console.log(`You have lost your salary.`);
    } else {
        console.log(salary);
    }
}
salary(["3", "500", "Facebook", "Stackoverflow.com", "softuni.bg"]);



