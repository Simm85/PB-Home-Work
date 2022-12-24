function password(input) {
    let userName = input[0];
    let truePassword = input[1];
    let index = 2;
    let passAttempts = input[index];

    while (passAttempts !== truePassword) {
        index++;
        passAttempts = input[index];
    }
    console.log(`Welcome ${userName}!`);
}
password(["Gosho","secret","hey","secret"]);
