function cake(input) {
    let cakeWidth = Number(input[0]);
    let cakeLength = Number(input[1]);
    let i = 2;
    let data = input[i];
    let cmd = '';
    let cakeSize = cakeWidth * cakeLength;
    let neededPieces = 0;
    let nums = 0;


    while (cmd !== 'STOP') {

        data = Number(input[i]);

        if (data !== Number(input[i])) {
            cmd = input[i];
        } else {
            nums = Number(input[i]);
        }

        cakeSize -= nums;

        if (cmd === 'STOP') {

            console.log(`${cakeSize + Number(input[i - 1])} pieces are left.`);

        } else if (cakeSize < 0) {

            neededPieces = Math.abs(cakeSize);
            console.log(`No more cake left! You need ${neededPieces} pieces more.`);
            break;

        }

        i++;
        data = input[i];
    }
}
cake(["10", "2", "2", "4", "6", "STOP"]);
cake(["10", "10", "20", "20", "20", "20", "21"]);


