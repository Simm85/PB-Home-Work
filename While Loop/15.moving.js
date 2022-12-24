function moving(input) {
    let spaceWidth = Number(input[0]);
    let spaceLength = Number(input[1]);
    let spaceHeight = Number(input[2]);
    let currentSpace = 0;
    let leftFreeSpace = 0;
    let neededSpace = 0;
    let i = 3;
    let stuffBoxs = Number(input[i]);
    let cmd = '';
    let roomSpace = spaceWidth * spaceLength * spaceHeight;


    while (roomSpace > currentSpace) {

        if (stuffBoxs !== Number(input[i])) {

            cmd = input[i];

        } else {

            currentSpace += stuffBoxs;

        }

        if (roomSpace < currentSpace) {

            neededSpace = currentSpace - roomSpace;
            console.log(`No more free space! You need ${neededSpace} Cubic meters more.`);


        } else if (cmd === 'Done') {

            leftFreeSpace = roomSpace - currentSpace;
            console.log(`${leftFreeSpace} Cubic meters left.`);
            break;

        }

        i++;
        stuffBoxs = Number(input[i]);
    }
}
moving(["10", "1", "2", "4", "6", "Done"]);

