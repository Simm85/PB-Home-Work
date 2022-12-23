function guessPassword(input) {
    let passWordInput = input[0];
    let passWord = 's3cr3t!P@ssw0rd';

    if (passWordInput === passWord) {
        console.log('Welcome');
    } else {
        console.log('Wrong password!');
    }
}
guessPassword(['s3cr3t!P@ssw0rd']);